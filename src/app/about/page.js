import Heading from '../components/heading';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Heading text="About" />
      <div>
        <main class="flex h-screen flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-[75vh] p-10 ml-10">
            <Image
              src="/matthew-pinker-com/images/MWP.jpg"
              alt="Matt Pinker"
              width={600}
              height={600}
              className="rounded opacity-90"
            />
          </div>
          <div className="w-full md:w-2/3 h-[75vh] mx-auto flex flex-col">
            <div className="w-11/12 flex flex-col p-4 mt-20">
              <h3 className="text-1xl font-bold mb-2">Matt Pinker</h3>
              <p className="mt-5 leading-relaxed">
                Matt Pinker is a Manchester-based sound artist interested in electronic music with a focus on electroacoustic, ambient and techno. Recent work has been inspired by industrial themes, from a collection of compositions in response to Brutalist architecture, and an interactive sound installation constructed from historic steel cutlery.
              </p>
            </div>
            <div className="w-11/12 flex flex-col mt-10 p-4">
              <h3 className="text-1xl font-bold mb-2">Cylindric</h3>
              <p className="mt-5 leading-relaxed">
                Cylindric is a sound art project originating from Manchester, where it is based after a year in Cyprus. With a background in experimental composition, it aims to explore these aesthetics through the lens of techno. Influence from deep techno and ambient mean the music is hypnotic and slow burning as is the Mediterranean way, yet always imbued with the urgency and volatility of industrial life.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
