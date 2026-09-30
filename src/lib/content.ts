import { navItems, testimonials } from "@/data/portfolio";

const isProd = process.env.NODE_ENV === "production";

/** Placeholder reviews are shown in development only. */
export const visibleTestimonials = testimonials.filter((t) => !(isProd && t.placeholder));

/** Nav links for sections that actually render (e.g. hides Testimonials when empty). */
export const visibleNavItems = navItems.filter(
  (item) => item.href !== "#testimonials" || visibleTestimonials.length > 0,
);
