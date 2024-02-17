import { BriefcaseIcon, CalendarRange, MapPinIcon } from 'lucide-react'
import Card from './Card'
import { InfoCard } from './InfoCard'

const data = [
  {
    title: 'Full-time Software Engineer',
    description:
      'Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.',
    company: {
      name: 'Google',
      location: 'Mountain View, CA',
      logo: '/google.jpg',
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
      logo: '/amazon.jpg',
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
          {data.map((item) => (
            <InfoCard.Root key={item.title}>
              <InfoCard.Icon src={item.company.logo} />
              <div>
                <InfoCard.Header>
                  <InfoCard.HeaderTitle>{item.title}</InfoCard.HeaderTitle>
                  <InfoCard.HeaderTag>{item.modality}</InfoCard.HeaderTag>
                </InfoCard.Header>
                <InfoCard.Content>
                  <InfoCard.SubInfoList>
                    <InfoCard.SubInfoItem icon={<BriefcaseIcon size={14} />}>
                      {item.company.name}
                    </InfoCard.SubInfoItem>
                    <InfoCard.SubInfoItem icon={<MapPinIcon size={14} />}>
                      {item.company.location}
                    </InfoCard.SubInfoItem>
                    <InfoCard.SubInfoItem icon={<CalendarRange size={14} />}>
                      {item.startDate} - {item.endDate}
                    </InfoCard.SubInfoItem>
                  </InfoCard.SubInfoList>
                  <InfoCard.Description>
                    {item.description}
                  </InfoCard.Description>
                </InfoCard.Content>
              </div>
            </InfoCard.Root>
          ))}
        </div>
      </Card>
    </section>
  )
}
