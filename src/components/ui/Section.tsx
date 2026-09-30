import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Two-digit index shown in the eyebrow, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** Standard page section: anchored, labelled heading + animated content. */
export function Section({ id, index, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-24 sm:py-32", className)}>
      <Container>
        <Reveal as="header" className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
            <span>{index}</span>
            <span aria-hidden className="h-px w-8 bg-accent/50" />
            <span>{eyebrow}</span>
          </p>
          <h2
            id={headingId}
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
