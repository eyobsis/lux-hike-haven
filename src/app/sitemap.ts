import type { MetadataRoute } from "next";
import { absoluteUrl, seoRoutes } from "@/lib/site";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl(seoRoutes.home),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(seoRoutes.enHub),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlHub),
          "x-default": absoluteUrl(seoRoutes.nlHub),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlHub),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlHub),
          "x-default": absoluteUrl(seoRoutes.nlHub),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.enTrails),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enTrails),
          "nl-NL": absoluteUrl(seoRoutes.nlTrails),
          "x-default": absoluteUrl(seoRoutes.nlTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlTrails),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enTrails),
          "nl-NL": absoluteUrl(seoRoutes.nlTrails),
          "x-default": absoluteUrl(seoRoutes.nlTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlWeekend),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlWeekend),
          "x-default": absoluteUrl(seoRoutes.nlWeekend),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlMullerthal),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlMullerthal),
          "x-default": absoluteUrl(seoRoutes.nlMullerthal),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.nlStayNearTrails),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
      alternates: {
        languages: {
          en: absoluteUrl(seoRoutes.enHub),
          "nl-NL": absoluteUrl(seoRoutes.nlStayNearTrails),
          "x-default": absoluteUrl(seoRoutes.nlStayNearTrails),
        },
      },
    },
    {
      url: absoluteUrl(seoRoutes.photoTour),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
