import { BriefcaseIcon, CalendarRange, MapPinIcon } from 'lucide-react'
import Card from './Card'

const data = [
  {
    title: 'Full-time Software Engineer',
    description:
      'Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.',
    company: {
      name: 'Google',
      location: 'Mountain View, CA',
      logo: 'https://preview.launchoice.com/personal_cv/assets/images/google.jpg',
    },
    startDate: 'Jul 2019',
    endDate: 'Present',
    modality: 'Full-time',
  },
  {
    title: 'Software Engineer Intern',
    description:
      "Designed and implemented new features for Amazon's e-commerce platform. Worked on a team of engineers to improve the user experience and increase sales.",
    company: {
      name: 'Amazon',
      location: 'Seattle, WA',
      logo: 'https://preview.launchoice.com/personal_cv/assets/images/amazon.jpg',
    },
    startDate: 'May 2018',
    endDate: 'Aug 2018',
    modality: 'Internship',
  },
]

export default function ExperienceSection() {
  return (
    <section className="w-100">
      <Card title="Experience">
        <div className="space-y-2">
          {data.map((item, index) => (
            <div
              className="flex flex-col lg:flex-row bg-slate-100/40 rounded-lg p-4 gap-4 hover:bg-gray-100 transition duration-300 ease-in-out"
              key={index}
            >
              <img
                src={item.company.logo}
                alt=""
                className="rounded-full w-12 h-12"
              />
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1">
                    {item.modality}
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <div className="flex gap-1 text-gray-500">
                    <BriefcaseIcon size={14} />
                    <p className="text-xs">{item.company.name}</p>
                  </div>
                  <div className="flex gap-1 text-gray-500">
                    <MapPinIcon size={14} />
                    <p className="text-xs">{item.company.location}</p>
                  </div>
                  <div className="flex gap-1 text-gray-500">
                    <CalendarRange size={14} />
                    <p className="text-xs">
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm  mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
