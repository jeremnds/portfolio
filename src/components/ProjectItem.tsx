/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from "lucide-react";

type ProjectItemProps = {
  title: string;
  description: string;
  href: string;
  githubHref?: string;
  technologies: string[];
};

export default function ProjectItem({
  title,
  description,
  href,
  githubHref,
  technologies,
}: ProjectItemProps) {
  return (
    <article className="group mb-4 flex w-full flex-col rounded-lg border border-zinc-600 transition-all hover:border-zinc-100 md:flex-row">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-sm flex-1 py-4 pl-4 md:max-w-full"
      >
        <div className="flex flex-col">
          <h3 className="text-md mb-1.5">{title}</h3>
          <span className="mb-3 min-h-6 text-sm text-zinc-400 md:mb-2">
            {description}
          </span>
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-800 px-2 text-xs text-emerald-100"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <>
                <span className="w-8 bg-zinc-800 px-2 text-center text-xs text-emerald-100 sm:hidden">
                  +{technologies.length - 3}
                </span>
                {technologies.slice(3).map((tech, index) => (
                  <span
                    key={index + 3}
                    className="hidden bg-zinc-800 px-2 text-xs text-emerald-100 sm:inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
      </a>
      <div className="flex justify-between pb-4 pl-4 pr-4 md:flex-col md:items-end md:pl-0 md:pt-4">
        <ExternalLink className="h-4 w-4 self-center text-zinc-600 transition-all group-hover:text-zinc-100 md:self-auto" />
        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block self-end text-xs hover:text-emerald-200"
          >
            Plus d'infos sur GitHub
          </a>
        )}
      </div>
    </article>
  );
}
