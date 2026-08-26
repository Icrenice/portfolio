import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="border-t border-zinc-800 py-14">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <span className="text-sm text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            {project.context}
            {project.period && ` · ${project.period}`}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {project.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-600 hover:text-white"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex min-h-[520px] items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-10">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[440px] w-auto max-w-[88%] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-5 leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
              My contribution
            </p>

            <p className="mt-3 leading-relaxed text-zinc-400">
              {project.contribution}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-10">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}