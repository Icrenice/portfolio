export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col justify-center px-6 py-20 md:px-10">
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        Full Stack Developer
      </p>

      <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        I build web applications
        from interface to infrastructure.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
        I build full-stack applications and backend systems,
        working across APIs, databases, application logic,
        and deployment.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          View selected work ↓
        </a>

        <a
          href="https://github.com/Icrenice"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
        >
          GitHub
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
        <span>React</span>
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>PHP</span>
        <span>Python</span>
        <span>REST APIs</span>
        <span>Docker</span>
        <span>SQL</span>
      </div>
    </section>
  );
}