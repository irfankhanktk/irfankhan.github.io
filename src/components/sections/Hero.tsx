import type { CSSProperties } from "react";
import { FiArrowRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { about, site, upworkUrl } from "@/data/portfolio";
import { Button, Container, RotatingText } from "@/components/ui";
import { CodeWindow } from "./CodeWindow";

/** Staggered entrance: each element animates in slightly after the previous one. */
const stagger = (i: number) => ({ animationDelay: `${120 + i * 90}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute top-20 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div>
          <p
            className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur"
            style={stagger(0)}
          >
            <span className="size-2 animate-pulse-ring rounded-full bg-accent" />
            {site.availability}
          </p>

          <h1
            id="hero-heading"
            className="mt-7 animate-fade-up font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
            style={stagger(1)}
          >
            {site.name}
            <span className="mt-3 block text-2xl font-medium text-muted sm:text-3xl">
              {site.title}
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted sm:text-xl"
            style={stagger(2)}
          >
            {site.tagline}
          </p>

          <p className="mt-4 animate-fade-up font-mono text-sm text-muted" style={stagger(3)}>
            <span className="text-fg">&gt;</span> I build <RotatingText words={site.roles} />
          </p>

          <div className="mt-9 grid animate-fade-up gap-3 sm:flex sm:flex-wrap" style={stagger(4)}>
            <Button href="#projects" className="w-full sm:w-auto" icon={<FiArrowRight />} iconEnd>
              View My Work
            </Button>
            <Button href={upworkUrl} variant="secondary" className="w-full sm:w-auto" icon={<SiUpwork />}>
              Hire Me on Upwork
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto" icon={<FiMail />}>
              Contact Me
            </Button>
          </div>

          <div
            className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
            style={stagger(5)}
          >
            <span className="inline-flex items-center gap-2">
              <FiMapPin aria-hidden className="text-accent" /> {site.location}
            </span>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              <FiDownload aria-hidden /> Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={stagger(4)}>
          <CodeWindow
            name={site.name}
            role={site.title}
            location={site.location}
            stack={site.stack}
            years={about.stats[0]?.value ?? ""}
          />
        </div>
      </Container>
    </section>
  );
}
