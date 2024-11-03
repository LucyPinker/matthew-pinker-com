import Heading from '../components/heading'
import CompositionCard from '../components/composition_card'

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
      name: "Dusk",
      image: "/images/dusk.png",
      date: "03-11-2023",
      description: "This is the third card description.",
      link: "https://soundcloud.com/cylindric_music/5-cylindric-dusk-tgp-final",
    },
  };
  return (
      <div>
        <Heading text="Music" />
        <main className="container mx-auto p-4">
          <CompositionCard cardInfo={cardInfo} />
        </main>
      </div>

  )
}
