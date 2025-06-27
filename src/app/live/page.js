import Heading from '../components/heading';
import performances from '@/app/data/performances.json';

export default function Page() {
  return (
    <div>
      <Heading text="Live" />
      <main className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {performances.map(({ venue, city, date }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-50 p-4 rounded shadow"
            >
              <p className="text-gray-700 font-semibold">{venue}</p>
              <p className="text-gray-600">{city}</p>
              <p className="text-gray-500">{date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
