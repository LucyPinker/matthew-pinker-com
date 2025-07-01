'use client';
import { usePathname } from 'next/navigation';
import HomeButton from './home_button';

const prefix = '/matthew-pinker-com'; // same as your assetPrefix

const items = [
  { href: `${prefix}/about`, title: "About" },
  { href: `${prefix}/live`, title: "Live" },
  { href: `${prefix}/music`, title: "Music" },
  { href: `${prefix}/contact`, title: "Contact" },
  { href: `${prefix}/gallery`, title: "Gallery" }
];

const normalize = (path) => path.replace(/\/$/, '');

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left mb-10 mx-auto justify-center p-5">
      <HomeButton />
      {items.map((item, index) => {
        if (normalize(pathname) === normalize(item.href)) {
          return (
            <div
              key={index}
              className="px-5 py-4"
            />
          );
        }
        return (
          <a
            key={index}
            href={item.href}
            className="group flex flex-col justify-between px-5 py-4 transition duration-500 ease-in-out text-center hover:bg-white/10 hover:shadow-[0_0_30px_20px_rgba(255,255,255,0.1)] hover:backdrop-blur-3xl"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-xl font-light">{item.title}</h2>
          </a>
        );
      })}

    </div>
  );
};

export default Navbar;
