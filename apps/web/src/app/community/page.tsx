const events = [
  {
    title: 'Annual General Meeting 2025',
    date: 'December 15, 2025',
    location: 'Aligarh Community Center',
    description: 'Join us for our annual gathering to discuss community progress and future initiatives.',
  },
  {
    title: 'Educational Excellence Awards',
    date: 'November 20, 2025',
    location: 'Shah Alvi Auditorium',
    description: 'Celebrating academic achievements of our community students.',
  },
  {
    title: 'Cultural Heritage Festival',
    date: 'January 10, 2026',
    location: 'Community Grounds',
    description: 'A celebration of our rich cultural traditions with performances and exhibitions.',
  },
]

const news = [
  {
    title: 'Scholarship Program 2026',
    date: 'October 15, 2025',
    description: 'Applications are now open for the 2026 Shah Alvi Scholarship Program.',
  },
  {
    title: 'New Healthcare Initiative',
    date: 'October 1, 2025',
    description: 'Launching monthly health camps in collaboration with leading hospitals.',
  },
  {
    title: 'Community Development Project',
    date: 'September 25, 2025',
    description: 'New initiative to support skill development and entrepreneurship.',
  },
]

export default function CommunityPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Community Hub</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Connected with Your Community
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keep up with the latest events, news, and initiatives in our vibrant community.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mx-auto max-w-2xl lg:max-w-none mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-sm text-indigo-600">{event.date}</p>
                <p className="mt-1 text-sm text-gray-500">{event.location}</p>
                <p className="mt-4 text-sm text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest News */}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
            {news.map((item) => (
              <div key={item.title} className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-indigo-600">{item.date}</p>
                <p className="mt-4 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing family and be part of a movement that celebrates our heritage while building a progressive future.
          </p>
          <div className="flex justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a
              href="/programs"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View Programs <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}