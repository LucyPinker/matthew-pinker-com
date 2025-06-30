import Heading from '../components/heading';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Heading text="About" />
      <div className="flex justify-center">
        <main className="flex flex-col md:flex-row w-[50vw] h-[72vh] bg-white bg-opacity-40 p-12 rounded-md shadow-sm">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <div className="w-auto">
              <Image
                src="/images/MWP.jpg"
                alt="Matt Pinker headshot"
                width={400}
                height={400}
                className="rounded opacity-75"
              />
            </div>
            <div className="mt-3 w-[400px] leading-relaxed text-left text-gray-800 font-light tracking-wide">
              <p>
                My name is Matt, I&#39;m a sound designer and composer based in Manchester, UK. Growing up with a classical
                training in piano and exposure to a wide range of music; I began listening to electronic music
                in my teens and became captivated with these sounds in every form from electronica to sci-fi films soundtracks.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 space-y-6 pl-5 leading-relaxed font-light tracking-wide h-full text-right text-gray-800">
            <div>
              <p>
                A musical upbringing eventually led to a bachelor degree in music followed by a masters specialising in electronic
                composition and interactive media. During these years I developed a range of skills from audio
                processing to recording techniques and composition, using these to create experimental ‘acousmatic’
                music involving the capturing and manipulating of recorded and synthesised sound. I also explore
                more rhythmic electronic music under the <a href="https://on.soundcloud.com/xtKsYu2d8dB79Rdu6" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">Cylindric</a> alias.
              </p>
            </div>
            <div>
              <p>
                Coming from a sound art background where non-traditional sonic sources are sculpted and composed into music,
                I am interested in exploring the intersection of sound FX, design, and music to create a cohesive,
                holistic sonic experience. With this in mind, in late 2024 I completed a post-audio course at the renowned studio 344 Audio in Manchester, in order to
                refine my years of audio experience into industry skills ranging from dialogue editing to sound FX
                and sound design. Now equipped to undertake a range of projects from creative experimental
                sound design to professional, high-quality audio editing, I look forward to <a href="/contact" className="underline hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">any propositions</a>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
