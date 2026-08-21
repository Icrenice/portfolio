import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section
        id="work"
        className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Systems and applications I&apos;ve built.
          </h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto min-h-[50vh] w-full max-w-7xl px-6 py-24 md:px-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
      </section>
    </main>
  );
}