import { socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

/** Icon-only links to GitHub, LinkedIn, Upwork (from the data file). */
export function SocialLinks({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((s) => (
        <li key={s.href}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} (opens in a new tab)`}
            title={s.label}
            className={cn(
              "grid place-items-center rounded-full border border-border bg-surface text-muted transition-[color,border-color,translate] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
              size === "md" ? "size-11" : "size-9",
            )}
          >
            <Icon name={s.icon} className={size === "md" ? "size-[18px]" : "size-4"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
