import { skillGroups } from "@/data/portfolio";
import { Card, Icon, Reveal, Section } from "@/components/ui";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The tools I use to build end-to-end."
      description="From pixel-level UI to database queries — grouped by where they sit in the stack."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.category} delay={(i % 3) * 90}>
            <Card interactive className="h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={group.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-fg">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group/skill inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-fg transition-colors duration-300 hover:border-accent/50"
                  >
                    <Icon
                      name={skill.icon}
                      className="size-4 text-muted transition-colors duration-300 group-hover/skill:text-accent"
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
