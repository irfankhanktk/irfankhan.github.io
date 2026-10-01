import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

// Required for static export (GitHub Pages).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
