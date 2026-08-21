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
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <span className="text-sm text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="mt-3 text-sm text-zinc-500">
            {project.context}
            {project.period && ` · ${project.period}`}
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              Live ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full rounded-xl object-cover"
            />
          ) : (
            <div className="max-w-md text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
                Project
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-300">
                {project.title}
              </p>
            </div>
          )}
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