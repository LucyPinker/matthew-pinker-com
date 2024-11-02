export default function Home() {
  const items = [
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/live",
      title: "Live",
    },
    {
      href: "/compositions",
      title: "Compositions",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="relative flex flex-col items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="font-metana font-bold text-4xl text-center">Matthew Pinker</h1>
        <p className="font-metana text-lg text-center">Sound Artist.</p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mb-10">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex flex-col justify-between px-5 py-4 transition duration-500 ease-in-out text-center hover:bg-white/10 hover:shadow-[0_0_30px_20px_rgba(255,255,255,0.1)] hover:backdrop-blur-3xl"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-xl font-semibold font-metana">
              {item.title}{" "}
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
}
