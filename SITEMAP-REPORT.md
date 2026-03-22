# Sitemap Audit Report -- Fiodorow Photography

**Date:** 2026-03-22
**Auditor:** Claude Opus 4.6 (Sitemap Architecture Specialist)
**Site:** https://fiodorowphotography.pl
**Vercel deployment:** https://fiodorow-photography.vercel.app
**Framework:** Astro 5.17.1 with `@astrojs/sitemap` integration

---

## CRITICAL: Domain Routing Issue

The production domain `fiodorowphotography.pl` is **NOT** serving the Astro/Vercel site. It is currently serving a WordPress installation on a LiteSpeed server (Yoast SEO v26.4 detected). The Astro site is only accessible via the Vercel preview URL.

**Evidence:**
- `fiodorowphotography.pl` returns `Server: LiteSpeed` headers
- `fiodorow-photography.vercel.app` returns `Server: Vercel` headers
- `fiodorowphotography.pl/sitemap-index.xml` returns **404** (WordPress 404 page)
- `fiodorowphotography.pl/sitemap-0.xml` returns **404**
- The WordPress 404 page includes Yoast SEO schema markup

**Impact:** Until the DNS/domain is pointed to Vercel, the sitemap (and the entire Astro site) is unreachable at the canonical domain. Google cannot crawl or index the sitemap declared in `robots.txt`.

---

## 1. Sitemap Configuration

### astro.config.mjs

```js
sitemap({
  filter: (page) =>
    !page.includes('/polityka-prywatnosci') &&
    !page.includes('/studio'),
  lastmod: new Date(),
})
```

- `site` is set to `https://fiodorowphotography.pl` -- correct canonical domain
- Filter excludes `/polityka-prywatnosci` and `/studio` -- correct
- `lastmod` uses `new Date()` (build timestamp) for all URLs -- see finding below

### robots.txt

```
Sitemap: https://fiodorowphotography.pl/sitemap-index.xml
```

- The sitemap reference URL is correct and matches the `site` config
- `Disallow: /studio` and `Disallow: /polityka-prywatnosci` properly block both excluded pages
- AI crawler rules (`GPTBot`, `ClaudeBot`, etc.) all set to `Allow: /`

---

## 2. Sitemap Validation Results

All checks performed against the Vercel deployment (`fiodorow-photography.vercel.app`).

### Sitemap Index (`sitemap-index.xml`)

| Check | Result | Notes |
|-------|--------|-------|
| HTTP Status | 200 | Accessible on Vercel |
| Valid XML | PASS | Well-formed XML |
| Child sitemaps | 1 file | `sitemap-0.xml` |
| Index lastmod | `2026-03-22T18:52:56.560Z` | Build timestamp |

### Sitemap File (`sitemap-0.xml`)

| Check | Result | Severity |
|-------|--------|----------|
| HTTP Status | 200 (Vercel) | OK |
| Valid XML | PASS | -- |
| URL count | 16 | Well under 50,000 limit |
| All URLs use HTTPS | PASS | -- |
| No `<priority>` tags | PASS | Not present (good -- ignored by Google) |
| No `<changefreq>` tags | PASS | Not present (good -- ignored by Google) |
| All `<lastmod>` identical | **FAIL** | All 16 URLs share the same build timestamp |
| Unused XML namespaces | INFO | `xmlns:news`, `xmlns:image`, `xmlns:video` declared but unused |
| Noindexed URLs in sitemap | PASS | None found |
| Redirected URLs in sitemap | PASS | None found |
| Studio page excluded | PASS | `/studio/` not in sitemap |
| Privacy page excluded | PASS | `/polityka-prywatnosci/` not in sitemap |

---

## 3. All URLs in Sitemap (16 total)

### Static Pages (8)

| # | URL | lastmod | Live Status (Vercel) |
|---|-----|---------|---------------------|
| 1 | `https://fiodorowphotography.pl/` | 2026-03-22T18:52:56.560Z | 200 |
| 2 | `https://fiodorowphotography.pl/o-nas/` | 2026-03-22T18:52:56.560Z | 200 |
| 3 | `https://fiodorowphotography.pl/portfolio/` | 2026-03-22T18:52:56.560Z | 200 |
| 4 | `https://fiodorowphotography.pl/blog/` | 2026-03-22T18:52:56.560Z | 200 |
| 5 | `https://fiodorowphotography.pl/kontakt/` | 2026-03-22T18:52:56.560Z | 200 |
| 6 | `https://fiodorowphotography.pl/fotograf-siedlce/` | 2026-03-22T18:52:56.560Z | 200 |
| 7 | `https://fiodorowphotography.pl/fotograf-bialystok/` | 2026-03-22T18:52:56.560Z | 200 |
| 8 | `https://fiodorowphotography.pl/fotograf-warszawa/` | 2026-03-22T18:52:56.560Z | 200 |

### Dynamic Pages -- Blog (1 post)

