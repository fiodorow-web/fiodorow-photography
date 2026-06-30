// Dane miast dla stron pSEO fotobudki (/fotobudka-[miasto]).
// Osobna baza, niezależna od fotograf-[miasto].astro.
// Treści celowo różnią się długością i ujęciem per miasto (Google karze duplikaty).
// Przy dodawaniu nowych miast pisać świeży intro1/intro2/coverage/dojazd — nie kopiować.

export interface FotobudkaCity {
  slug: string;
  nom: string; // mianownik — "Siedlce"
  loc: string; // miejscownik — "Siedlcach"
  gen: string; // dopełniacz — "Siedlec"
  nearby: string[];
  lead: string;
  metaDescription: string; // tylko <meta description> — niezależny od lead (lead jest widoczny na stronie)
  intro1: string;
  intro2: string;
  coverage: string;
  dojazd: string;
}

export const fotobudkaMiasta: Record<string, FotobudkaCity> = {
  siedlce: {
    slug: "fotobudka-siedlce",
    nom: "Siedlce",
    loc: "Siedlcach",
    gen: "Siedlec",
    nearby: ["Mordy", "Skórzec", "Zbuczyn", "Kotuń", "Mokobody"],
    lead: "Drewniana fotobudka retro na wesela, urodziny i eventy w Siedlcach oraz całym powiecie siedleckim.",
    metaDescription:
      "Wynajem drewnianej fotobudki retro na wesele w Siedlcach 📸 Od 800 zł — nielimitowane wydruki, gadżety i obsługa w cenie. Sprawdź wolne terminy!",
    intro1:
      "Siedlce to miasto, które znamy najlepiej — to tutaj zaczęła się nasza przygoda z fotografią. Jeśli organizujesz wesele, osiemnastkę albo jubileusz w jednej z siedleckich sal, nasza drewniana fotobudka będzie świetną atrakcją.   ",
    intro2:
      "Dostarczamy, składamy i obsługujemy fotobudkę na miejscu, a Wy zajmujecie się tylko dobrą zabawą. Każdy gość wychodzi z gotowym wydrukiem w dłoni, a po wszystkim otrzymujecie galerię online ze wszystkimi kadrami.",
    coverage:
      "Obsługujemy Siedlce oraz okoliczne miejscowości — bez problemu dojedziemy do sal weselnych w promieniu kilkudziesięciu kilometrów. Dojazd na terenie miasta i najbliższych okolic mamy wliczony w cenę wynajmu.",
    dojazd:
      "Tak — Siedlce i okolice to nasz teren domowy. Dojazd w granicach miasta i najbliższych gmin jest wliczony w cenę, a do dalszych miejscowości ustalamy jedynie symboliczną dopłatę za kilometry.",
  },
  lukow: {
    slug: "fotobudka-lukow",
    nom: "Łuków",
    loc: "Łukowie",
    gen: "Łukowa",
    nearby: ["Stoczek Łukowski", "Adamów", "Krzywda", "Trzebieszów", "Wojcieszków"],
    lead: "Wynajem retro fotobudki na wesela i imprezy okolicznościowe w Łukowie i całym powiecie łukowskim.",
    metaDescription:
      "Fotobudka retro na wesela i imprezy w Łukowie 📸 Od 800 zł z nielimitowanymi wydrukami, rekwizytami i galerią online. Zarezerwuj swój termin!",
    intro1:
      "Planujesz przyjęcie w Łukowie? Nasza drewniana fotobudka to coś więcej niż gadżet — to element dekoracji, który wpasuje się w klimat każdej sali i da Twoim gościom mnóstwo radości. Zamiast nudy między kolejnymi daniami, ustawiają się w kolejce po pamiątkowe zdjęcia.",
    intro2:
      "Przyjeżdżamy z kompletem rekwizytów, profesjonalnym światłem i drukarką, która wypuszcza odbitki w kilka sekund. Wy dostajecie gotowe paski zdjęć na stół, a po imprezie — pełną galerię online do pobrania.",
    coverage:
      "Do Łukowa dojeżdżamy regularnie — to jedno z miast, w których najczęściej gościmy z naszą fotobudką. Obsługujemy zarówno samo miasto, jak i sale weselne rozsiane po całym powiecie łukowskim.",
    dojazd:
      "Oczywiście. Łuków leży w zasięgu naszych standardowych dojazdów — przyjeżdżamy na wesela i imprezy w mieście oraz okolicznych gminach. Koszt dojazdu ustalamy indywidualnie w zależności od dokładnej lokalizacji sali.",
  },
  "sokolow-podlaski": {
    slug: "fotobudka-sokolow-podlaski",
    nom: "Sokołów Podlaski",
    loc: "Sokołowie Podlaskim",
    gen: "Sokołowa Podlaskiego",
    nearby: ["Kosów Lacki", "Sterdyń", "Bielany", "Repki", "Ceranów"],
    lead: "Fotobudka retro do wynajęcia na wesela i eventy w Sokołowie Podlaskim i najbliższej okolicy.",
    metaDescription:
      "Wynajem fotobudki retro na wesele w Sokołowie Podlaskim 📸 Od 800 zł — wydruki bez limitu, gadżety i obsługa w cenie. Sprawdź dostępne daty!",
    intro1:
      "Szukasz atrakcji na wesele w Sokołowie Podlaskim? Nasza ręcznie wykonana, drewniana fotobudka łączy ponadczasowy, retro wygląd z najnowszą technologią. To rozwiązanie dla par, które szukają atrakcji z klasą.",
    intro2:
      "Obsługa, montaż, nielimitowane wydruki i galeria online są w cenie. Wystarczy, że wskażecie nam termin i salę — resztą zajmiemy się my, a Wasi goście zyskają pamiątki, które zabiorą do domu jeszcze tego samego wieczoru.",
    coverage:
      "Sokołów Podlaski znajduje się w obszarze który obsługujemy na co dzień. Dojazd do miasta i okolicznych miejscowości nie stanowi dla nas żadnego problemu. Wycenę ustalamy indywidualnie — zależnie od terminu, długości wynajmu i miejsca wydarzenia.",
    dojazd:
      "Tak, regularnie obsługujemy Sokołów Podlaski i okoliczne gminy. Leżycie w dogodnej dla nas odległości, więc dojazd nie stanowi problemu.",
  },
  losice: {
    slug: "fotobudka-losice",
    nom: "Łosice",
    loc: "Łosicach",
    gen: "Łosic",
    nearby: ["Sarnaki", "Huszlew", "Olszanka", "Stara Kornica", "Platerów"],
    lead: "Drewniana fotobudka na wynajem — wesela, urodziny i imprezy w Łosicach i powiecie łosickim.",
    metaDescription:
      "Drewniana fotobudka na wesela i imprezy w Łosicach 📸 Od 800 zł, nielimitowane wydruki, rekwizyty i galeria online w cenie. Zapytaj o termin!",
    intro1:
      "Organizujesz przyjęcie w Łosicach lub okolicy? Nasza fotobudka retro to gwarancja świetnej zabawy i wyjątkowych pamiątek. Goście w każdym wieku — od babci po najmłodszych — uwielbiają pozować z rekwizytami i odbierać świeżo wydrukowane zdjęcia.",
    intro2:
      "Stylowa, drewniana obudowa i ciepłe światło lampy pierścieniowej sprawiają, że każde ujęcie wygląda jak mała sesja. A że wydruków nie limitujemy — każdy może mieć swoją pamiątkę, ile razy zechce.",
    coverage:
      "Łosice leżą na wschodnim skraju Mazowsza, blisko granicy z Podlasiem — i są w zasięgu naszych dojazdów. Przyjeżdżamy na wesela i imprezy w mieście oraz okolicznych wsiach i miejscowościach.",
    dojazd:
      "Tak. Mimo że Łosice leżą nieco dalej od naszej bazy, regularnie tam docieramy. Dojazd ustalamy indywidualnie — wystarczy podać adres sali, a my przygotujemy konkretną wycenę.",
  },
  wegrow: {
    slug: "fotobudka-wegrow",
    nom: "Węgrów",
    loc: "Węgrowie",
    gen: "Węgrowa",
    nearby: ["Łochów", "Liw", "Stoczek", "Sadowne", "Miedzna"],
    lead: "Wynajem fotobudki retro na wesela i eventy w Węgrowie i malowniczej okolicy nad Liwcem.",
    metaDescription:
      "Fotobudka retro na wesele i event w Węgrowie 📸 Od 800 zł — nielimitowane wydruki, komplet gadżetów i obsługa w cenie. Sprawdź wolne terminy!",
    intro1:
      "Wesele albo jubileusz w Węgrowie? Nasza drewniana fotobudka doda Waszemu przyjęciu niepowtarzalnego, retro charakteru. To nie tylko atrakcja dla gości, ale też piękny element wystroju sali — ciepłe drewno i klasyczny statyw pasują do eleganckich i kameralnych wnętrz.",
    intro2:
      "Zapewniamy obsługę przez całą imprezę, komplet rekwizytów i nielimitowane wydruki. Po wydarzeniu otrzymujecie galerię online ze wszystkimi zdjęciami — gotową do pobrania i podzielenia się wspomnieniami z bliskimi.",
    coverage:
      "Węgrów, malowniczo położony nad Liwcem, obsługujemy razem z okolicznymi miejscowościami. Dojeżdżamy na sale weselne w mieście i całym powiecie węgrowskim.",
    dojazd:
      "Tak, Węgrów i okolice są w zasięgu naszych dojazdów. Przyjeżdżamy na imprezy w mieście oraz pobliskich gminach — koszt dojazdu zależy od dokładnej lokalizacji i ustalamy go przy rezerwacji.",
  },
};

