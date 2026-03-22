# GEO Analysis — Fiodorow Photography

**Data:** 22.03.2026
**URL:** fiodorowphotography.pl
**GEO Readiness Score: 70/100**

---

## Scoring

| Kategoria | Waga | Wynik | Punkty |
|-----------|------|-------|--------|
| Citability (cytowalność) | 25% | 60/100 | 15.0 |
| Structural Readability | 20% | 80/100 | 16.0 |
| Multi-Modal Content | 15% | 70/100 | 10.5 |
| Authority & Brand Signals | 20% | 50/100 | 10.0 |
| Technical Accessibility | 20% | 90/100 | 18.0 |
| **SUMA** | **100%** | | **69.5 ≈ 70** |

---

## Platform Breakdown

| Platforma | Wynik | Komentarz |
|-----------|-------|-----------|
| **Google AI Overviews** | 75/100 | Dobra struktura, schema, FAQ — brakuje dat i autorstwa |
| **ChatGPT Web Search** | 55/100 | Brak Wikipedia, Reddit, YouTube — słabe brand mentions |
| **Perplexity** | 55/100 | Brak Reddit, brak dyskusji społecznościowych |
| **Bing Copilot** | 65/100 | Dobra techniczna baza, brak IndexNow |

---

## 1. AI Crawler Access Status

| Crawler | Owner | Status |
|---------|-------|--------|
| GPTBot | OpenAI | ✅ Allow |
| Google-Extended | Google | ✅ Allow |
| ClaudeBot | Anthropic | ✅ Allow |
| PerplexityBot | Perplexity | ✅ Allow |
| Applebot | Apple | ✅ Allow |
| OAI-SearchBot | OpenAI | ⚠️ Nie wymieniony (domyślnie Allow) |
| ChatGPT-User | OpenAI | ⚠️ Nie wymieniony (domyślnie Allow) |
| CCBot | Common Crawl | ⚠️ Nie wymieniony (domyślnie Allow) |

**Rekomendacja:** Jawnie dodać `OAI-SearchBot` i `ChatGPT-User` do robots.txt. Rozważyć blokadę `CCBot` (crawl do treningu, nie do wyszukiwania).

---

## 2. llms.txt Status

**Status:** ✅ Istnieje, poprawny format

**Problemy:**
- ⚠️ Wymienia podstrony które nie istnieją: `/fotograf-lublin`, `/fotograf-radom`, `/fotograf-lomza`, `/fotograf-biala-podlaska`, `/fotograf-ostroleka` — te strony zostały usunięte (teraz są tylko 3 miasta)
- ⚠️ Brak sekcji `## Key Facts` z konkretnymi danymi (liczba realizacji, lata doświadczenia)

**Rekomendacja:** Zaktualizować llms.txt do aktualnego stanu strony.

---

## 3. Brand Mention Analysis

| Platforma | Obecność | Wpływ na AI |
|-----------|----------|-------------|
| Własna strona | ✅ fiodorowphotography.pl | Bazowy |
| Instagram | ✅ @fiodorow_photography | Umiarkowany |
| Facebook | ✅ /fiodorowphotography | Umiarkowany |
| weselezklasa.pl | ✅ Profil z opiniami | Umiarkowany |
| wedding.pl | ✅ Profil | Niski |
| gdziewesele.pl | ✅ Profil | Niski |
| Google Business | ✅ Opinie Google (Elfsight) | Wysoki |
| **YouTube** | ❌ Brak kanału | **Bardzo wysoki (brakuje!)** |
| **Reddit** | ❌ Brak wzmianek | **Wysoki (brakuje!)** |
| **Wikipedia** | ❌ Brak artykułu | Wysoki (trudne do uzyskania) |
| **LinkedIn** | ❌ Brak profilu firmowego | Umiarkowany |

**Kluczowy wniosek:** Wg badania Ahrefs (grudzień 2025) wzmianki na YouTube korelują z widocznością w AI **3x silniej** niż backlinki. YouTube i Reddit to największe luki.

---

## 4. Passage-Level Citability

### Aktualny stan treści

**Dobre bloki cytowalne (100-170 słów):**
- ✅ Homepage sekcja "Dlaczego My" — 3 akapity, osobisty ton, konkretne lokalizacje
- ✅ PSEO opisy miast — unikalne treści per miasto z nazwami sal i parków
- ✅ FAQ odpowiedzi — 50-80 słów, format Q&A (idealny dla AI)
- ✅ Blog post — dobrze sformatowane sekcje z H2

