/* Cookie-Banner – wird auf jeder Seite eingebunden */
(function () {
  var STORAGE_KEY = "rm_fanpage_cookie_accepted";

  function initCookieBanner() {
    var banner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("cookie-accept");
    if (!banner || !acceptBtn) return;

    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        banner.hidden = false;
      }
    } catch (e) {
      banner.hidden = false;
    }

    acceptBtn.addEventListener("click", function () {
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch (e) {}
      banner.hidden = true;
    });
  }

  // Global verfügbar machen, falls andere Scripts es brauchen
  window.initCookieBanner = initCookieBanner;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCookieBanner);
  } else {
    initCookieBanner();
  }
})();
