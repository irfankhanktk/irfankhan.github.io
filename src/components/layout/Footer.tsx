import { FiArrowUp } from "react-icons/fi";
import { site } from "@/data/portfolio";
import { Container, SocialLinks } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-fg">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · {site.title} · {site.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SocialLinks size="sm" />
          <a
            href="#top"
            aria-label="Back to top"
            className="group ml-2 grid size-9 place-items-center rounded-full bg-fg text-bg transition-transform hover:-translate-y-0.5"
          >
            <FiArrowUp aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
