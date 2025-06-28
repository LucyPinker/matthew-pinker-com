import Image from 'next/image';
import icons from  '../data/icons.json';

const Footer = () => {
  return (
    <footer className="p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <p className="m-4 italic">© {new Date().getFullYear()} Matt Pinker. All rights reserved.</p>
        <div className="flex space-x-4 m-4">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className={`${icon.alt === 'RA' ? 'pt-2' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="opacity-70"
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;
