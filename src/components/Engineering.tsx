const groups = [
  {
    title: "Backend",
    items: ["PHP", "Node.js", "REST APIs", "SQL", "API Integrations"],
  },
  {
    title: "Languages",
    items: [
      "JavaScript / TypeScript",
      "PHP",
      "Python",
      "C#",
      "Java",
    ],
  },
  {
    title: "Infrastructure & Tools",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD"],
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10"
    >
      <div className="border-t border-zinc-800 pt-16">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Engineering
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Technologies I work with.
        </h2>

        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
          I work across application development, APIs, databases and deployment,
          choosing technologies based on the needs of the system rather than a
          single fixed stack.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-zinc-800 pb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                {group.title}
              </h3>

              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <p key={item} className="text-lg text-zinc-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
            This portfolio
          </p>

          <p className="mt-3 text-zinc-300">
            Next.js · TypeScript · Tailwind CSS · Docker · GitHub Actions
          </p>
        </div>
      </div>
    </section>
  );
}