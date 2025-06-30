'use client';
import Heading from '../components/heading';
import { useState } from 'react';

export default function Page() {
  const cardInfo = {
    card1: {
      name: "Entropy",
      image: "/images/entropy.jpg",
      date: "27-09-2023",
      description: "Each piece explores a different angle: an impressionist vision of a landscape; the capture of a heady experience; a synesthetic response to a scene; and a surreal representation of a dream.",
      link: "https://lotusparable.bandcamp.com/album/ep-entropy",
    },
    card2: {
      name: "Aggregate Terrains",
      image: "/images/aggregate_terrains.jpg",
      date: "16-07-2024",
      description: "A series of electroacoustic compositions responding to the city as sonic inspiration.",
      link: "https://cylindric.bandcamp.com/album/aggregate-terrains",
    },
    card3: {
      name: "Contra from VA. Glade of love by Lotus Parable",
      image: "/images/lotus_parable_VA.jpg",
      date: "09-09-2024",
      description: "a soulful compilation of 11 tracks blending hypnotic techno with psychedelic sounds. Each track elegantly tells a unique story, inviting listeners and dancers on a deep, soulful journey.",
      link: "https://soundcloud.com/cylindric_music/5-cylindric-dusk-tgp-final",
    },
  };

  const [activeTab, setActiveTab] = useState('soundDesign');

  const tabs = [
    { id: 'soundDesign', label: 'Sound Design' },
    { id: 'compositions', label: 'Compositions' },
    { id: 'cylindric', label: 'Cylindric' },
  ];

  return (
    <div>
      <Heading text="Music" />
      <main className="flex justify-center p-10">
        <div className="flex w-[75vw] h-[65vh] bg-white bg-opacity-40 rounded-md shadow-sm overflow-hidden tracking-wide font-light">
          <nav className="flex flex-col w-40 bg-transparent">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 text-left border-l-4 ${activeTab === tab.id
                    ? 'bg-baseWhite bg-opacity-90 font-semibold text-gray-900'
                    : 'border-transparent text-gray-700 hover:bg-gray-200'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="flex-1 p-6 text-gray-800 overflow-auto space-y-8 mt-10">
            {activeTab === 'soundDesign' && (
              <div>
                <div className="flex space-x-4 pt-5">
                  <div className="w-1/2 aspect-video relative">
                    <iframe
                      src="https://player.vimeo.com/video/1013591638?badge=0&autopause=0&player_id=0&app_id=58479"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      title="Salomon Advertisement - Redesign"
                      allowFullScreen
                    />
                  </div>
                  <div className="w-1/2 aspect-video relative">
                    <iframe
                      src="https://player.vimeo.com/video/1013591317?badge=0&autopause=0&player_id=0&app_id=58479"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      title="Princess Mononoke - Redesign"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'compositions' && (
              <div>
                <div className="flex space-x-8 max-w-5xl mx-auto">
                  <div className="w-1/2 flex">
                    <iframe
                      width="100%"
                      height="166"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522818601&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full"
                      title="Matt Pinker - On Seven Hills"
                    ></iframe>
                  </div>
                  <div className="w-1/2 flex">
                    <iframe
                      width="100%"
                      height="166"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1386951691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full"
                      title="Matt Pinker - Béton Brut"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'cylindric' && (
              <div>
                <div className="flex space-x-40 max-w-5xl mx-auto">
                  <div className="w-[350px] flex">
                    <iframe
                      style={{ border: 0 }}
                      width="350"
                      height="350"
                      src="https://bandcamp.com/EmbeddedPlayer/album=3566733731/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                      title="EP_Entropy by Cylindric"
                    ></iframe>
                  </div>
                  <div className="w-[350px] flex">
                    <iframe
                      style={{ border: 0 }}
                      width="350"
                      height="350"
                      src="https://bandcamp.com/EmbeddedPlayer/album=4060373173/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                      seamless
                      title="EP_Under Carob Tree by Cylindric"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
