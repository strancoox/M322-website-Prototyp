# Real Madrid CF – Fanpage

Eine inoffizielle Real-Madrid-Fanseite mit Spielerprofilen, Vereinsgeschichte
und Ausrüstungs-Verlinkungen. Geschrieben in **TypeScript + HTML + CSS**.

## Projektstruktur

```
M322 Prototyp/
├── index.html              # Startseite – Kader nach Position
├── geschichte.html         # Vereinsgeschichte
├── ueber-uns.html          # Über uns + Kontaktformular
├── datenschutz.html        # Datenschutz, Impressum, Cookie-Hinweis
├── css/
│   └── style.css           # Komplettes Styling (Real-Madrid-Farben)
├── ts/                     # TypeScript-Quelldateien
│   ├── players.ts          # Spielerdaten (HIER ERWEITERN/ÄNDERN)
│   ├── main.ts             # Kader-Rendering + Modal
│   ├── cookie.ts           # Cookie-Banner Logik
│   ├── contact.ts          # Kontaktformular-Validierung
│   └── datenschutz.ts      # Cookie-Reset-Button
├── js/                     # Bereits kompilierte JS-Dateien (laufen direkt!)
├── images/                 # Bilder hier ablegen (siehe images/README.md)
├── tsconfig.json           # TypeScript-Konfiguration
└── README.md               # Diese Datei
```

## Sofort starten

Die Seite läuft direkt im Browser – die kompilierten `.js`-Dateien sind bereits
unter `/js/` enthalten. Da ES-Module verwendet werden, brauchst du einen
einfachen lokalen Server (sonst blockiert der Browser die Module).

**Option 1: VS Code „Live Server"-Extension** (empfohlen)
1. Rechtsklick auf `index.html` → „Open with Live Server"

**Option 2: Mit Python**
```bash
python -m http.server 8000
```
Dann im Browser: http://localhost:8000

**Option 3: Mit Node**
```bash
npx serve
```

## TypeScript bearbeiten

Wenn du etwas in `ts/` änderst, musst du neu kompilieren:

```bash
# einmalig:
npm install -g typescript

# kompilieren:
tsc

# oder im Watch-Modus (kompiliert automatisch bei jeder Änderung):
tsc -w
```

Die Konfiguration steht in `tsconfig.json`. Output landet in `js/`.

## Bilder einfügen

Alle Bildplätze sind in `images/README.md` aufgelistet. Lege deine Bilder
einfach mit den genannten Dateinamen ab – die Webseite findet sie automatisch.

## Spieler hinzufügen / ändern

Öffne `ts/players.ts` und ergänze einen neuen Eintrag im `players`-Array:

```ts
{
  id: "neuer-spieler",            // wird auch für images/players/<id>.jpg verwendet
  name: "Max Mustermann",
  position: "Mittelfeld",          // "Tor" | "Verteidigung" | "Mittelfeld" | "Angriff" | "Staff"
  role: "Zentraler Mittelfeldspieler",
  number: 8,
  birthday: "2000-01-01",
  origin: "Spanien",
  description: "...",
  achievements: "...",
  equipmentText: "...",
  equipmentImages: ["images/equipment/neuer-spieler-boots.jpg"],
  links: [{ label: "Shop", url: "https://..." }],
  lastUpdated: "2026-05-04"
}
```

Danach `tsc` ausführen – die neue Karte erscheint automatisch im Kader.

## Hinweise

- Spielerkader 2025/26 basiert auf öffentlich verfügbaren Informationen.
- Bei Bildern bitte Urheberrechte beachten.
- Diese Seite ist eine **inoffizielle** Fanseite und steht in keiner Verbindung
  zum Real Madrid Club de Fútbol.
