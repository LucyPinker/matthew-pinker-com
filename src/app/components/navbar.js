'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import HomeButton from './home_button';

const prefix = '/matthew-pinker-com'; // same as your assetPrefix

const items = [
  { href: `${prefix}/about`, title: "About" },
  { href: `${prefix}/live`, title: "Live" },
  { href: `${prefix}/music`, title: "Music" },
  { href: `${prefix}/contact`, title: "Contact" },
  { href: `${prefix}/gallery`, title: "Gallery" }
];

const stripPrefix = (path) =>
  path.startsWith(prefix) ? path.slice(prefix.length) || '/' : path;

const normalize = (path) => path.replace(/\/$/, '') || '/';

const Navbar = () => {
  const pathname = usePathname();
  const currentPath = normalize(stripPrefix(pathname));
  const [isOpen, setIsOpen] = useState(false);

  // Toggle side panel open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top-left button when menu is closed */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/20 backdrop-blur-sm"
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      )}

      {/* Side panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 opacity-80 backdrop-blur-md z-40 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Top-right button inside panel when open */}
        {isOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 z-50 p-2 rounded-md bg-white/20 backdrop-blur-sm"
            aria-label="Close menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1 rotate-45 translate-y-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1 opacity-0" />
            <div className="w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5" />
          </button>
        )}

        <nav className="flex flex-col mt-20">
          <HomeButton />
          {items.map((item, index) => {
            const itemPath = normalize(stripPrefix(item.href));
            if (currentPath === itemPath) {
              return (
                <div key={index} className="px-5 py-4 text-white opacity-50 cursor-default">
                  {item.title}
                </div>
              );
            }
            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-5 py-4 text-white hover:bg-white/10 hover:shadow-[0_0_30px_20px_rgba(255,255,255,0.1)] hover:backdrop-blur-3xl transition"
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>


      {/* Original navbar for desktop */}
      <div className="hidden lg:grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left mb-10 mx-auto justify-center p-5">
        <HomeButton />
        {items.map((item, index) => {
          const itemPath = normalize(stripPrefix(item.href));
          if (currentPath === itemPath) {
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
    </>
  );
};

export default Navbar;
