# Action Plan — Fiodorow Photography SEO

**Score: 84/100** | Cel: 90+

---

## HIGH Priority (fix w ciągu 1 tygodnia)

### H1: Portfolio galeria — dodać srcset/sizes na obrazy Sanity CDN
- **Strony:** /portfolio/[slug] (~7 stron, ~56 zdjęć każda)
- **Problem:** Obrazy ładują się w stałym rozmiarze 1400px nawet na mobile
- **Fix:** Dodać srcset z wariantami szerokości (400, 800, 1400) i sizes
- **Wpływ:** Performance +5 pkt, Images +5 pkt → Score ~87/100

### H2: PSEO cross-linking między podstronami
- **Problem:** Siedlce, Białystok, Warszawa nie linkują do siebie nawzajem
- **Fix:** W sekcji "Działamy również w okolicach..." dodać linki do pozostałych podstron PSEO
- **Wpływ:** On-Page SEO +2 pkt, wzmocnienie topical authority

---

## MEDIUM Priority (fix w ciągu 1 miesiąca)

### M1: Hero slider — zmienić H2 na span/p
- **Problem:** 4 x H2 w hero carousel (Google widzi je wszystkie naraz)
- **Fix:** Zamienić `<h2>` na `<p class="font-serif text-5xl...">` w Hero.astro
- **Wpływ:** Heading structure +3 pkt

### M2: PSEO duplikacja H1/H2
- **Problem:** "Fotograf ślubny w {miasto}" jako H1 i H2 (Białystok, Warszawa)
- **Fix:** Zmienić H2 w sekcji "O nas" na inne sformułowanie, np. "Dlaczego warto wybrać nas w {miasto}?"
- **Wpływ:** On-Page SEO +1 pkt

### M3: Blog — dodawać nowe posty regularnie
- **Problem:** Tylko 1 post (1050 słów)
- **Rekomendacja:** Min. 1 post/miesiąc, 800+ słów, z linkami do PSEO i portfolio
- **Tematy:** "Najlepsze miejsca na sesję w Siedlcach", "Jak przygotować się do ślubu", "Sesja narzeczeńska — poradnik"
- **Wpływ:** Content Quality +5 pkt

### M4: Portfolio listing — dodać krótkie intro
- **Problem:** ~300 słów, głównie wizualna strona
- **Fix:** Dodać 2-3 zdania wprowadzenia przed galerią
- **Wpływ:** Content Quality +1 pkt

---

## LOW Priority (backlog)

### L1: ImageGallery schema na portfolio
- Dodać schema ImageGallery na stronach /portfolio/[slug]

### L2: og-image.jpg — zweryfikować
- Sprawdzić czy ma odpowiedni rozmiar (1200x630) i jest aktualne

### L3: llms.txt — zaktualizować po zmianach
- Upewnić się że treść odzwierciedla aktualny stan strony

### L4: Review schema
- Jeśli Elfsight widget nie generuje schema, rozważyć ręczne dodanie AggregateRating

---

## Cel: 90/100

Realizacja H1 + H2 + M1 + M2 powinna dać **~90/100**:
- H1 (srcset portfolio): +3 pkt
- H2 (cross-linking): +1 pkt
- M1 (hero headings): +1 pkt
- M2 (PSEO H2 duplikacja): +1 pkt

Regularne dodawanie blogpostów (M3) to długoterminowa inwestycja, która z czasem podbije wynik do **92-95/100**.

---

## Raport wygenerowany przez Claude Code (Opus 4.6)
