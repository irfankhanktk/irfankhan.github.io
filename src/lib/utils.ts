import { twMerge } from "tailwind-merge";

/** Joins class names and resolves Tailwind conflicts, so `className` overrides always win. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}

/**
 * Prefixes a /public path with the deploy base path (e.g. "/irfankhan.github.io").
 * Next adds it to <Link> and _next assets automatically, but not to plain
 * <a href> or next/image `src` strings.
 */
export function asset(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/**
 * Canonical site URL (used for SEO, sitemap and Open Graph).
 * The GitHub Pages workflow sets NEXT_PUBLIC_SITE_URL automatically.
 */
export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return url.replace(/\/$/, "");
}
