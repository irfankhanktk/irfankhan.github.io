"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { site } from "@/data/portfolio";
import { visibleNavItems as navItems } from "@/lib/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Button, Container } from "@/components/ui";
import { ThemeToggle } from "./ThemeToggle";

// "top" (the hero) is observed too, so no link is highlighted there.
const sectionIds = ["top", ...navItems.map((item) => item.href.slice(1))];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-border bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      {/* Scroll progress (CSS scroll-driven animation) */}
      <div aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-accent" />

      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display font-semibold tracking-tight text-fg"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-fg font-mono text-sm text-bg transition-transform duration-500 ease-out-expo group-hover:-rotate-6">
            IK
          </span>
          <span>{site.name}</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-500 ease-out-expo",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={site.resumeUrl}
            download
            variant="secondary"
            size="sm"
            icon={<FiDownload />}
            className="hidden sm:inline-flex"
          >
            Resume
          </Button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface text-fg lg:hidden"
          >
            {open ? <FiX aria-hidden className="size-5" /> : <FiMenu aria-hidden className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu — animated with the grid-rows 0fr→1fr technique */}
      <div
        id="mobile-menu"
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out-expo lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        inert={!open}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <Container className="pb-6">
            <ul className="flex flex-col gap-1 border-t border-border pt-4">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className={cn(
                    "transition-[opacity,translate] duration-500 ease-out-expo",
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-fg hover:bg-surface-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              href={site.resumeUrl}
              download
              variant="secondary"
              size="sm"
              icon={<FiDownload />}
              className="mt-4 sm:hidden"
            >
              Download Resume
            </Button>
          </Container>
        </nav>
      </div>
    </header>
  );
}
