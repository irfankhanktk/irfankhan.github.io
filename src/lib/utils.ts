import { twMerge } from "tailwind-merge";

/** Joins class names and resolves Tailwind conflicts, so `className` overrides always win. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL once you have a custom domain;
 * on Vercel it falls back to the production deployment URL automatically.
 */
export function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  return url.replace(/\/$/, "");
}
