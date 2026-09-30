import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { site } from "@/data/portfolio";
import { Card, Reveal, Section, SocialLinks } from "@/components/ui";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const details = [
    {
      icon: FiMail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: FiMapPin, label: "Location", value: site.location },
    { icon: FiClock, label: "Availability", value: site.availability },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have a role, a project or just a question? Send a message and I'll get back to you soon."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ul className="space-y-6">
            {details.map(({ icon: IconCmp, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <IconCmp aria-hidden className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="font-medium break-all text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-fg">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-3 text-sm text-muted">Find me on</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
