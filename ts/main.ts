// ============================================================
//  Hauptlogik: Kader rendern + Modal öffnen
// ============================================================

import { players, Player, Position } from "./players.js";
import { initCookieBanner } from "./cookie.js";

const POSITION_ORDER: Position[] = ["Tor", "Verteidigung", "Mittelfeld", "Angriff", "Staff"];

/**
 * Berechnet das Alter aus einem Geburtstag (YYYY-MM-DD).
 */
function calcAge(birthday: string): number {
  const birth = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/**
 * Formatiert ein ISO-Datum als TT.MM.JJJJ
 */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE");
}

/**
 * Rendert den Kader gruppiert nach Position.
 */
function renderKader(): void {
  const kaderEl = document.getElementById("kader");
  if (!kaderEl) return;

  POSITION_ORDER.forEach((pos) => {
    const list = players.filter((p) => p.position === pos);
    if (list.length === 0) return;

    const section = document.createElement("section");
    section.className = "position-section";

    const title = document.createElement("h2");
    title.className = "position-title";
    title.textContent = pos;
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "players-grid";

    list.forEach((player) => grid.appendChild(buildPlayerCard(player)));

    section.appendChild(grid);
    kaderEl.appendChild(section);
  });
}

/**
 * Baut eine einzelne Spielerkarte.
 */
function buildPlayerCard(player: Player): HTMLElement {
  const card = document.createElement("article");
  card.className = "player-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Profil von ${player.name} öffnen`);

  // IMAGE-Bereich
  const imgWrap = document.createElement("div");
  imgWrap.className = "player-card-image";

  const img = document.createElement("img");
  img.src = `images/players/${player.id}.jpg`;
  img.alt = player.name;
  // Wenn Bild fehlt: Platzhalter-Text einblenden
  img.onerror = () => {
    img.remove();
    imgWrap.textContent = "Bild fehlt";
  };
  imgWrap.appendChild(img);

  const info = document.createElement("div");
  info.className = "player-card-info";

  if (typeof player.number === "number") {
    const numberSpan = document.createElement("span");
    numberSpan.className = "number";
    numberSpan.textContent = String(player.number);
    info.appendChild(numberSpan);
  }

  const nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.textContent = player.name;
  info.appendChild(nameSpan);

  if (player.role) {
    const roleSpan = document.createElement("span");
    roleSpan.className = "role";
    roleSpan.textContent = player.role;
    info.appendChild(roleSpan);
  }

  card.appendChild(imgWrap);
  card.appendChild(info);

  card.addEventListener("click", () => openModal(player));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(player);
    }
  });

  return card;
}

/**
 * Öffnet das Modal mit den Daten des Spielers.
 */
function openModal(player: Player): void {
  const modal = document.getElementById("player-modal");
  if (!modal) return;

  setText("modal-name", player.name);
  setText("modal-description", player.description);
  setText("modal-position", `${player.position}${player.role ? " – " + player.role : ""}`);
  setText("modal-number", typeof player.number === "number" ? String(player.number) : "—");
  setText("modal-age", `${calcAge(player.birthday)} Jahre`);
  setText("modal-birthday", formatDate(player.birthday));
  setText("modal-origin", player.origin);
  setText("modal-achievements", player.achievements);
  setText("modal-equipment-text", player.equipmentText);
  setText("modal-update", formatDate(player.lastUpdated));

  // Spielerbild
  const imgEl = document.getElementById("modal-image") as HTMLImageElement | null;
  if (imgEl) {
    imgEl.src = `images/players/${player.id}.jpg`;
    imgEl.alt = player.name;
    imgEl.onerror = () => {
      imgEl.alt = "Bild fehlt";
      imgEl.style.display = "none";
    };
    imgEl.style.display = "";
  }

  // Ausrüstungsbilder
  const equipGrid = document.getElementById("modal-equipment-images");
  if (equipGrid) {
    equipGrid.innerHTML = "";
    player.equipmentImages.forEach((src) => {
      const i = document.createElement("img");
      i.src = src;
      i.alt = `${player.name} Ausrüstung`;
      i.onerror = () => i.remove();
      equipGrid.appendChild(i);
    });
  }

  // Links (Shop / Social)
  const linksEl = document.getElementById("modal-links");
  if (linksEl) {
    linksEl.innerHTML = "";
    player.links.forEach((l) => {
      const a = document.createElement("a");
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

/**
 * Schließt das Modal.
 */
function closeModal(): void {
  const modal = document.getElementById("player-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setText(id: string, value: string): void {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/**
 * Initialisierung
 */
document.addEventListener("DOMContentLoaded", () => {
  renderKader();
  initCookieBanner();

  const modal = document.getElementById("player-modal");
  const closeBtn = document.querySelector(".modal-close");

  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
