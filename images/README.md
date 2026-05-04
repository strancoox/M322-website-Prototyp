# Bilder einfügen – Übersicht

Lege deine Bilder mit **genau diesen Dateinamen** in die jeweiligen Ordner.
Die Webseite versucht sie automatisch zu laden. Fehlt ein Bild, wird ein
Platzhalter („Bild fehlt") angezeigt.

Empfohlene Bildmaße sind in Klammern angegeben.

---

## 1. Vereinslogo

```
images/logo.png                       (60 × 60 px, transparenter Hintergrund)
```

---

## 2. Spielerbilder

Format: `images/players/<id>.jpg` – quadratisch oder Hochformat 3:4.
Empfohlen: 600 × 800 px.

```
images/players/courtois.jpg
images/players/lunin.jpg
images/players/carvajal.jpg
images/players/militao.jpg
images/players/ruediger.jpg
images/players/alaba.jpg
images/players/mendy.jpg
images/players/fran-garcia.jpg
images/players/bellingham.jpg
images/players/valverde.jpg
images/players/tchouameni.jpg
images/players/camavinga.jpg
images/players/guler.jpg
images/players/vinicius.jpg
images/players/mbappe.jpg
images/players/rodrygo.jpg
images/players/endrick.jpg
images/players/xabi-alonso.jpg
images/players/florentino-perez.jpg
```

---

## 3. Ausrüstungsbilder

Format: `images/equipment/<beliebig>.jpg` – quadratisch, ca. 400 × 400 px.
Welche Datei zu welchem Spieler gehört, steht in `ts/players.ts` (Feld
`equipmentImages`). Standardmäßig erwartet:

```
images/equipment/courtois-handschuhe.jpg
images/equipment/courtois-boots.jpg
images/equipment/lunin-handschuhe.jpg
images/equipment/carvajal-boots.jpg
images/equipment/militao-boots.jpg
images/equipment/ruediger-boots.jpg
images/equipment/alaba-boots.jpg
images/equipment/mendy-boots.jpg
images/equipment/fran-garcia-boots.jpg
images/equipment/bellingham-boots.jpg
images/equipment/valverde-boots.jpg
images/equipment/tchouameni-boots.jpg
images/equipment/camavinga-boots.jpg
images/equipment/guler-boots.jpg
images/equipment/vinicius-boots.jpg
images/equipment/vinicius-trikot.jpg
images/equipment/mbappe-boots.jpg
images/equipment/mbappe-trikot.jpg
images/equipment/rodrygo-boots.jpg
images/equipment/endrick-boots.jpg
```

---

## 4. Geschichts-Bilder

Format: ca. 800 × 600 px.

```
images/history/bernabeu.jpg          (Stadionfoto Bernabéu)
images/history/gruendung.jpg         (Historisches Foto / 1902)
images/history/praesident.jpg        (Florentino Pérez Foto)
```

---

## Hinweis zu Bildrechten

Stelle sicher, dass du die Bildrechte besitzt oder lizenzfrei nutzbare
Bilder verwendest (z. B. Wikimedia Commons mit korrekter Quellenangabe).
Offizielle Spieler-/Vereinsfotos sind in der Regel **urheberrechtlich
geschützt**.
