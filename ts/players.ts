// ============================================================
//  Real Madrid Spielerdaten – Saison 2025/26
//  Hier kannst du Spieler ergänzen, ändern oder entfernen.
//  Bilder lege bitte unter /images/players/<id>.jpg ab.
// ============================================================

export type Position = "Tor" | "Verteidigung" | "Mittelfeld" | "Angriff" | "Staff";

export interface EquipmentLink {
  label: string;
  url: string;
}

export interface Player {
  id: string;                 // wird auch für Bilddatei verwendet (images/players/<id>.jpg)
  name: string;               // vollständiger Name
  position: Position;
  role?: string;              // z.B. "Innenverteidiger" oder "Trainer"
  number?: number;            // Rückennummer
  birthday: string;           // ISO-Datum YYYY-MM-DD
  origin: string;             // Nationalität / Herkunft
  description: string;        // Charakterbeschreibung
  achievements: string;       // gewonnene Titel / Rekorde
  equipmentText: string;      // kurzer Text zur Ausrüstung
  equipmentImages: string[];  // relative Pfade z.B. "images/equipment/vinicius-boots.jpg"
  links: EquipmentLink[];     // externe Shop- oder Social-Media-Links
  lastUpdated: string;        // YYYY-MM-DD
}

// -----------------------------------------------------------
//  KADER 25/26
// -----------------------------------------------------------
export const players: Player[] = [
  // ===== TOR =====
  {
    id: "courtois",
    name: "Thibaut Courtois",
    position: "Tor",
    role: "Stammtorhüter",
    number: 1,
    birthday: "1992-05-11",
    origin: "Belgien",
    description:
      "Einer der besten Torhüter der Welt. Bekannt für seine Reflexe, Größe und Ruhe in entscheidenden Spielen. Entscheidender Faktor beim CL-Sieg 2022.",
    achievements: "Champions League, La Liga, Copa del Rey, Yashin Trophy 2022",
    equipmentText: "Torwarthandschuhe und Schuhe von adidas.",
    equipmentImages: [
      "images/equipment/courtois-handschuhe.jpg",
      "images/equipment/courtois-boots.jpg"
    ],
    links: [
      { label: "adidas Predator (Shop)", url: "https://www.adidas.com/" },
      { label: "Instagram", url: "https://www.instagram.com/thibautcourtois/" }
    ],
    lastUpdated: "2026-05-04"
  },
  {
    id: "lunin",
    name: "Andriy Lunin",
    position: "Tor",
    role: "Torhüter",
    number: 13,
    birthday: "1999-02-11",
    origin: "Ukraine",
    description:
      "Junger, talentierter Torhüter mit hervorragender Spielintelligenz. Übernahm in der CL-Saison 23/24 wichtige Spiele.",
    achievements: "Champions League, La Liga",
    equipmentText: "Handschuhe von Nike.",
    equipmentImages: ["images/equipment/lunin-handschuhe.jpg"],
    links: [{ label: "Nike Goalkeeper", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },

  // ===== VERTEIDIGUNG =====
  {
    id: "carvajal",
    name: "Daniel Carvajal",
    position: "Verteidigung",
    role: "Rechtsverteidiger",
    number: 2,
    birthday: "1992-01-11",
    origin: "Spanien",
    description:
      "Erfahrener Rechtsverteidiger und Kapitän. Bekannt für Offensivdrang und Erfahrung in entscheidenden Champions-League-Finals.",
    achievements: "6× Champions League, mehrere La-Liga-Titel, Europameister 2024",
    equipmentText: "Schuhe von adidas Predator.",
    equipmentImages: ["images/equipment/carvajal-boots.jpg"],
    links: [{ label: "adidas Predator", url: "https://www.adidas.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "militao",
    name: "Éder Militão",
    position: "Verteidigung",
    role: "Innenverteidiger",
    number: 3,
    birthday: "1998-01-18",
    origin: "Brasilien",
    description:
      "Schneller, kopfballstarker Innenverteidiger. Wichtiger Stabilisator in der Defensive.",
    achievements: "Champions League, La Liga, Copa America",
    equipmentText: "Schuhe von Nike Mercurial.",
    equipmentImages: ["images/equipment/militao-boots.jpg"],
    links: [{ label: "Nike Mercurial", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "ruediger",
    name: "Antonio Rüdiger",
    position: "Verteidigung",
    role: "Innenverteidiger",
    number: 22,
    birthday: "1993-03-03",
    origin: "Deutschland",
    description:
      "Kompromissloser Verteidiger mit Führungsqualitäten. Berühmt für seine Zweikampfstärke und Torgefahr im Strafraum.",
    achievements: "Champions League, La Liga, FA Cup",
    equipmentText: "Schuhe von adidas X.",
    equipmentImages: ["images/equipment/ruediger-boots.jpg"],
    links: [{ label: "adidas X Crazyfast", url: "https://www.adidas.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "alaba",
    name: "David Alaba",
    position: "Verteidigung",
    role: "Innenverteidiger",
    number: 4,
    birthday: "1992-06-24",
    origin: "Österreich",
    description:
      "Vielseitiger Defensivspieler mit großer Erfahrung. Spielintelligenz und ruhiger Aufbau zeichnen ihn aus.",
    achievements: "Champions League, La Liga, Bundesliga",
    equipmentText: "Schuhe von Nike Phantom.",
    equipmentImages: ["images/equipment/alaba-boots.jpg"],
    links: [{ label: "Nike Phantom", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "mendy",
    name: "Ferland Mendy",
    position: "Verteidigung",
    role: "Linksverteidiger",
    number: 23,
    birthday: "1995-06-08",
    origin: "Frankreich",
    description:
      "Schneller, defensivstarker Linksverteidiger. Sehr robust im Eins-gegen-Eins.",
    achievements: "Champions League, La Liga",
    equipmentText: "Schuhe von Nike Mercurial.",
    equipmentImages: ["images/equipment/mendy-boots.jpg"],
    links: [{ label: "Nike Mercurial", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "fran-garcia",
    name: "Fran García",
    position: "Verteidigung",
    role: "Linksverteidiger",
    number: 20,
    birthday: "1999-08-14",
    origin: "Spanien",
    description:
      "Wendiger Linksverteidiger mit guter Offensive. Spielt seit der Rückkehr aus Vallecano für Real Madrid.",
    achievements: "La Liga",
    equipmentText: "Schuhe von Nike.",
    equipmentImages: ["images/equipment/fran-garcia-boots.jpg"],
    links: [{ label: "Nike Tiempo", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },

  // ===== MITTELFELD =====
  {
    id: "bellingham",
    name: "Jude Bellingham",
    position: "Mittelfeld",
    role: "Zentraler Mittelfeldspieler",
    number: 5,
    birthday: "2003-06-29",
    origin: "England",
    description:
      "Junges Ausnahmetalent. Box-to-Box-Spieler mit Torgefahr, Übersicht und Führungsstärke. Sofort zum Publikumsliebling geworden.",
    achievements: "La Liga, Copa del Rey, Champions League",
    equipmentText: "Adidas Predator 25 Elite",
    equipmentImages: ["images/equipment/bellingham-boots.jpg"],
    links: [
      { label: "Adidas Predator 25 Elite", url: "https://www.adidas.com/" },
      { label: "Instagram", url: "https://www.instagram.com/judebellingham/" }
    ],
    lastUpdated: "2026-05-04"
  },
  {
    id: "valverde",
    name: "Federico Valverde",
    position: "Mittelfeld",
    role: "Box-to-Box / Außen",
    number: 15,
    birthday: "1998-07-22",
    origin: "Uruguay",
    description:
      "Laufstarker Allrounder mit hartem Schuss. Wichtiger Kämpfer im Mittelfeld und Notlösung als Rechtsverteidiger.",
    achievements: "Champions League, La Liga, Copa America",
    equipmentText: "Schuhe von adidas Predator.",
    equipmentImages: ["images/equipment/valverde-boots.jpg"],
    links: [{ label: "adidas Predator", url: "https://www.adidas.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "tchouameni",
    name: "Aurélien Tchouaméni",
    position: "Mittelfeld",
    role: "Defensiver Mittelfeldspieler",
    number: 14,
    birthday: "2000-01-27",
    origin: "Frankreich",
    description:
      "Dynamischer Sechser mit Übersicht und Zweikampfstärke. Kann auch in der Innenverteidigung aushelfen.",
    achievements: "Champions League, La Liga",
    equipmentText: "Schuhe von Nike Phantom.",
    equipmentImages: ["images/equipment/tchouameni-boots.jpg"],
    links: [{ label: "Nike Phantom", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "camavinga",
    name: "Eduardo Camavinga",
    position: "Mittelfeld",
    role: "Zentraler Mittelfeldspieler",
    number: 6,
    birthday: "2002-11-10",
    origin: "Frankreich",
    description:
      "Technisch starker, sehr beweglicher Mittelfeldspieler. Auch als Linksverteidiger einsetzbar.",
    achievements: "Champions League, La Liga",
    equipmentText: "Schuhe von Nike Mercurial.",
    equipmentImages: ["images/equipment/camavinga-boots.jpg"],
    links: [{ label: "Nike Mercurial", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "guler",
    name: "Arda Güler",
    position: "Mittelfeld",
    role: "Offensiver Mittelfeldspieler",
    number: 24,
    birthday: "2005-02-25",
    origin: "Türkei",
    description:
      "Hochbegabter junger Spielmacher mit feiner Technik und gutem linken Fuß. Zukunftshoffnung für Real Madrid.",
    achievements: "La Liga",
    equipmentText: "Schuhe von Nike Phantom.",
    equipmentImages: ["images/equipment/guler-boots.jpg"],
    links: [{ label: "Nike Phantom", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },

  // ===== ANGRIFF =====
  {
    id: "vinicius",
    name: "Vinícius Júnior",
    position: "Angriff",
    role: "Linksaußen",
    number: 7,
    birthday: "2000-07-12",
    origin: "Brasilien",
    description:
      "Einer der besten Dribbler der Welt. Schnell, kreativ und torgefährlich. Spielentscheidender Spieler im CL-Finale 2022.",
    achievements: "Champions League, La Liga, FIFA-Welttorhüter-Awards",
    equipmentText: "Schuhe von Nike Mercurial – Spezial-Edition für Vinícius.",
    equipmentImages: [
      "images/equipment/vinicius-boots.jpg",
      "images/equipment/vinicius-trikot.jpg"
    ],
    links: [
      { label: "Nike Mercurial Vinícius", url: "https://www.nike.com/" },
      { label: "Instagram", url: "https://www.instagram.com/vinijr/" }
    ],
    lastUpdated: "2026-05-04"
  },
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    position: "Angriff",
    role: "Stürmer",
    number: 9,
    birthday: "1998-12-20",
    origin: "Frankreich",
    description:
      "Weltklasse-Stürmer mit unfassbarer Geschwindigkeit und Abschlussstärke. Wechselte 2024 zu Real Madrid.",
    achievements: "Weltmeister 2018, Champions League, mehrere Ligue-1-Titel",
    equipmentText: "Schuhe von Nike Mercurial Superfly.",
    equipmentImages: [
      "images/equipment/mbappe-boots.jpg",
      "images/equipment/mbappe-trikot.jpg"
    ],
    links: [
      { label: "Nike Mercurial Superfly", url: "https://www.nike.com/" },
      { label: "Instagram", url: "https://www.instagram.com/k.mbappe/" }
    ],
    lastUpdated: "2026-05-04"
  },
  {
    id: "rodrygo",
    name: "Rodrygo Goes",
    position: "Angriff",
    role: "Rechtsaußen",
    number: 11,
    birthday: "2001-01-09",
    origin: "Brasilien",
    description:
      "Spielintelligenter, technisch starker Flügelspieler. Bekannt für entscheidende Tore in der Champions League.",
    achievements: "Champions League, La Liga, Copa America",
    equipmentText: "Schuhe von Nike Mercurial.",
    equipmentImages: ["images/equipment/rodrygo-boots.jpg"],
    links: [{ label: "Nike Mercurial", url: "https://www.nike.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "endrick",
    name: "Endrick Felipe",
    position: "Angriff",
    role: "Mittelstürmer",
    number: 16,
    birthday: "2006-07-21",
    origin: "Brasilien",
    description:
      "Junges Sturmtalent aus Brasilien. Bekannt für Kraft, Abschluss und großes Selbstbewusstsein.",
    achievements: "Brasilianische Liga, Auswahl-Talente Awards",
    equipmentText: "Schuhe von New Balance.",
    equipmentImages: ["images/equipment/endrick-boots.jpg"],
    links: [{ label: "New Balance Football", url: "https://www.newbalance.com/" }],
    lastUpdated: "2026-05-04"
  },

  // ===== STAFF =====
  {
    id: "xabi-alonso",
    name: "Xabi Alonso",
    position: "Staff",
    role: "Cheftrainer",
    birthday: "1981-11-25",
    origin: "Spanien",
    description:
      "Ehemalige Madrid-Legende, jetzt als Trainer tätig. Bringt taktische Klarheit und moderne Spielidee.",
    achievements: "Als Spieler: Weltmeister, EM, Champions League. Als Trainer: Bundesliga-Meister mit Leverkusen 2024",
    equipmentText: "Trainerausrüstung von adidas.",
    equipmentImages: [],
    links: [{ label: "Profil", url: "https://www.realmadrid.com/" }],
    lastUpdated: "2026-05-04"
  },
  {
    id: "florentino-perez",
    name: "Florentino Pérez",
    position: "Staff",
    role: "Präsident",
    birthday: "1947-03-08",
    origin: "Spanien",
    description:
      "Langjähriger Präsident von Real Madrid. Verantwortlich für die moderne Galáctico-Ära und den Bernabéu-Umbau.",
    achievements: "Mehrere Champions-League-Titel als Präsident, Bernabéu-Modernisierung",
    equipmentText: "Im Alltag im Anzug am Bernabéu.",
    equipmentImages: [],
    links: [{ label: "Real Madrid CF", url: "https://www.realmadrid.com/" }],
    lastUpdated: "2026-05-04"
  }
];
