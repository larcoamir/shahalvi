'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProgramDetail from '@/components/programs/ProgramDetail'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const programs = [
  {
    category: 'Education Initiatives | शैक्षिक पहल',
    description: 'Supporting educational advancement and skill development in our community.',
    items: [
      {
        title: 'Merit-based Scholarships | योग्यता आधारित छात्रवृत्ति',
        description: 'Financial support for deserving students at various academic levels.',
      },
      {
        title: 'Career Counseling | करियर मार्गदर्शन',
        description: 'Professional guidance for students and young professionals.',
      },
      {
        title: 'Skill Development | कौशल विकास',
        description: 'Workshops and training programs for practical skills.',
      },
    ],
  },
  {
    category: 'Community Welfare | सामुदायिक कल्याण',
    description: 'Ensuring the well-being and support of our community members.',
    items: [
      {
        title: 'Family Support | पारिवारिक सहायता',
        description: 'Assistance programs for families in need.',
      },
      {
        title: 'Healthcare Initiatives | स्वास्थ्य देखभाल',
        description: 'Medical camps and health awareness programs.',
      },
      {
        title: 'Emergency Assistance | आपातकालीन सहायता',
        description: 'Rapid response support during crisis situations.',
      },
    ],
  },
  {
    category: 'Cultural Programs | सांस्कृतिक कार्यक्रम',
    description: 'Preserving and celebrating our rich cultural heritage.',
    items: [
      {
        title: 'Heritage Festivals | विरासत उत्सव',
        description: 'Annual celebrations of our cultural traditions.',
      },
      {
        title: 'Community Gatherings | सामुदायिक मिलन',
        description: 'Regular meetings to strengthen community bonds.',
      },
      {
        title: 'Art Preservation | कला संरक्षण',
        description: 'Programs to maintain and promote traditional arts.',
      },
    ],
  },
]

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const programDetails = {
    'Merit-based Scholarships': {
      eligibility: [
        'Must be a member of Shah Alvi community',
        'Minimum 60% marks in previous academic year',
        'Family income below specified threshold',
        'Regular attendance in academic institution'
      ],
      benefits: [
        'Annual financial support for tuition fees',
        'Book and study material allowance',
        'Mentorship from community professionals',
        'Career guidance sessions'
      ],
      process: [
        'Submit online application form',
        'Provide academic and income certificates',
        'Attend interview with selection committee',
        'Regular progress reports required'
      ]
    },
    'Healthcare Initiatives': {
      eligibility: [
        'Registered community members',
        'Senior citizens above 60 years',
        'Low-income families',
        'Emergency medical needs'
      ],
      benefits: [
        'Free health check-ups',
        'Subsidized medicine support',
        'Specialist consultations',
        'Emergency medical assistance'
      ],
      process: [
        'Register at community health desk',
        'Submit medical records',
        'Attend scheduled health camps',
        'Follow-up consultations as needed'
      ]
    },
    'Heritage Festivals': {
      benefits: [
        'Cultural performances and exhibitions',
        'Traditional art workshops',
        'Community meals and gatherings',
        'Youth participation opportunities'
      ],
      process: [
        'Annual festival calendar announcement',
        'Online registration for participation',
        'Rehearsals and preparations',
        'Community-wide celebration'
      ]
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Programs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Supporting Our Community
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive programs focused on education, welfare, and cultural preservation,
            designed to empower and support our community members at every stage of life.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <Tab.Group selectedIndex={selectedCategory} onChange={setSelectedCategory}>
            <Tab.List className="flex space-x-1 rounded-xl bg-indigo-100 p-1">
              {programs.map((category) => (
                <Tab
                  key={category.category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-indigo-700 shadow'
                        : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-800'
                    )
                  }
                >
                  {category.category.split('|')[0].trim()}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {programs.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <div className="mt-8">
                    <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                    <div className="space-y-8">
                      {category.items.map((item) => {
                        const title = item.title.split('|')[0].trim()
                        return (
                          <ProgramDetail
                            key={title}
                            title={item.title}
                            description={item.description}
                            details={programDetails[title as keyof typeof programDetails] || {}}
                          />
                        )
                      })}
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
            Ready to Get Involved?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our programs and be part of the community's growth and development.
          </p>
          <div className="flex justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}