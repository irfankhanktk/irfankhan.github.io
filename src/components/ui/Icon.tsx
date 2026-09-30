import { icons, type IconKey } from "@/lib/icons";

interface IconProps {
  name: IconKey;
  className?: string;
  /** Provide a label only when the icon conveys meaning on its own. */
  label?: string;
}

/** Renders an icon from the central registry by key. */
export function Icon({ name, className, label }: IconProps) {
  const Component = icons[name];
  return label ? (
    <Component className={className} role="img" aria-label={label} />
  ) : (
    <Component className={className} aria-hidden focusable={false} />
  );
}
