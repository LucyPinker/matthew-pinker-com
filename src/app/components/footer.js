import Image from 'next/image';
import icons from '../data/icons.json';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full px-4 py-3 sm:py-2 z-50">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-6 max-w-screen-xl mx-auto text-sm text-gray-300">
        <p className="italic text-center">© {new Date().getFullYear()} Matt Pinker. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className={icon.alt === 'RA' ? 'pt-1' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-4 h-4 sm:w-6 sm:h-6 relative">
                <Image
                  className="opacity-70 hover:opacity-100 transition"
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
