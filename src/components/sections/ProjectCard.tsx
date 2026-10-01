import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { asset } from "@/lib/utils";
import type { Project } from "@/types/portfolio";
import { Button, Card, Tag } from "@/components/ui";

/** Uses container queries so the card lays itself out based on its own width. */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const { title, description, image, imageAlt, tags, githubUrl, liveUrl } = project;

  return (
    <Card as="article" interactive className="@container group h-full overflow-hidden">
      <div className="flex h-full flex-col @2xl:flex-row">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2 @2xl:aspect-auto @2xl:w-1/2 @2xl:border-r @2xl:border-b-0">
          <Image
            src={asset(image)}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 @2xl:p-8">
          <h3 className="font-display text-xl font-semibold text-fg @2xl:text-2xl">{title}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>

          {(liveUrl || githubUrl) && (
            <div className="mt-6 flex flex-wrap gap-2">
              {liveUrl && (
                <Button href={liveUrl} size="sm" icon={<FiArrowUpRight />} iconEnd>
                  Live demo<span className="sr-only"> of {title}</span>
                </Button>
              )}
              {githubUrl && (
                <Button href={githubUrl} size="sm" variant="secondary" icon={<FiGithub />}>
                  Source<span className="sr-only"> code for {title} on GitHub</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
