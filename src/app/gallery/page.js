import Heading from '../components/heading'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Heading text="Gallery" />
      <div className="relative w-full max-w-md aspect-[7/5] mx-auto p-4 mt-10">
        <Image
          src="/matthew-pinker-com/images/surprise-pratik.png"
          alt="surprise"
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <main></main>
    </div>
  )
}
