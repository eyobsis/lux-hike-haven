export const siteConfig = {
  siteName: "Lux Traveler",
  brandName: "Lux Traveler Hiking Haven",
  description:
    "Wandelen in Luxemburg (ook gezocht als 'wanderen in Luxembourg') met route-inspiratie en comfortabel verblijf in Grevenmacher. Ideaal voor Nederlandse toeristen.",
  url: "https://luxtraveler.eu",
  defaultOgImage: "/Central-stylish/dinning-room.avif",
};

export const seoRoutes = {
  home: "/",
  blog: "/blog",
  photoTour: "/photo-tour",
  enBlog: "/en/blog",
  enHub: "/en/hiking-in-luxembourg",
  enTrails: "/en/luxembourg-hiking-trails",
  nlBlog: "/nl/blog",
  nlHub: "/nl/wandelen-in-luxemburg",
  nlTrails: "/nl/wandelroutes-luxemburg",
  nlWeekend: "/nl/wandelweekend-luxemburg",
  nlMullerthal: "/nl/mullerthal-wandeling",
  nlStayNearTrails: "/nl/overnachten-bij-wandelroutes-luxemburg",
};

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();
