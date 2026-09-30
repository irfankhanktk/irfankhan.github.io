"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Both icons are always rendered and swapped with the `dark:` variant,
 * so the button never mismatches between server and client.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="relative grid size-10 place-items-center overflow-hidden rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
    >
      <FiSun
        aria-hidden
        className="size-[18px] transition-[rotate,scale,opacity] duration-500 ease-out-expo dark:scale-0 dark:-rotate-90 dark:opacity-0"
      />
      <FiMoon
        aria-hidden
        className="absolute size-[18px] scale-0 rotate-90 opacity-0 transition-[rotate,scale,opacity] duration-500 ease-out-expo dark:scale-100 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
}
