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
    <article className="border-t border-zinc-800 py-12">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>

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

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
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