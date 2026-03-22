# SEO Audit Report — Fiodorow Photography

**Data:** 22.03.2026
**URL:** fiodorow-photography.vercel.app → fiodorowphotography.pl
**Technologia:** Astro 5.17.1 + Tailwind CSS 4 + Sanity CMS
**Hosting:** Vercel (static)

---

## SEO Health Score: 84/100 (poprzednio: 68/100, +16 pkt)

| Kategoria | Waga | Wynik | Punkty |
|-----------|------|-------|--------|
| Technical SEO | 22% | 92/100 | 20.2 |
| Content Quality | 23% | 78/100 | 17.9 |
| On-Page SEO | 20% | 83/100 | 16.6 |
| Schema / Structured Data | 10% | 87/100 | 8.7 |
| Performance | 10% | 82/100 | 8.2 |
| AI Search Readiness | 10% | 85/100 | 8.5 |
| Images | 5% | 83/100 | 4.15 |
| **SUMA** | **100%** | | **84.25** |

---

## Executive Summary

### Top 5 ulepszeń od ostatniego audytu
1. **Treść homepage** — z ~250 słów do ~2100 słów (+740%)
2. **Brand name "Fiodorow Photography"** — 3x w widocznym tekście na stronie głównej
3. **Sekcja "Gdzie działamy"** — internal linking do podstron PSEO + local SEO boost
4. **FAQ rozbudowane** — z 25-40 słów do 50-80 słów na odpowiedź (12 odpowiedzi)
5. **WebSite schema** dodany na homepage + Blog schema z BlogPosting

### Top 5 pozostałych problemów
1. Portfolio galeria: obrazy z Sanity CDN bez srcset/sizes (~56 zdjęć na stronę)
2. PSEO podstrony: duplikacja nagłówka H1/H2 (Białystok, Warszawa)
3. Hero slider: 4 x H2 zamiast semantycznych nagłówków
4. Blog: tylko 1 post — zbyt mało dla content authority
5. PSEO podstrony nie linkują do siebie nawzajem (brak cross-linkingu)

---

## 1. Technical SEO — 92/100

### ✅ Dobrze
- **robots.txt** — poprawny, AI crawlery dozwolone (GPTBot, ClaudeBot, PerplexityBot, Applebot, Google-Extended)
- **Sitemap** — sitemap-index.xml + sitemap-0.xml, 16 URL-i, lastmod aktualne
- **Canonical URLs** — na każdej stronie, wskazują na fiodorowphotography.pl
- **Noindex** — `/polityka-prywatnosci` ma `<meta name="robots" content="noindex, nofollow">`
- **Disallow** — `/studio` i `/polityka-prywatnosci` w robots.txt
- **HTTPS** — wymuszony przez Vercel
- **lang="pl"** — na wszystkich stronach
- **Mobile viewport** — poprawny `width=device-width, initial-scale=1.0`

### ✅ Security Headers
| Header | Wartość | Status |
|--------|---------|--------|
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload | ✅ |
| X-Frame-Options | DENY | ✅ |
| X-Content-Type-Options | nosniff | ✅ |
| Referrer-Policy | strict-origin-when-cross-origin | ✅ |
| Permissions-Policy | camera=(), microphone=(), geolocation=() | ✅ |

### ⚠️ Do poprawy
- **Brak X-XSS-Protection header** — niskopriorytetowy, nowoczesne przeglądarki go ignorują

---

## 2. Content Quality — 78/100

### ✅ Dobrze
| Strona | Słowa | Status |
|--------|-------|--------|
| Homepage (/) | ~2100 | ✅ Doskonale |
| O nas (/o-nas) | ~1300 | ✅ Dobrze |
| Fotograf Siedlce | ~1300 | ✅ Dobrze |
| Fotograf Białystok | ~1100 | ✅ Dobrze |
| Fotograf Warszawa | ~1200 | ✅ Dobrze |
| Blog post | ~1050 | ✅ OK |
| Kontakt | ~330 | ✅ OK (strona kontaktowa) |

