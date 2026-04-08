const DEFAULT_PRODUCTION_URL = "https://luxtraveler.eu";
const LOCAL_DEVELOPMENT_URL = "http://localhost:3000";
const DEFAULT_PRODUCTION_HOST = new URL(DEFAULT_PRODUCTION_URL).host;

const normalizeSiteUrl = (value: string): string | undefined => {
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return undefined;
  }
};

const resolveSiteUrl = (): string => {
  const explicitUrl = normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? ""
  );

  if (explicitUrl) {
    return explicitUrl;
  }

  const vercelProductionUrl = normalizeSiteUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""
  );

  if (vercelProductionUrl) {
    return vercelProductionUrl;
  }

  const vercelDeploymentUrl = normalizeSiteUrl(process.env.VERCEL_URL ?? "");
  if (vercelDeploymentUrl) {
    return vercelDeploymentUrl;
  }

  if (process.env.NODE_ENV !== "production") {
    return LOCAL_DEVELOPMENT_URL;
  }

  return DEFAULT_PRODUCTION_URL;
};

export const siteConfig = {
  siteName: "Lux Traveler",
  brandName: "Lux Traveler Hiking Haven",
  description:
    "Wandelen in Luxemburg (ook gezocht als 'wanderen in Luxembourg') met route-inspiratie en comfortabel verblijf in Grevenmacher. Ideaal voor Nederlandse toeristen.",
  url: resolveSiteUrl(),
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

export const siteHost = new URL(siteConfig.url).host;

export const isCanonicalProductionSite =
  process.env.NODE_ENV === "production" && siteHost === DEFAULT_PRODUCTION_HOST;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();
