export const siteConfig = {
  siteName: "Lux Traveler",
  brandName: "Lux Traveler Hiking Haven",
  description:
    "Plan hiking in Luxembourg and stay in a comfortable apartment in Grevenmacher. Ideal for Dutch and international travelers.",
  url: "https://luxtraveler.eu",
  defaultOgImage: "/Central-stylish/dinning-room.avif",
};

export const seoRoutes = {
  home: "/",
  photoTour: "/photo-tour",
  enHub: "/en/hiking-in-luxembourg",
  enTrails: "/en/luxembourg-hiking-trails",
  nlHub: "/nl/wandelen-in-luxemburg",
  nlTrails: "/nl/wandelroutes-luxemburg",
  nlWeekend: "/nl/wandelweekend-luxemburg",
  nlMullerthal: "/nl/mullerthal-wandeling",
  nlStayNearTrails: "/nl/overnachten-bij-wandelroutes-luxemburg",
};

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();