### ✅ E-E-A-T Sygnały
- Prawdziwe imiona (Mateusz i Weronika)
- Prawdziwe zdjęcia autorów
- Konkretne lokalizacje i nazwy sal weselnych
- Numer telefonu i email widoczne
- Opinie Google (widget Elfsight)
- Brand name w treści

### ⚠️ Do poprawy
- **Blog: tylko 1 post** — za mało dla budowania autorytetu treściowego. Google premiuje regularnie aktualizowane blogi (min. 1 post/miesiąc)
- **Portfolio listing (~300 słów)** — strona jest przede wszystkim wizualna, ale dodanie krótkiego wprowadzenia (2-3 zdania per kategoria) pomogłoby

---

## 3. On-Page SEO — 83/100

### ✅ Title Tagi — unikalne i poprawne
| Strona | Title | Długość |
|--------|-------|---------|
| Homepage | Fiodorow Photography \| Fotograf Siedlce, Białystok, Warszawa | 60 zn. ✅ |
| Siedlce | Fotograf ślubny Siedlce \| Fiodorow Photography | 48 zn. ✅ |
| Białystok | Fotograf ślubny Białystok \| Fiodorow Photography | 50 zn. ✅ |
| Warszawa | Fotograf ślubny Warszawa \| Fiodorow Photography | 49 zn. ✅ |
| O nas | O nas — Fotograf Ślubny Siedlce \| Fiodorow Photography | 53 zn. ✅ |
| Portfolio | Portfolio — Fotograf Ślubny Siedlce \| Fiodorow Photography | 57 zn. ✅ |
| Kontakt | Kontakt — Fotograf Ślubny Siedlce \| Fiodorow Photography | 55 zn. ✅ |
| Blog | Blog \| Fiodorow Photography – Porady Fotograficzne i Inspiracje | 61 zn. ✅ |

### ✅ Meta Descriptions — unikalne, z CTA
Wszystkie strony mają unikalne, atrakcyjne meta descriptions z telefonem lub wezwaniem do działania.

### ✅ Alt Texts
Wszystkie lokalne obrazy mają opisowe, keyword-rich alt texty w języku polskim.

### ⚠️ Problemy z nagłówkami

**[MEDIUM] Hero slider — 4 x H2 na homepage**
Hero carousel generuje 4 nagłówki H2 ("Tworzymy wspomnienia", "Tworzymy dla Was", "Tworzymy z pasją", "Tworzymy z miłością"). Google widzi je wszystkie jednocześnie w HTML. Lepiej zmienić na `<p>` lub `<span>` — treść slidera to hasła, nie sekcje.

**[MEDIUM] PSEO duplikacja H1/H2**
Na podstronach Białystok i Warszawa, "Fotograf ślubny w {miasto}" pojawia się jako H1 i potem ponownie jako H2 w sekcji "O nas". Powinno być inne sformułowanie dla H2.

### ✅ Internal Linking
- Homepage → PSEO podstrony (sekcja "Gdzie działamy") ✅ NOWE
- Nav: 5 stron w menu głównym ✅
- Footer: linki + social media ✅
- PSEO → nav pages ✅

### ⚠️ Brakujący cross-linking
PSEO podstrony (Siedlce, Białystok, Warszawa) nie linkują do siebie nawzajem w treści. Sekcja "Działamy również w okolicach..." powinna linkować do innych podstron PSEO.

---

## 4. Schema / Structured Data — 87/100

### ✅ Zaimplementowane
| Schema | Strony | Status |
|--------|--------|--------|
| Photographer (@id) | Wszystkie | ✅ |
| WebSite | Homepage | ✅ NOWE |
| BreadcrumbList | Wszystkie | ✅ |
| FAQPage | PSEO (x3) + O nas | ✅ |
| BlogPosting | Blog post | ✅ |
| Blog | Blog listing | ✅ |
| LocalBusiness | Kontakt | ✅ |