| # | URL | lastmod | Live Status (Vercel) |
|---|-----|---------|---------------------|
| 9 | `https://fiodorowphotography.pl/blog/jak-wyglada-dzien-slubu-z-nami/` | 2026-03-22T18:52:56.560Z | 200 |

### Dynamic Pages -- Portfolio (7 galleries)

| # | URL | lastmod | Live Status (Vercel) |
|---|-----|---------|---------------------|
| 10 | `https://fiodorowphotography.pl/portfolio/amelia-damian/` | 2026-03-22T18:52:56.560Z | 200 |
| 11 | `https://fiodorowphotography.pl/portfolio/anna-pawel/` | 2026-03-22T18:52:56.560Z | 200 |
| 12 | `https://fiodorowphotography.pl/portfolio/joanna-darek/` | 2026-03-22T18:52:56.560Z | 200 |
| 13 | `https://fiodorowphotography.pl/portfolio/karolina-piotr/` | 2026-03-22T18:52:56.560Z | 200 |
| 14 | `https://fiodorowphotography.pl/portfolio/maria-piotr/` | 2026-03-22T18:52:56.560Z | 200 |
| 15 | `https://fiodorowphotography.pl/portfolio/natalia-michal/` | 2026-03-22T18:52:56.560Z | 200 |
| 16 | `https://fiodorowphotography.pl/portfolio/wiktoria-adam/` | 2026-03-22T18:52:56.560Z | 200 |

---

## 4. Missing Pages Analysis

### Pages in `src/pages/` vs Sitemap

| Source Page | Expected URL | In Sitemap? | Should Be? | Notes |
|-------------|-------------|-------------|------------|-------|
| `index.astro` | `/` | Yes | Yes | -- |
| `o-nas.astro` | `/o-nas/` | Yes | Yes | -- |
| `portfolio/index.astro` | `/portfolio/` | Yes | Yes | -- |
| `portfolio/[slug].astro` | `/portfolio/*` | Yes (7 slugs) | Yes | Sourced from Sanity CMS |
| `blog/index.astro` | `/blog/` | Yes | Yes | -- |
| `blog/[...slug].astro` | `/blog/*` | Yes (1 post) | Yes | Sourced from Sanity CMS |
| `kontakt.astro` | `/kontakt/` | Yes | Yes | -- |
| `fotograf-[miasto].astro` | `/fotograf-siedlce/` | Yes | Yes | -- |
| `fotograf-[miasto].astro` | `/fotograf-bialystok/` | Yes | Yes | -- |
| `fotograf-[miasto].astro` | `/fotograf-warszawa/` | Yes | Yes | -- |
| `polityka-prywatnosci.astro` | `/polityka-prywatnosci/` | No | No | Correctly excluded (noindex page) |
| `studio.astro` | `/studio/` | No | No | Correctly excluded (redirect to Sanity) |
| `404.astro` | N/A | No | No | Error page, should never be in sitemap |

**Result: No missing pages detected.** All indexable pages are present in the sitemap. All non-indexable pages are correctly excluded.

---

## 5. Correctly Excluded Pages

### `/polityka-prywatnosci/`
- Excluded from sitemap via `astro.config.mjs` filter -- PASS
- Blocked in `robots.txt` via `Disallow: /polityka-prywatnosci` -- PASS
- Has `<meta name="robots" content="noindex, nofollow">` in HTML -- PASS
- Triple-layer exclusion is thorough (arguably redundant, but safe)

### `/studio/`
- Excluded from sitemap via `astro.config.mjs` filter -- PASS
- Blocked in `robots.txt` via `Disallow: /studio` -- PASS
- Has `<meta name="robots" content="noindex, nofollow">` and redirects to `fiodorow-photography.sanity.studio` -- PASS

---

## 6. PSEO Location Pages Quality Assessment

### Quality Gate Status

- **Page count: 3** (siedlce, bialystok, warszawa)
- Threshold for WARNING is 30+ pages -- well below threshold
- **Quality gate: PASS** -- no concerns at this scale

### Content Uniqueness Audit

Each city page in `fotograf-[miasto].astro` uses `getStaticPaths()` to generate pages with the following per-city unique content:

| Content Element | Unique Per City? | Notes |
|----------------|-----------------|-------|
| Meta title | Yes | `Fotograf slubny {city} \| Fiodorow Photography` |
| Meta description | Yes | Fully unique ~160 char descriptions |
| H1 heading | Yes | `Fotograf slubny w {nameLocative}` |
| About paragraphs | Yes | 2-3 unique paragraphs per city (~100+ words each) |
| Service descriptions (3) | Yes | Unique wedding/engagement/postwedding descriptions |
| FAQ questions (4) | Yes | Fully unique Q&A content per city |
| Local places list | Yes | City-specific landmarks and venues |
| Highlights list | Yes | City-specific selling points |
| Nearby areas list | Yes | Unique geographic context |
| Hero image | Yes | City-specific photo from `src/assets/pseo/{city}/` |
| Grid images (2) | Yes | City-specific photos |
| Schema.org data | Yes | Unique geo coordinates, area served |
| Canonical URL | Yes | Per-city canonical |

