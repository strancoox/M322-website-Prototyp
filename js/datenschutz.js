/* Datenschutz-Seite: Cookie-Reset Button */
(function () {
  var STORAGE_KEY = "rm_fanpage_cookie_accepted";

  function init() {
    var resetBtn = document.getElementById("cookie-reset");
    if (!resetBtn) return;

    resetBtn.addEventListener("click", function () {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      alert(
        "Cookie-Zustimmung wurde zurückgesetzt. Beim nächsten Seitenaufruf erscheint der Banner wieder."
      );
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
