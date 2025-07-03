import Heading from '../components/heading'
import Contact from '../components/contact'

export default function Page() {
  return (
    <div>
      <Heading text="Contact" />
      <main className="p-4 md:p-0">
        <Contact />
      </main>
    </div>
  )
}