// Kolejność wyświetlania miast (linki na /fotobudka).
export const fotobudkaMiastaOrder = [
  "siedlce",
  "lukow",
  "sokolow-podlaski",
  "losice",
  "wegrow",
];

// Treści szablonowe składane z pól miasta (loc = miejscownik).
export function whyLocal(city: FotobudkaCity): string {
  return `Działamy lokalnie — znamy sale weselne i restauracje w ${city.loc} oraz okolicy. Dzięki temu wiemy, gdzie najlepiej ustawić fotobudkę, by była w centrum zabawy.`;
}

export function faqCena(city: FotobudkaCity): string {
  return `Cenę wynajmu w ${city.loc} ustalamy indywidualnie — zależy od terminu, długości działania fotobudki i lokalizacji sali. Napiszcie do nas z datą i miejscem, a przygotujemy konkretną wycenę dla Waszego wydarzenia.`;
}

export function faqWcenie(city: FotobudkaCity): string {
  return `W ${city.loc} i okolicy wynajem obejmuje dostawę, montaż i demontaż, obsługę przez całą imprezę, nielimitowane wydruki, komplet rekwizytów oraz galerię online ze wszystkimi zdjęciami.`;
}

export function faqRezerwacja(city: FotobudkaCity): string {
  return `Najlepiej napisać lub zadzwonić z datą i miejscem przyjęcia w ${city.loc} lub okolicy. Potwierdzimy dostępność i zarezerwujemy termin. W sezonie weselnym popularne daty rezerwują się z dużym wyprzedzeniem.`;
}

// Stały FAQ czas (bez miasta).
export const faqCzas =
  "Standardowo fotobudka działa przez 2 godziny ciągłej zabawy, zwykle w godzinach największego ruchu na parkiecie. Czas możemy wydłużyć — wystarczy ustalić to przy rezerwacji.";
