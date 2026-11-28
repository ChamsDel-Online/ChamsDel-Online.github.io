/* Click and tool events for GA4 (measurement ID is set in each page's gtag snippet).
   Sends no form input and no personal data. Safe if gtag is blocked. */
(function () {
  function send(name, params) {
    if (typeof window.gtag !== "function") return;
    var p = params || {};
    p.page_path = window.location.pathname;
    try { window.gtag("event", name, p); } catch (e) { /* ignore */ }
  }

  // Tools call this: ChamsTrack("tool_use", { tool_name: "...", action: "generate" })
  window.ChamsTrack = send;

  function where(el) {
    var node = el;
    while (node && node !== document.body) {
      if (node.getAttribute && node.getAttribute("data-cta")) return node.getAttribute("data-cta");
      node = node.parentNode;
    }
    return "page";
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var loc = where(a);
    if (a.hasAttribute("data-booking-link") || href.indexOf("calendly.com") !== -1) {
      send("book_call_click", { link_location: loc });
    } else if (href.indexOf("mailto:") === 0) {
      send("email_click", { link_location: loc });
    } else if (href.indexOf("airunbook.substack.com") !== -1) {
      send("runbook_click", { link_location: loc });
    } else if (/^(https:\/\/chamsdel\.online)?\/advisory\/?(#.*)?$/.test(href) && window.location.pathname.indexOf("/advisory") !== 0) {
      if (!a.closest("nav")) send("advisory_click", { link_location: loc });
    } else if (/^(https:\/\/chamsdel\.online)?\/tools\/ai-/.test(href)) {
      send("tool_link_click", { link_location: loc, tool_path: href.replace("https://chamsdel.online", "") });
    }
  });

  // The Substack signup form sits in a cross-origin iframe, so a completed signup cannot be seen.
  // When focus moves into the iframe, record that the visitor interacted with the form.
  var sent = false;
  window.addEventListener("blur", function () {
    setTimeout(function () {
      var el = document.activeElement;
      if (!sent && el && el.tagName === "IFRAME" && (el.getAttribute("src") || "").indexOf("airunbook.substack.com") !== -1) {
        sent = true;
        send("runbook_signup_interact", { link_location: where(el) });
      }
    }, 0);
  });
})();
