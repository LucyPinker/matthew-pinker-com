import Heading from '../components/heading';
import performances from '@/app/data/performances.json';

export default function Page() {
  return (
    <div>
      <Heading text="Live" />
      <main className="p-10 max-w-5xl mx-auto">
        <div className="bg-white bg-opacity-40 p-6 rounded-md shadow-sm max-h-[600px] overflow-y-auto scroll-thin">
          <div className="grid grid-cols-3 font-semibold mb-4 text-left">
            <span>Event</span>
            <span>Location</span>
            <span>Date</span>
          </div>

          {performances.map(({ venue, city, date }, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 py-2 text-left text-sm sm:text-base ${index !== performances.length - 1
                  ? 'border-b border-gray-300/40'
                  : ''
                }`}
            >
              <span className="text-gray-900">{venue}</span>
              <span className="text-gray-700">{city}</span>
              <span className="text-gray-700">{date}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
