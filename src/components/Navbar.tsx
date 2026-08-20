export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
      <a href="#" className="text-sm font-semibold tracking-tight">
        Eric Abrokwah
      </a>

      <nav className="flex items-center gap-6 text-sm text-zinc-400">
        <a href="#work" className="transition hover:text-white">
          Work
        </a>

        <a href="#about" className="transition hover:text-white">
          About
        </a>

        <a
          href="https://github.com/Icrenice"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/eric-abrokwah-195b12263/"
          target="_blank"
          rel="noreferrer"
          className="hidden transition hover:text-white sm:block"
        >
          LinkedIn ↗
        </a>
      </nav>
    </header>
  );
}