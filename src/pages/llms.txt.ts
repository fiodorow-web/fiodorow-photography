import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPortfolioItems, categoryLabels } from "../lib/sanity";
import { googleReviews } from "../data/google-reviews";

const SITE = "https://fiodorowphotography.pl";

// Plik dla asystentów i wyszukiwarek AI (llmstxt.org). Generowany przy każdym
// buildzie — lista realizacji, wpisów i liczba opinii nie rozjedzie się ze stroną.
// Adresy z końcowym ukośnikiem, tak jak w canonicalach i sitemapie.

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const GET: APIRoute = async () => {
  const [portfolio, posts] = await Promise.all([
    getPortfolioItems(),
    getCollection("blog", ({ data }) => !data.draft),
  ]);

  const realizacje = portfolio
    .filter((item) => item.slug?.current)
    .map((item) => {
      const kategoria = categoryLabels[item.category] || item.category;
      const venue = item.venue?.venueName?.trim();
      const miejsce = venue ? `, ${venue}` : "";
      const data = item.date ? `, ${formatDate(item.date)}` : "";
      return `- [${kategoria} — ${item.title}](${SITE}/portfolio/${item.slug.current}/)${miejsce}${data}`;
    });

  const wpisy = posts
    .sort((a, b) => b.data.date.localeCompare(a.data.date))
    .map((post) => `- [${post.data.title}](${SITE}/blog/${post.id}/): ${post.data.description}`);

  const ocena = googleReviews.rating.toFixed(1).replace(".", ",");

  const body = `# Fiodorow Photography

> Duet fotografów ślubnych — Mateusz i Weronika Fiodorow — z Siedlec. Naturalna, reportażowa fotografia ślubna, sesje narzeczeńskie i portretowe oraz wynajem drewnianej fotobudki retro. Działamy na Mazowszu, Podlasiu i Lubelszczyźnie.

## O nas
- Duet fotografów: Mateusz i Weronika Fiodorow — zawsze pracujemy we dwoje (dwa aparaty, dwa spojrzenia)
- Doświadczenie: ponad 6 lat w fotografii ślubnej
- Styl: naturalny, reportażowy, bez sztucznych póz
- Reportaż ślubny: ok. 700 obrobionych zdjęć; sesja narzeczeńska: ok. 40 zdjęć
- Czas dostarczenia galerii: do 3 miesięcy
- Baza: Siedlce; obszar: Mazowsze, Podlasie, Lubelszczyzna, cała Polska
- Opinie: ${ocena}/5 na podstawie ${googleReviews.count} opinii w Google — [wizytówka w Mapach Google](${googleReviews.url})

## Strony główne
- [Strona główna](${SITE}/): portfolio i przegląd usług
- [O nas](${SITE}/o-nas/): duet, FAQ, dane kontaktowe
- [Portfolio](${SITE}/portfolio/): galeria realizacji ślubnych
- [Blog](${SITE}/blog/): artykuły o fotografii ślubnej
- [Kontakt](${SITE}/kontakt/): formularz i dane kontaktowe

## Fotografia ślubna (wg miast)
- [Fotograf ślubny Siedlce](${SITE}/): reportaż ślubny w Siedlcach i okolicy — Siedlce to nasza baza, opisane na stronie głównej
- [Fotograf ślubny Białystok](${SITE}/fotograf-bialystok/): reportaż ślubny na Podlasiu
- [Fotograf ślubny Warszawa](${SITE}/fotograf-warszawa/): reportaż ślubny w Warszawie

## Realizacje
${realizacje.join("\n")}

## Blog
${wpisy.join("\n")}

## Fotobudka na wesele (od 800 zł)
- [Fotobudka — oferta](${SITE}/fotobudka/): wynajem drewnianej fotobudki retro na wesela i eventy
- [Fotobudka Siedlce](${SITE}/fotobudka-siedlce/): wynajem fotobudki w Siedlcach
- [Fotobudka Łuków](${SITE}/fotobudka-lukow/): wynajem fotobudki w Łukowie
- [Fotobudka Sokołów Podlaski](${SITE}/fotobudka-sokolow-podlaski/): wynajem fotobudki w Sokołowie Podlaskim
- [Fotobudka Łosice](${SITE}/fotobudka-losice/): wynajem fotobudki w Łosicach
- [Fotobudka Węgrów](${SITE}/fotobudka-wegrow/): wynajem fotobudki w Węgrowie

## Usługi
- Fotografia ślubna (reportaż z przygotowań, ceremonii i wesela)
- Sesje narzeczeńskie
- Sesje poślubne
- Portrety indywidualne i rodzinne
- Wynajem fotobudki na wesele (nielimitowane wydruki, gadżety, obsługa)
- Projektowanie albumów ślubnych

## Kontakt
- Telefon: [+48 660 872 121](tel:+48660872121)
- E-mail: [fiodorowphotography@gmail.com](mailto:fiodorowphotography@gmail.com)
- Instagram: [@fiodorow_photography](https://www.instagram.com/fiodorow_photography)
- Facebook: [fiodorowphotography](https://www.facebook.com/fiodorowphotography)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
