/* Single source of truth for the discovery call booking link.
   Any link marked with data-booking-link points here. */
var BOOKING_URL = "https://calendly.com/chaminda-chamsdel/30min";

(function () {
  function applyBookingUrl() {
    var links = document.querySelectorAll("[data-booking-link]");
    for (var i = 0; i < links.length; i += 1) {
      links[i].setAttribute("href", BOOKING_URL);
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