**Content uniqueness estimate: 80-90% unique per page.** The shared template structure (HTML layout, section headings like "Uslugi fotograficzne w...") accounts for the remaining 10-20%, which is standard and acceptable for templated pages.

**Doorway page risk: LOW.** Each page has substantial unique written content (estimated 800-1200 words unique per city), unique imagery, city-specific FAQ schema, and legitimate local business intent (the photographers actually operate in these cities).

---

## 7. Recommendations

### CRITICAL Severity

| # | Issue | Recommendation |
|---|-------|---------------|
| C1 | **Production domain not pointed to Vercel** | The domain `fiodorowphotography.pl` is still serving a WordPress site. Update DNS records (A/CNAME) to point to the Vercel deployment. Until this is resolved, Google cannot access the Astro sitemap or any of the Astro site content at the canonical URLs. |
| C2 | **Sitemap returns 404 on production domain** | Direct consequence of C1. The `Sitemap:` directive in `robots.txt` points to `https://fiodorowphotography.pl/sitemap-index.xml` which currently returns a WordPress 404 page. Google Search Console will report this as an error. |

### MEDIUM Severity

| # | Issue | Recommendation |
|---|-------|---------------|
| M1 | **All lastmod dates are identical** | `lastmod: new Date()` in the sitemap config sets every URL to the build timestamp. Google may learn to ignore your `lastmod` values. For static pages, remove `lastmod` entirely or set it only on pages with known modification dates. For CMS-sourced pages (blog, portfolio), pass the actual `updatedAt` / `_updatedAt` timestamp from Sanity. |

### LOW Severity

| # | Issue | Recommendation |
|---|-------|---------------|
| L1 | **Unused XML namespaces** | The `@astrojs/sitemap` plugin adds `xmlns:news`, `xmlns:image`, and `xmlns:video` namespace declarations to `sitemap-0.xml`, but none of these are used in any `<url>` entry. This is a cosmetic issue from the plugin defaults and has no functional impact. No action needed unless you plan to add image/video sitemaps. |
| L2 | **Only 1 blog post in sitemap** | The blog section currently has only one post (`jak-wyglada-dzien-slubu-z-nami`). This is not a sitemap issue per se, but more blog content would strengthen topical authority for wedding photography keywords. |

### INFO

| # | Observation | Notes |
|---|------------|-------|
| I1 | **robots.txt Sitemap directive is correct** | Points to `https://fiodorowphotography.pl/sitemap-index.xml` which matches the `site` property in `astro.config.mjs`. Will work correctly once DNS is pointed to Vercel. |
| I2 | **Canonical URLs are consistent** | All pages use `https://fiodorowphotography.pl` as the canonical domain, matching the sitemap URLs. No cross-domain canonical conflicts on the Vercel deployment. |
| I3 | **PSEO pages have proper Schema.org** | Each city page includes `Photographer` (LocalBusiness) schema with unique geo coordinates, plus `FAQPage` schema with city-specific questions. This is well-implemented. |
| I4 | **No deprecated sitemap tags** | No `<priority>` or `<changefreq>` tags present. This is correct per current Google guidelines. |
| I5 | **AI crawlers explicitly allowed** | `robots.txt` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, OAI-SearchBot, and ChatGPT-User. This is a deliberate choice for AI visibility. |

---

## 8. Summary Scorecard

| Category | Status |
|----------|--------|
| XML Validity | PASS |
| URL Limit (<50k) | PASS (16 URLs) |
| HTTPS Enforcement | PASS |
| No Deprecated Tags | PASS |
| Noindex Pages Excluded | PASS |
| All URLs Return 200 | PASS (on Vercel) |
| No Redirected URLs | PASS |
| robots.txt Sitemap Reference | CORRECT (but 404 on production domain) |
| lastmod Accuracy | FAIL (all identical build timestamp) |
| Production Domain Accessibility | FAIL (WordPress, not Astro) |
| PSEO Quality Gate | PASS (3 pages, high uniqueness) |
| Missing Pages | NONE |
| Extra/Orphan Pages | NONE |

**Overall: 10/12 checks pass.** The two failures are the identical `lastmod` timestamps (medium severity, easy fix) and the critical domain routing issue that prevents the sitemap from being accessible on the production domain.

---

## 9. Suggested `lastmod` Fix for astro.config.mjs

Replace the static `new Date()` with per-page dates by using the `serialize` option or removing `lastmod` for static pages:

```js
sitemap({
  filter: (page) =>
    !page.includes('/polityka-prywatnosci') &&
    !page.includes('/studio'),
  // Remove the global lastmod -- let Astro omit it for static pages.
  // For CMS pages, set lastmod via the Astro content layer or
  // a custom serialize function that reads Sanity _updatedAt.
})
```

Alternatively, if you want to keep `lastmod` only on CMS-sourced pages, implement a custom `serialize` callback that reads the Sanity document's `_updatedAt` field.

---

*Report generated on 2026-03-22 by Claude Opus 4.6.*
