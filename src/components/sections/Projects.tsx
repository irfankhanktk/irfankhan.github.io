import { FiGithub } from "react-icons/fi";
import { projects, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button, Reveal, Section } from "@/components/ui";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const github = socials.find((s) => s.icon === "github");
  // Featured cards span both columns; a leftover odd card does too, so the grid never has a gap.
  const regularCount = projects.filter((p) => !p.featured).length;
  const spansRow = (i: number) =>
    projects[i].featured || (regularCount % 2 === 1 && i === projects.length - 1);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work."
      description="A few projects I've built — from my final-year project to focused demos of real-world features."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={(i % 2) * 100}
            className={cn(spansRow(i) && "md:col-span-2")}
          >
            <ProjectCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </ul>

      {github && (
        <Reveal className="mt-10 flex justify-center">
          <Button href={github.href} variant="ghost" icon={<FiGithub />}>
            More on GitHub
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
