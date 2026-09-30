"use client";

import { useEffect, useState } from "react";

/** Cycles through words with a soft blur-in. Screen readers get the full list once. */
export function RotatingText({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="inline-flex items-baseline">
        <span key={index} className="inline-block animate-word-in text-accent">
          {words[index]}
        </span>
        <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-caret rounded-full bg-accent" />
      </span>
    </>
  );
}
