import { FiArrowRight, FiCheck } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { services, upworkUrl } from "@/data/portfolio";
import { Button, Card, Icon, Reveal, Section } from "@/components/ui";

export function Services() {
  return (
    <Section
      id="services"
      index="04"
      eyebrow="Services"
      title="How I can help your project."
      description="Freelance work for startups, agencies and product teams — scoped clearly, delivered with clean, documented code."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={(i % 3) * 90}>
            <Card interactive className="group flex h-full flex-col p-7">
              <span className="grid size-12 place-items-center rounded-xl border border-border bg-surface-2 text-accent transition-[rotate,scale] duration-500 ease-out-expo group-hover:scale-110 group-hover:-rotate-6">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-fg">{service.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-fg">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <FiCheck aria-hidden className="size-4 text-accent" /> {d}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}

        <Reveal as="li" delay={180}>
          <div className="flex h-full flex-col justify-between rounded-2xl bg-fg p-7 text-bg">
            <div>
              <h3 className="font-display text-lg font-semibold">Have a project in mind?</h3>
              <p className="mt-2 leading-relaxed opacity-75">
                Tell me what you&apos;re building — I usually reply within a day.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href={upworkUrl} size="sm" icon={<SiUpwork />}>
                Hire on Upwork
              </Button>
              <a
                href="#contact"
                className="group inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium opacity-90 hover:opacity-100"
              >
                Contact
                <FiArrowRight aria-hidden className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
