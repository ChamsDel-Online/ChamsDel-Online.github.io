const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const MODEL = "gpt-4.1-mini";

const MAX_BODY_BYTES = 8 * 1024 * 1024;

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        reject(new Error("Request body too large."));
      }
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Invalid JSON body."));
      }
    });

    req.on("error", () => {
      reject(new Error("Failed to read request body."));
    });
  });
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function text(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed || fallback;
}

function number(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function extractStructuredOutput(data) {
  if (!data || typeof data !== "object") {
    return null;
  }

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text;
  }

  if (Array.isArray(data.output)) {
    for (const item of data.output) {
      if (!item || !Array.isArray(item.content)) continue;

      for (const content of item.content) {
        if (!content || typeof content !== "object") continue;

        if (typeof content.text === "string" && content.text.trim()) {
          return content.text;
        }

        if (content.type === "output_text" && typeof content.text === "string" && content.text.trim()) {
          return content.text;
        }

        if (content.type === "json_schema" && content.json && typeof content.json === "object") {
          return JSON.stringify(content.json);
        }
      }
    }
  }

  return null;
}

function parseJsonSafely(content) {
  try {
    return JSON.parse(content);
  } catch (error) {
    const trimmed = String(content).trim();
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    const candidate = fenced ? fenced[1] : trimmed;
    return JSON.parse(candidate);
  }
}

async function callOpenAI(instructions, input) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: MODEL,
      input: input,
      text: {
        format: {
          type: "json_schema",
          name: "tool_response",
          strict: true,
          schema: instructions.schema
        }
      },
      instructions: instructions.prompt
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data &&
      data.error &&
      typeof data.error.message === "string" &&
      data.error.message;
    throw new Error(message || "OpenAI request failed.");
  }

  const content = extractStructuredOutput(data);
  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  return parseJsonSafely(content);
}

function buildIdeaPrompt(payload) {
  const score = number(payload.score, 0);
  const pain = number(payload.pain, 5);
  const reach = number(payload.reach, 5);
  const money = number(payload.money, 5);
  const speed = number(payload.speed, 5);
  const energy = number(payload.energy, 5);

  return {
    prompt:
      "You are evaluating a small software idea for an indie maker. " +
      "Be practical, concise, and honest. " +
      "Return a short insight, one main risk, and one next step. " +
      "Do not use hype. Keep each field under 45 words.",
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        insight: { type: "string" },
        warning: { type: "string" },
        nextStep: { type: "string" }
      },
      required: ["insight", "warning", "nextStep"]
    },
    input:
      "Idea name: " + text(payload.idea, "Unknown") + "\n" +
      "Audience: " + text(payload.audience, "Unknown") + "\n" +
      "Problem: " + text(payload.problem, "Unknown") + "\n" +
      "Composite score: " + score + "/100\n" +
      "Pain: " + pain + "/10\n" +
      "Reach: " + reach + "/10\n" +
      "Willingness to pay: " + money + "/10\n" +
      "MVP speed: " + speed + "/10\n" +
      "Founder energy: " + energy + "/10"
  };
}

function buildContentPrompt(payload) {
  return {
    prompt:
      "You write build-in-public post angles for founders. " +
      "Generate five distinct, concrete post angles. " +
      "Each angle should be a single sentence, under 35 words, and usable as a starting point for X or LinkedIn. " +
      "Avoid hashtags, emojis, and generic motivation.",
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        angles: {
          type: "array",
          items: { type: "string" },
          minItems: 5,
          maxItems: 5
        }
      },
      required: ["angles"]
    },
    input:
      "Product: " + text(payload.product, "Unknown") + "\n" +
      "Audience: " + text(payload.audience, "Unknown") + "\n" +
      "Pain: " + text(payload.pain, "Unknown") + "\n" +
      "Outcome: " + text(payload.outcome, "Unknown") + "\n" +
      "Why building it: " + text(payload.why, "Unknown") + "\n" +
      "Extra detail: " + text(payload.detail, "None")
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  try {
    const body = await readJsonBody(req);
    const type = text(body.type, "");
    const payload = body && typeof body.payload === "object" ? body.payload : {};

    if (type !== "idea-score" && type !== "content") {
      return sendJson(res, 400, { error: "Unsupported AI tool type." });
    }

    let request;
    if (type === "idea-score") request = buildIdeaPrompt(payload);
    else request = buildContentPrompt(payload);

    const result = await callOpenAI(request, request.input);

    return sendJson(res, 200, result);
  } catch (error) {
    const message =
      error && typeof error.message === "string"
        ? error.message
        : "AI tool request failed.";

    return sendJson(res, 500, { error: message });
  }
};
