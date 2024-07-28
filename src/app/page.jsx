import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="h-96 bg-white flex items-center justify-center text-xl">
        <h2>Sección 1</h2>
      </section>
      <section className="h-96 bg-zinc-800 flex items-center justify-center text-white text-xl">
        <h2>Sección 2</h2>
      </section>
      <section className="h-96 bg-zinc-300 flex items-center justify-center text-white text-xl">
        <h2>Sección 3</h2>
      </section>
      <section className="h-96 bg-zinc-600 flex items-center justify-center text-white text-xl">
        <h2>Sección 4</h2>
      </section>
    </main>
  );
}
