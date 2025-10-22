const resources = [
  {
    category: 'Educational Resources',
    items: [
      {
        title: 'Scholarship Guide',
        description: 'Complete guide to available scholarships and application process.',
        link: '#',
      },
      {
        title: 'Career Resources',
        description: 'Information about career opportunities and guidance.',
        link: '#',
      },
      {
        title: 'Study Materials',
        description: 'Access to educational resources and study materials.',
        link: '#',
      },
    ],
  },
  {
    category: 'Community Support',
    items: [
      {
        title: 'Healthcare Directory',
        description: 'List of healthcare facilities and medical support services.',
        link: '#',
      },
      {
        title: 'Emergency Contacts',
        description: 'Important contact information for emergency situations.',
        link: '#',
      },
      {
        title: 'Support Programs',
        description: 'Information about various community support initiatives.',
        link: '#',
      },
    ],
  },
  {
    category: 'Cultural Resources',
    items: [
      {
        title: 'Cultural Archives',
        description: 'Digital archive of our community\'s cultural heritage.',
        link: '#',
      },
      {
        title: 'Event Calendar',
        description: 'Upcoming cultural events and celebrations.',
        link: '#',
      },
      {
        title: 'Community Library',
        description: 'Access to books and documents about our heritage.',
        link: '#',
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Resources</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community Resources
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access valuable resources and information to support your educational, cultural, and personal growth.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {resources.map((category) => (
            <div key={category.category} className="mt-16 first:mt-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div key={item.title} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mx-auto max-w-2xl mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Need Additional Help?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our team is here to help you find the resources you need.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Support Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}