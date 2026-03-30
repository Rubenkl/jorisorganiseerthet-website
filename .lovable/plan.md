

## Website Koerswijziging: Bedrijven + Particulieren

### Samenvatting

De website wordt opgesplitst in twee doelgroepen, met **bedrijven als primaire focus**. De twee geüploade foto's worden gebruikt in een nieuwe bedrijvensectie. De huidige arrangementen worden vervangen door een compactere opzet.

### Paginastructuur (nieuw)

```text
1. Hero           → Bredere tagline
2. Wat ik doe     → Tekst aanpassen voor beide doelgroepen
3. Voor Bedrijven → NIEUW: prominente sectie met de 2 uploaded foto's
4. Voor Particulieren → Compact: "Dagje weg" + "Privé diner" + "Dag op maat"
5. Reviews        → Blijft (Instagram-link)
6. Contact        → Label "Groep/Team" → "Bedrijf / Groep"
7. Footer         → Links en tekst updaten
```

### Wijzigingen per bestand

**1. HeroSection.tsx**
- Tagline wijzigen: "Vriendenfeesten - Vrijgezellenfeesten - Familie-uitjes" → "Bedrijfsuitjes - Personeelsfeesten - Privé-evenementen"

**2. WatIkDoeSection.tsx**
- Introductietekst herschrijven: nadruk op het ontzorgen van kleine bedrijven die geen tijd hebben, plus particulieren
- Bestaande toon behouden (informeel, Twents)

**3. Nieuw: VoorBedrijvenSection.tsx**
- Titel: "Voor Bedrijven"
- Korte pitch: focus op kleine bedrijven die jaarlijks een uitje willen maar geen tijd hebben
- 3 cards: Jaarlijks personeelsuitje, Teambuilding op maat, Bedrijfsfeest/borrel
- De 2 geüploade foto's (kopieren naar `public/images/bedrijfsuitje-1.jpg` en `bedrijfsuitje-2.jpg`)
- CTA-knop naar contact

**4. PortfolioSection.tsx → hernoemen/herschrijven als particulieren-sectie**
- Titel: "Voor Particulieren"
- 3 compacte opties (i.p.v. 4):
  - "Dagje weg" — georganiseerd dagje uit
  - "Privé diner" — compleet verzorgd diner
  - "Dag op maat" — Joris' favoriet (blijft highlighted)
- Bestaande foto's (tinified-image00007/00016) blijven hier
- Prijsaanvraag-tekst blijft

**5. Navbar.tsx**
- "Arrangementen" vervangen door twee links: "Bedrijven" (`#bedrijven`) en "Particulieren" (`#particulieren`)

**6. ContactSection.tsx**
- Label "Groep/Team" → "Bedrijf / Groep"
- Placeholder aanpassen om bedrijfsuitjes te noemen

**7. FooterSection.tsx**
- Beschrijvingstekst verbreden (bedrijfsuitjes noemen)
- "Arrangementen" link → "Bedrijven" en "Particulieren" links

**8. Index.tsx**
- VoorBedrijvenSection importeren en toevoegen tussen WatIkDoeSection en PortfolioSection

### Assets
- 2 geüploade foto's kopiëren naar `public/images/bedrijfsuitje-1.jpg` en `bedrijfsuitje-2.jpg`

