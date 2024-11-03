import Image from 'next/image';
import Link from 'next/link';

export default function CompositionCard({ cardInfo }) {
  return (
    <div className="space-y-4 mx-auto w-4/5">
      {Object.keys(cardInfo).map((key) => {
        const { image, name, date, description, link } = cardInfo[key];

        return (
          <div key={key} className="flex rounded overflow-hidden shadow-lg bg-white bg-opacity-50">
            <div className="w-1/4 h-40">
              <Image
                src={image}
                alt={`Image for ${name}`}
                width={160}
                height={160}
                layout="intrinsic"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-3/4 p-6 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-xl text-black">{name}</h2>
                <p className="text-gray-600">{date}</p>
              </div>
              <blockquote className="mt-4 text-gray-700 italic">&quot;{description}&quot;</blockquote>
              <div className="mt-6">
                <Link href={link} passHref>
                  <button className="custom-gradient-button">
                    Listen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
