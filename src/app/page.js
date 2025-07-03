import Heading from './components/heading';

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Heading text="Matt Pinker" className="text-4xl sm:text-5xl md:text-6xl" />
        <p className="text-xl sm:text-2xl md:text-3xl text-center font-light">Sound Artist</p>
      </div>
    </main>
  );
}
