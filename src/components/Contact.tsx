export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 pb-10 pt-24 md:px-10"
    >
      <div className="border-t border-zinc-800 pt-16">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>

        <div className="mt-6 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
              I&apos;m open to opportunities in full stack and backend
              development.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:YOUR-EMAIL"
              className="text-zinc-400 transition hover:text-white"
            >
              Email ↗
            </a>

            <a
              href="https://github.com/Icrenice"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="hhttps://www.linkedin.com/in/eric-abrokwah-195b12263/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-zinc-900 py-8 text-xs text-zinc-600 sm:flex-row">
          <p>© 2026 Eric Abrokwah</p>
          <p>Next.js · Docker · GitHub Actions</p>
        </footer>
      </div>
    </section>
  );
}