**Słabe punkty:**
- ❌ Brak definicji typu "Fiodorow Photography to..." na początku kluczowych stron
- ❌ Brak konkretnych liczb/statystyk (ile par obsłużonych, ile lat doświadczenia, ile zdjęć w galerii)
- ❌ Brak dat publikacji na stronach (poza blogiem)
- ❌ Brak przypisania autorstwa (kto pisze treści)
- ❌ Brak cytatów klientów z imieniem i nazwiskiem w HTML (opinie są w widgecie Elfsight)

### Optymalne bloki do dodania

**Wzorzec 1 — definicja na homepage (pierwsze 60 słów sekcji):**
> "Fiodorow Photography to duet fotografów ślubnych — Mateusz i Weronika — działający od [rok] roku z bazy w Siedlcach. Specjalizujemy się w naturalnych reportażach ślubnych, sesjach narzeczeńskich i poślubnych. Do tej pory uwieczniliśmy [X] historii miłosnych na terenie Mazowsza, Podlasia i Lubelszczyzny."

**Wzorzec 2 — blok z danymi (134-167 słów):**
> "Jako duet fotografów oferujemy podwójną perspektywę na Wasz dzień. Pracujemy dwoma aparatami jednocześnie, dzięki czemu łapiemy momenty z dwóch stron — emocje pary młodej i reakcje gości. Każdy reportaż ślubny obejmuje od 400 do 600 profesjonalnie obrobionych zdjęć, dostarczanych w ciągu 3 miesięcy w galerii online. Sesja narzeczeńska to średnio 40 zdjęć w ciągu 4 tygodni. Działamy na terenie Siedlec, Białegostoku i Warszawy z dojazdem wliczonym w cenę."

---

## 5. Server-Side Rendering

| Element | Status |
|---------|--------|
| Astro 5 Static Output | ✅ Pre-rendered HTML |
| JavaScript dependency | ✅ Brak — treść w HTML |
| Critical content in HTML | ✅ Wszystkie teksty, schema, meta |
| Elfsight widget (opinie) | ⚠️ JS-only — AI crawlery NIE widzą opinii |

**Wniosek:** Treść jest w pełni dostępna dla AI crawlerów. Jedyny problem to opinie Google ładowane przez JavaScript (Elfsight) — są niewidoczne dla GPTBot, ClaudeBot i Perplexity.

---

## 6. Schema for AI Discoverability

| Schema | Obecny | Wpływ na AI |
|--------|--------|-------------|
| Photographer | ✅ Z @id | Wysoki |
| WebSite | ✅ Na homepage | Wysoki |
| FAQPage | ✅ Na 4 stronach | Bardzo wysoki |
| BreadcrumbList | ✅ Wszędzie | Umiarkowany |
| BlogPosting | ✅ Na blogu | Wysoki |
| LocalBusiness | ✅ Na kontakt | Umiarkowany |
| **Person** | ❌ Brak | **Wysoki (brakuje!)** |
| **Review/Rating** | ❌ Brak w HTML | **Wysoki (brakuje!)** |
| **ImageGallery** | ❌ Brak | Niski |

---

## Top 5 Highest-Impact Changes

### 1. [HIGH] Zaktualizować llms.txt (5 min)
Usunąć nieistniejące podstrony (lublin, radom, etc.), dodać sekcję Key Facts.

### 2. [HIGH] Dodać konkretne liczby do treści (15 min)
Ile par obsłużonych, ile lat fotografujesz, ile zdjęć w galerii, ile sesji rocznie. AI cytuje fakty, nie opinie.

### 3. [HIGH] Założyć kanał YouTube (długoterminowe)
Nawet krótkie filmy (30-60s) z fragmentami sesji/ślubu. YouTube to **najsilniejszy sygnał** dla AI visibility. Wystarczy 5-10 filmów.

### 4. [MEDIUM] Dodać Person schema dla Mateusza i Weroniki
```json
{
  "@type": "Person",
  "name": "Mateusz Fiodorow",
  "jobTitle": "Fotograf ślubny",
  "worksFor": { "@id": "https://fiodorowphotography.pl/#photographer" }
}
```

### 5. [MEDIUM] Dodać 2-3 opinie klientów w HTML (nie tylko Elfsight)
AI crawlery nie widzą widgetu JS. Dodać 2-3 cytaty z opiniami bezpośrednio w kodzie HTML na homepage lub o-nas z imieniem pary.

---

## Quick Wins (do wdrożenia dziś)

1. ✅ Zaktualizować llms.txt (usunąć nieistniejące strony)
2. ✅ Dodać OAI-SearchBot i ChatGPT-User do robots.txt
3. ✅ Dodać blok definicyjny "Fiodorow Photography to..." na homepage

---

## Raport wygenerowany przez Claude Code (Opus 4.6)
