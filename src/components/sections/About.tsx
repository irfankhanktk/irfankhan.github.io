import { FiAward, FiBookOpen } from "react-icons/fi";
import { about } from "@/data/portfolio";
import { Card, Reveal, Section } from "@/components/ui";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Engineer who ships the whole feature — API, web and mobile."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="mb-5 text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}

          <dl className="mt-10 grid grid-cols-3 gap-3">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <Card className="h-full p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-fg sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-sm leading-snug text-muted">{stat.label}</dd>
                </Card>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3">
              <FiBookOpen aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-fg">{about.education.degree}</p>
                <p className="text-sm text-muted">
                  {about.education.school} · {about.education.period}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <FiAward aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <ul className="text-sm text-muted">
                {about.certifications.map((c) => (
                  <li key={c} className="first:font-medium first:text-fg first:text-base">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h3 className="mb-6 font-mono text-xs tracking-widest text-muted uppercase">Experience</h3>
          </Reveal>
          <ol className="relative border-l border-border">
            {about.experience.map((job, i) => (
              <Reveal as="li" key={job.company} delay={i * 80} className="group relative pb-8 pl-7 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-bg bg-border transition-colors duration-300 group-first:bg-accent group-hover:bg-accent"
                />
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <p className="mt-1 font-medium text-fg">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{job.summary}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
