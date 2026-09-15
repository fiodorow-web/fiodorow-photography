import slide1 from "../assets/hero/sesja-slubna-para-mloda.jpg";
import slide2 from "../assets/hero/panna-mloda-bukiet-portret.jpg";
import slide3 from "../assets/hero/ceremonia-slubna-reportaz.jpg";
import slide4 from "../assets/hero/sesja-poslubna-palac-para-mloda.jpg";

/**
 * Slajdy hero. Wydzielone z Hero.astro, żeby strona główna mogła sięgnąć
 * po pierwszy obraz i wstawić dla niego <link rel="preload"> w <head>.
 */
export const heroSlides = [
  {
    image: slide4,
    alt: "Sesja poślubna przed pałacem — romantyczny plener ślubny, fotograf Siedlce",
    position: "center 30%",
    title: "Tworzymy wspomnienia",
    subtitle: "Każdy moment zasługuje na piękną oprawę.",
    buttonText: "Zobacz nasze prace",
    buttonLink: "/portfolio",
  },
  {
    image: slide1,
    alt: "Para młoda w objęciach podczas sesji ślubnej",
    position: "45% center",
    title: "Tworzymy dla Was",
    subtitle: "Fotografie dopasowane do Waszej historii.",
    buttonText: "Zobacz nasze prace",
    buttonLink: "/portfolio",
  },
  {
    image: slide2,
    alt: "Panna młoda z bukietem — portret ślubny",
    position: "40% center",
    title: "Tworzymy z pasją",
    subtitle: "Nie tylko fotografujemy - kochamy to co robimy.",
    buttonText: "Zobacz nasze prace",
    buttonLink: "/portfolio",
  },
  {
    image: slide3,
    alt: "Ceremonia ślubna — reportaż fotograficzny",
    position: "center center",
    title: "Tworzymy z miłością",
    subtitle: "Miłość w każdym kadrze",
    buttonText: "Zobacz nasze prace",
    buttonLink: "/portfolio",
  },
];

/** Wspólne parametry generowania obrazów hero — używane też przy preloadzie. */
export const heroImageOpts = {
  widths: [640, 1024, 1920, 2560],
  sizes: "100vw",
  quality: 80,
  format: "webp" as const,
};
