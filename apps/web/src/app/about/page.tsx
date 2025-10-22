import MediaGallery from '@/components/media/MediaGallery'

const photos = [
  {
    id: 1,
    src: '/images/community/event1.jpg',
    title: 'Annual General Meeting 2024',
    description: 'Community members gathering for our annual meeting in Aligarh.'
  },
  {
    id: 2,
    src: '/images/community/event2.jpg',
    title: 'Educational Excellence Awards',
    description: 'Celebrating academic achievements of our youth.'
  },
  {
    id: 3,
    src: '/images/community/event3.jpg',
    title: 'Cultural Festival',
    description: 'Traditional performances at our cultural heritage festival.'
  },
  {
    id: 4,
    src: '/images/community/event4.jpg',
    title: 'Community Service',
    description: 'Volunteers participating in community welfare programs.'
  }
]

const testimonials = [
  {
    content: "The Shah Alvi Association has been instrumental in preserving our cultural heritage while fostering progress. Their educational support changed my life.",
    author: "Arif Khan",
    role: "Community Member",
    location: "Aligarh"
  },
  {
    content: "Thanks to the association's scholarship program, I was able to complete my higher education. Now I'm giving back to the community as a mentor.",
    author: "Zainab Ahmed",
    role: "Education Program Graduate",
    location: "Delhi"
  },
  {
    content: "The sense of unity and support within our community is remarkable. The association's efforts in bringing everyone together are commendable.",
    author: "Mohammad Siddiqui",
    role: "Elder Member",
    location: "Lucknow"
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Vision Statement */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Vision</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering generations through unity, education, and cultural preservation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            एकता, शिक्षा और सांस्कृतिक विरासत के माध्यम से पीढ़ियों को सशक्त बनाना
          </p>
        </div>

        {/* Who We Are */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Who We Are</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Shah Alvi Association stands as a distinguished non-profit organization, officially registered to serve the Shah Alvi (Faqir/Sain) community. Our foundation rests on the pillars of cultural heritage, educational advancement, and social welfare, ensuring every community member's dignity and progress.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            शाह अल्वी एसोसिएशन एक प्रतिष्ठित, पंजीकृत गैर-लाभकारी संस्था है, जो शाह अल्वी (फ़क़ीर/साईं) समुदाय की सेवा के लिए समर्पित है। हमारी नींव सांस्कृतिक विरासत, शैक्षिक उन्नति और सामाजिक कल्याण के स्तंभों पर टिकी है।
          </p>
        </div>

        {/* Core Values */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 lg:text-center">Core Values</h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {[
              {
                title: 'Heritage Preservation | विरासत संरक्षण',
                description: 'Safeguarding our rich cultural legacy for future generations | आने वाली पीढ़ियों के लिए हमारी समृद्ध सांस्कृतिक विरासत की रक्षा'
              },
              {
                title: 'Educational Excellence | शैक्षिक उत्कृष्टता',
                description: 'Fostering learning and skill development at all levels | सभी स्तरों पर शिक्षा और कौशल विकास को बढ़ावा देना'
              },
              {
                title: 'Community Support | सामुदायिक सहयोग',
                description: 'Extending help to those in need within our community | समुदाय के जरूरतमंद सदस्यों की मदद करना'
              },
              {
                title: 'Unity & Leadership | एकता और नेतृत्व',
                description: 'Building bridges across regions and nurturing future leaders | क्षेत्रों के बीच सेतु बनाना और भविष्य के नेताओं का पोषण करना'
              }
            ].map((value) => (
              <div key={value.title} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">{value.title}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Our Journey */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Journey</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From our humble beginnings in Aligarh, we've grown into a dynamic organization spanning multiple regions. What started as a local initiative to connect families has evolved into a comprehensive platform for community development and social empowerment.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            अलीगढ़ से शुरू होकर, हम एक गतिशील संगठन के रूप में कई क्षेत्रों में फैल गए हैं। जो परिवारों को जोड़ने की स्थानीय पहल के रूप में शुरू हुआ, वह आज सामुदायिक विकास और सामाजिक सशक्तिकरण का एक व्यापक मंच बन गया है।
          </p>
        </div>

        {/* Media Gallery */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 lg:text-center">Community Gallery</h2>
          <MediaGallery photos={photos} />
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 lg:text-center">Community Voices</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-50 p-6 rounded-2xl"
              >
                <div className="flex-1">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Key Milestones</h2>
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {[
                {
                  year: '1980',
                  title: 'Foundation',
                  description: 'Establishment of Shah Alvi Association in Aligarh'
                },
                {
                  year: '1995',
                  title: 'Education Initiative',
                  description: 'Launch of scholarship program for underprivileged students'
                },
                {
                  year: '2010',
                  title: 'Expansion',
                  description: 'Extended community services to multiple regions'
                },
                {
                  year: '2025',
                  title: 'Digital Transformation',
                  description: 'Launch of comprehensive online platform'
                }
              ].map((milestone, index) => (
                <li key={milestone.year}>
                  <div className="relative pb-8">
                    {index !== 3 && (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
                          <span className="text-white text-sm">{milestone.year.substring(2)}</span>
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                          <p className="mt-1 text-sm text-gray-500">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}