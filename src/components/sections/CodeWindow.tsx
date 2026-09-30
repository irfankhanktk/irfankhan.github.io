interface CodeWindowProps {
  name: string;
  role: string;
  location: string;
  stack: string[];
  years: string;
}

const Key = ({ children }: { children: string }) => <span className="text-accent">{children}</span>;
const Str = ({ children }: { children: string }) => (
  <span className="text-amber-700 dark:text-amber-300">&quot;{children}&quot;</span>
);

/** Decorative "editor window" in the hero — content is generated from the data file. */
export function CodeWindow({ name, role, location, stack, years }: CodeWindowProps) {
  return (
    <figure className="relative mx-auto max-w-md animate-float lg:ml-auto">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_60px_-30px_color-mix(in_oklch,var(--fg)_35%,transparent)]">
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-fg sm:text-sm">
          <code>
            <span className="text-muted">{"// hello, world 👋"}</span>
            {"\n"}
            <span className="text-violet-600 dark:text-violet-300">const</span> developer = {"{"}
            {"\n  "}
            <Key>name</Key>: <Str>{name}</Str>,
            {"\n  "}
            <Key>role</Key>: <Str>{role}</Str>,
            {"\n  "}
            <Key>experience</Key>: <Str>{`${years} years`}</Str>,
            {"\n  "}
            <Key>location</Key>: <Str>{location}</Str>,
            {"\n  "}
            <Key>stack</Key>: [
            {stack.map((s, i) => (
              <span key={s}>
                {"\n    "}
                <Str>{s}</Str>
                {i < stack.length - 1 ? "," : ""}
              </span>
            ))}
            {"\n  "}],
            {"\n  "}
            <Key>openTo</Key>: [<Str>remote</Str>, <Str>freelance</Str>],
            {"\n"}
            {"};"}
          </code>
        </pre>
      </div>
      <figcaption className="sr-only">
        {name}, {role}, based in {location}. Main stack: {stack.join(", ")}.
      </figcaption>
    </figure>
  );
}
