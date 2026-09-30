"use client";

import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a lift on hover and a soft glow that follows the cursor. */
  interactive?: boolean;
  as?: "div" | "article" | "li" | "figure";
}

export function Card({ children, className, interactive = false, as: Tag = "div" }: CardProps) {
  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <Tag
      onPointerMove={interactive ? handlePointerMove : undefined}
      className={cn(
        "relative rounded-2xl border border-border bg-surface",
        interactive &&
          "spotlight transition-[translate,border-color,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_color-mix(in_oklch,var(--fg)_25%,transparent)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
