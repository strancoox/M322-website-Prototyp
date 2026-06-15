/* Hauptlogik: Kader rendern + Modal öffnen + Hero-Slideshow
   Erwartet: window.PLAYERS aus players.js */
(function () {
  var POSITION_ORDER = ["Tor", "Verteidigung", "Mittelfeld", "Angriff", "Staff"];

  function calcAge(birthday) {
    var birth = new Date(birthday);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  function formatDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("de-DE");
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function buildPlayerCard(player) {
    var card = document.createElement("article");
    card.className = "player-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Profil von " + player.name + " öffnen");

    if (player.position !== "Staff") {
      var imgWrap = document.createElement("div");
      imgWrap.className = "player-card-image";

      var img = document.createElement("img");
      img.src = "images/players/" + player.id + ".jpg";
      img.alt = player.name;
      img.onerror = function () {
        img.remove();
        imgWrap.textContent = "Bild fehlt";
      };
      imgWrap.appendChild(img);
      card.appendChild(imgWrap);
    }

    var info = document.createElement("div");
    info.className = "player-card-info";

    if (typeof player.number === "number") {
      var numberSpan = document.createElement("span");
      numberSpan.className = "number";
      numberSpan.textContent = String(player.number);
      info.appendChild(numberSpan);
    }

    var nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = player.name;
    info.appendChild(nameSpan);

    if (player.role) {
      var roleSpan = document.createElement("span");
      roleSpan.className = "role";
      roleSpan.textContent = player.role;
      info.appendChild(roleSpan);
    }

    card.appendChild(info);

    card.addEventListener("click", function () { openModal(player); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(player);
      }
    });

    return card;
  }

  function renderKader() {
    var kaderEl = document.getElementById("kader");
    if (!kaderEl) return;
    var players = window.PLAYERS || [];

    POSITION_ORDER.forEach(function (pos) {
      var list = players.filter(function (p) { return p.position === pos; });
      if (list.length === 0) return;

      var section = document.createElement("section");
      section.className = "position-section";

      var title = document.createElement("h2");
      title.className = "position-title";
      title.textContent = pos;
      section.appendChild(title);

      var grid = document.createElement("div");
      grid.className = "players-grid";

      list.forEach(function (player) { grid.appendChild(buildPlayerCard(player)); });

      section.appendChild(grid);
      kaderEl.appendChild(section);
    });
  }

  function openModal(player) {
    var modal = document.getElementById("player-modal");
    if (!modal) return;

    setText("modal-name", player.name);
    setText("modal-role-tag", player.role || "");
    setText("modal-description", player.description);
    setText("modal-position", player.position);
    setText("modal-number", typeof player.number === "number" ? "#" + player.number : "—");
    setText("modal-age", calcAge(player.birthday) + " Jahre");
    setText("modal-birthday", formatDate(player.birthday));
    setText("modal-origin", player.origin);
    setText("modal-achievements", player.achievements);
    setText("modal-equipment-text", player.equipmentText);
    setText("modal-update", formatDate(player.lastUpdated));

    var imgEl = document.getElementById("modal-image");
    if (imgEl) {
      imgEl.style.display = "";
      imgEl.alt = player.name;
      imgEl.onerror = function () { imgEl.style.display = "none"; };
      imgEl.src = "images/players/" + player.id + ".jpg";
    }

    var equipGrid = document.getElementById("modal-equipment-images");
    if (equipGrid) {
      equipGrid.innerHTML = "";
      (player.equipmentImages || []).forEach(function (src) {
        var i = document.createElement("img");
        i.alt = player.name + " Ausrüstung";
        i.onerror = function () { i.remove(); };
        i.src = src;
        equipGrid.appendChild(i);
      });
    }

    var linksEl = document.getElementById("modal-links");
    if (linksEl) {
      linksEl.innerHTML = "";
      (player.links || []).forEach(function (l) {
        var a = document.createElement("a");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = l.label;
        linksEl.appendChild(a);
      });
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    var modal = document.getElementById("player-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* === Slideshow mit Pfeil-Navigation === */
  function initHeroSlideshow() {
    var slidesContainer = document.getElementById("hero-slides");
    if (!slidesContainer) return;

    var slides = slidesContainer.querySelectorAll(".hero-slide");
    if (slides.length < 2) return;

    var prevBtn = document.getElementById("hero-prev");
    var nextBtn = document.getElementById("hero-next");

    var current = 0;
    var intervalMs = 5000;
    var timer = null;

    function show(index) {
      var idx = ((index % slides.length) + slides.length) % slides.length;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("is-active", i === idx);
      }
      current = idx;
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }
    function start() { stop(); timer = setInterval(next, intervalMs); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    if (nextBtn) nextBtn.addEventListener("click", function () { next(); start(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); start(); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { prev(); start(); }
      else if (e.key === "ArrowRight") { next(); start(); }
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });

    start();
  }

  function init() {
    renderKader();
    initHeroSlideshow();

    var modal = document.getElementById("player-modal");
    var closeBtn = document.querySelector(".modal-close");

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
