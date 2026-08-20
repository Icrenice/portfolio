import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section
        id="work"
        className="mx-auto min-h-screen w-full max-w-7xl px-6 py-24 md:px-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </p>
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