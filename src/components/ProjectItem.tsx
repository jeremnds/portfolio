/* eslint-disable react/no-unescaped-entities */
import clsx from "clsx";
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
    <article className="rounded-lg border border-zinc-600 w-full group mb-4 flex flex-col md:flex-row hover:border-zinc-100 transition-all ">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="py-4 pl-4 max-w-sm md:max-w-full flex-1"
      >
        <div className="flex flex-col ">
          <h3 className="text-md mb-1.5">{title}</h3>
          <span className="text-zinc-400 text-sm mb-3 md:mb-2 min-h-6">
            {description}
          </span>
          <div className="flex gap-1">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={clsx(
                  " px-2 bg-zinc-800 text-xs text-emerald-100",
                  technologies.length > 3 &&
                    index === technologies.length - 1 &&
                    "hidden sm:block"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
      <div className="flex md:flex-col justify-between md:items-end md:pt-4 pb-4 pr-4 pl-4 md:pl-0 ">
        <ExternalLink className="text-zinc-600 h-4 w-4 group-hover:text-zinc-100 transition-all self-center md:self-auto" />
        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-200 text-xs mt-2 block self-end"
          >
            Plus d'infos sur GitHub
          </a>
        )}
      </div>
    </article>
  );
}
