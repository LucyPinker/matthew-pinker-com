'use client'
import Heading from '../components/heading'
import CompositionCard from '../components/composition_card'
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

          <div className="flex-1 p-6 text-gray-800 overflow-auto">
            {activeTab === 'soundDesign' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Sound Design</h2>
                <p>Your sound design content goes here.</p>
              </div>
            )}
            {activeTab === 'compositions' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Compositions</h2>
                <p>Your compositions content goes here.</p>
              </div>
            )}
            {activeTab === 'cylindric' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Cylindric</h2>
                <p>Your Cylindric alias content goes here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
