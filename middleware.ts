import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const detectPreferredLocale = (acceptLanguage: string | null): "en" | "nl" => {
  if (!acceptLanguage) {
    return "en";
  }

  const lowered = acceptLanguage.toLowerCase();
  return lowered.includes("nl") ? "nl" : "en";
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/blog" && pathname !== "/blog/") {
    return NextResponse.next();
  }

  const locale = detectPreferredLocale(request.headers.get("accept-language"));
  const target = locale === "nl" ? "/nl/blog" : "/en/blog";

  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = target;

  return NextResponse.redirect(nextUrl);
}

export const config = {
  matcher: ["/blog/:path*"],
};