### ⚠️ Brakujące
- **[LOW] ImageGallery** — brak na stronach portfolio (galerie zdjęć bez schema)
- **[LOW] Review/AggregateRating** — opinie ładowane przez Elfsight, nie ma schema w HTML

---

## 5. Performance — 82/100

### ✅ Dobrze
- **Static site** — pre-rendered HTML, szybki TTFB
- **WebP** — wszystkie lokalne obrazy skonwertowane
- **Responsive images** — `widths` + `sizes` na hero i grid images (PSEO, homepage)
- **Lazy loading** — poprawne `loading="lazy"` na obrazach below-fold
- **Eager loading** — hero images z `loading="eager"`
- **Preconnect** — `cdn.sanity.io`
- **Elfsight lazy-loaded** — skrypt ładowany przez IntersectionObserver
- **Vercel Analytics** — ładowane po cookie consent

### ⚠️ Do poprawy
**[HIGH] Portfolio galeria — brak srcset/sizes**
Obrazy z Sanity CDN na stronach portfolio (`/portfolio/karolina-piotr` itp.) używają stałego `?w=1400&q=90` bez srcset. Na mobile ładuje się obraz 1400px szeroki — niepotrzebnie duży. Powinno być:
```html
srcset="...?w=400 400w, ...?w=800 800w, ...?w=1400 1400w"
sizes="(max-width: 768px) 100vw, 50vw"
```

---

## 6. AI Search Readiness — 85/100

### ✅ Dobrze
- **robots.txt** — GPTBot, ClaudeBot, PerplexityBot, Applebot, Google-Extended — Allow: /
- **llms.txt** — istnieje i jest dostępny (HTTP 200)
- **Citability** — dobrze sformatowane akapity, FAQs, listy, nagłówki
- **Brand signals** — "Fiodorow Photography" w treści, schema, meta tags
- **Paragraph structure** — pasażowe treści idealne do cytowania przez AI

### ⚠️ Do poprawy
- **[LOW] llms.txt** — weryfikuj czy treść jest aktualna po wszystkich zmianach

---

## 7. Images — 83/100

### ✅ Dobrze
- **Alt texty** — opisowe, keyword-rich, w języku polskim na wszystkich lokalnych obrazach
- **Format** — WebP na wszystkich (konwersja przez Astro)
- **Responsive** — `widths` + `sizes` na hero i grid images
- **Lazy loading** — poprawne
- **Nazwy plików** — SEO-friendly (np. `fotograf-slubny-siedlce-sesja-plenerowa.jpg`)

### ⚠️ Do poprawy
- **[HIGH] Portfolio Sanity images** — brak srcset/sizes (jak wyżej)
- **[LOW] og-image.jpg** — sprawdź czy jest aktualne i czy ma odpowiedni rozmiar (1200x630)

---

## Porównanie z poprzednim audytem

| Metryka | Przed | Po | Zmiana |
|---------|-------|-----|--------|
| **SEO Score** | 68/100 | 84/100 | **+16** |
| Homepage word count | ~250 | ~2100 | **+740%** |
| Brand name w tekście | 0x | 3x | ✅ |
| FAQ słów/odpowiedź | 25-40 | 50-80 | **+100%** |
| WebSite schema | ❌ | ✅ | ✅ |
| Blog schema | ❌ | ✅ | ✅ |
| Internal links do PSEO | 0 | 3 | ✅ |
| PSEO obrazy responsive | ❌ | ✅ | ✅ |
| PSEO obrazy nazwy SEO | ❌ | ✅ | ✅ |
| PSEO obrazy rozmiar | ~90 MB | ~6.7 MB | **-93%** |
| Security headers | Częściowe | Kompletne | ✅ |
| robots.txt AI crawlers | ❌ | ✅ | ✅ |
| Sitemap filter | ❌ | ✅ | ✅ |
| Preconnect Sanity CDN | ❌ | ✅ | ✅ |

---

## Raport wygenerowany przez Claude Code (Opus 4.6)
