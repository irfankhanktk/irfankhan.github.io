import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { asset, cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,translate] duration-300 ease-out-expo active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-[0_8px_24px_-12px_var(--accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_var(--accent)]",
  secondary:
    "border border-border bg-surface text-fg hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  /** Put the icon after the label (default is before). */
  iconEnd?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & { href: string; download?: boolean | string };
type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & { href?: never };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/** One button for links (internal, external, downloads) and form buttons. */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconEnd,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon && !iconEnd && <span aria-hidden className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconEnd && (
        <span
          aria-hidden
          className="shrink-0 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5"
        >
          {icon}
        </span>
      )}
    </>
  );

  if (rest.href) {
    const { href, download } = rest as Pick<ButtonAsLink, "href" | "download">;
    if (isExternal(href) || download) {
      const newTab = href.startsWith("http");
      return (
        <a
          href={asset(href)}
          className={classes}
          download={download}
          {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
