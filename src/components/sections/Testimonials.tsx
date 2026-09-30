import { FaQuoteLeft } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { upworkUrl } from "@/data/portfolio";
import { visibleTestimonials } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button, Card, Reveal, Section } from "@/components/ui";

/** Placeholder reviews render only in development; the section hides itself if none remain. */
export function Testimonials() {
  const items = visibleTestimonials;
  if (items.length === 0) return null;

  return (
    <Section
      id="testimonials"
      index="05"
      eyebrow="Testimonials"
      title="What clients say."
      description="Reviews from clients I've worked with on Upwork."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal as="li" key={`${t.name}-${i}`} delay={i * 100}>
            <Card
              as="figure"
              className={cn("flex h-full flex-col p-7", t.placeholder && "border-dashed")}
            >
              <FaQuoteLeft aria-hidden className="size-6 text-accent/60" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-fg">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full bg-accent-soft font-display font-semibold text-accent"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-medium text-fg">{t.name}</span>
                  <span className="block text-sm text-muted">
                    {t.country}
                    {t.project && ` · ${t.project}`}
                  </span>
                </span>
              </figcaption>
            </Card>
          </Reveal>
        ))}
      </ul>
      <Reveal className="mt-10 flex justify-center">
        <Button href={upworkUrl} variant="secondary" icon={<SiUpwork />}>
          See all reviews on Upwork
        </Button>
      </Reveal>
    </Section>
  );
}
