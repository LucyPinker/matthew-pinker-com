'use client';
import Heading from '../components/heading';
import { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('soundDesign');

  const tabs = [
    { id: 'soundDesign', label: 'Sound Design' },
    { id: 'compositions', label: 'Compositions' },
    { id: 'cylindric', label: 'Cylindric' },
  ];

  return (
    <div>
      <Heading text="Music" />
      <main className="flex justify-center p-6 md:p-10">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[65vh] bg-white bg-opacity-40 rounded-md shadow-sm overflow-hidden tracking-wide font-light">

          <nav className="flex md:flex-col md:w-40 bg-transparent border-b md:border-b-0 md:border-r">
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
          <div className="flex-1 p-4 md:p-6 text-gray-800 overflow-auto space-y-8">
            {activeTab === 'soundDesign' && (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 aspect-video relative">
                  <iframe
                    src="https://player.vimeo.com/video/1013591638?badge=0&autopause=0&player_id=0&app_id=58479"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title="Salomon Advertisement - Redesign"
                    allowFullScreen
                  />
                </div>
                <div className="w-full md:w-1/2 aspect-video relative">
                  <iframe
                    src="https://player.vimeo.com/video/1013591317?badge=0&autopause=0&player_id=0&app_id=58479"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title="Princess Mononoke - Redesign"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            {activeTab === 'compositions' && (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <iframe
                    width="100%"
                    height="166"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522818601&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    className="w-full"
                    title="Matt Pinker - On Seven Hills"
                  ></iframe>
                </div>
                <div className="w-full md:w-1/2">
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
            )}
            {activeTab === 'cylindric' && (
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start flex-1 overflow-hidden p-4 h-full">
                <iframe
                  style={{ border: 0 }}
                  className="w-[275px] md:w-[350px] aspect-[1/1] max-w-full"
                  src="https://bandcamp.com/EmbeddedPlayer/album=3566733731/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="EP_Entropy by Cylindric"
                />

                <iframe
                  style={{ border: 0 }}
                  className="w-[275px] md:w-[350px] aspect-[1/1] max-w-full"
                  src="https://bandcamp.com/EmbeddedPlayer/album=4060373173/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="EP_Under Carob Tree by Cylindric"
                />

              </div>

            )}
          </div>
        </div>
      </main>
    </div>
  );
}
