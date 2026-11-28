/* Single source of truth for the discovery call booking link.
   Any link marked with data-booking-link points here. */
var BOOKING_URL = "https://calendly.com/chaminda-chamsdel/30min";

(function () {
  // Tag the booking link with the page it was clicked from, so Calendly shows where bookings come from.
  function bookingUrlForPage() {
    var slug = window.location.pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "-") || "home";
    var sep = BOOKING_URL.indexOf("?") === -1 ? "?" : "&";
    return BOOKING_URL + sep + "utm_source=chamsdel.online&utm_medium=site&utm_content=" + encodeURIComponent(slug);
  }

  function applyBookingUrl() {
    var url = bookingUrlForPage();
    var links = document.querySelectorAll("[data-booking-link]");
    for (var i = 0; i < links.length; i += 1) {
      links[i].setAttribute("href", url);
      links[i].setAttribute("target", "_blank");
      links[i].setAttribute("rel", "noopener noreferrer");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyBookingUrl);
  } else {
    applyBookingUrl();
  }
})();
