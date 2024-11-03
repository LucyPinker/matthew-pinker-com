import Image from 'next/image';

const iconData = [
  {
    href: "https://soundcloud.com/cylindric_music",
    src: "/matthew-pinker-com/images/soundcloud.png",
    alt: "Soundcloud",
    width: 24,
    height: 24,
  },
  {
    href: "https://www.instagram.com/_cylindric/",
    src: "/matthew-pinker-com/images/instagram.png",
    alt: "Instagram",
    width: 22,
    height: 22,
  },
  {
    href: "https://ra.co/dj/cylindric",
    src: "/matthew-pinker-com/images/resident_advisor.png",
    alt: "RA",
    width: 22,
    height: 22,
  },
  {
    href: "https://open.spotify.com/artist/2lqjGkphmzAU9MPzkymxT8?si=u_pXiv3HQt-kzxekl9Z9Gw",
    src: "/matthew-pinker-com/images/spotify.png",
    alt: "Spotify",
    width: 22,
    height: 22,
  },
];

const Footer = () => {
  return (
    <footer className="text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <p className="m-4">© {new Date().getFullYear()} Matt Pinker. All rights reserved.</p>
        <div className="flex space-x-4 m-4">
          {iconData.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className={`${icon.alt === 'RA' ? 'pt-2' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;
