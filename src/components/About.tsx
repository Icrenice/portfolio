export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10"
    >
      <div className="grid gap-12 border-t border-zinc-800 pt-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Full stack development with an interest in the systems behind the
            interface.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-zinc-400">
            <p>
              I&apos;m a Full Stack Developer with a BSc in ICT. I enjoy working
              across the full application lifecycle, from building user facing
              features to designing APIs, working with databases and integrating
              external systems.
            </p>

            <p>
              My experience includes PHP and Node.js backend development,
              JavaScript and TypeScript applications, SQL databases, REST APIs
              and technologies such as Python, C# and Java.
            </p>

            <p>
              I&apos;m also interested in the infrastructure surrounding
              software development, including Docker, automated testing and
              CI/CD workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}