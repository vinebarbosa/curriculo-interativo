import { CalendarRange, GraduationCapIcon, MapPinIcon } from 'lucide-react'
import Card from './Card'
import { InfoCard } from './InfoCard'

const data = [
  {
    degree: 'Technical in Informatics',
    description:
      'The course provided a solid foundation in computer science and programming, as well as a broad understanding of the hardware and software components of computer systems.',
    institution: {
      name: 'IFRN',
      location: 'Ceará-Mirim, RN',
      icon: 'https://media.licdn.com/dms/image/C4D0BAQFBbroplNr1SQ/company-logo_100_100/0/1630543005144/ifrn_logo?e=1716422400&v=beta&t=ZXQSE2tIRBa0EQlzvAy0O2M8OYMqKXE2ZJpV6VCEXXY',
    },
    startDate: '2018',
    endDate: '2021',
  },
  {
    degree: 'Bootcamp in Full Stack Web Development',
    description:
      'The course provided a solid foundation in web development, including HTML, CSS, JavaScript, React, Node.js, and SQL. The course also covered software engineering best practices and agile methodologies.',
    institution: {
      name: 'Rocketseat',
      location: 'Online',
      icon: 'https://media.licdn.com/dms/image/D4D0BAQGWWA3gGWJ3Sg/company-logo_100_100/0/1701903187680/rocketseat_logo?e=1716422400&v=beta&t=hty9IxdTy1FOStmCkImqOSjgrDy32szE_kG5y1GwtUc',
    },
    startDate: '2020',
    endDate: '2021',
  },
]

export default function EducationSection() {
  return (
    <Card title="Education">
      <div className="space-y-2">
        {data.map((item) => (
          <InfoCard.Root key={item.degree}>
            <InfoCard.Icon src={item.institution.icon} />
            <div>
              <InfoCard.Header>
                <InfoCard.HeaderTitle>{item.degree}</InfoCard.HeaderTitle>
              </InfoCard.Header>
              <InfoCard.Content>
                <InfoCard.SubInfoList>
                  <InfoCard.SubInfoItem icon={<GraduationCapIcon size={14} />}>
                    {item.institution.name}
                  </InfoCard.SubInfoItem>
                  <InfoCard.SubInfoItem icon={<MapPinIcon size={14} />}>
                    {item.institution.location}
                  </InfoCard.SubInfoItem>
                  <InfoCard.SubInfoItem icon={<CalendarRange size={14} />}>
                    {item.startDate} - {item.endDate}
                  </InfoCard.SubInfoItem>
                </InfoCard.SubInfoList>
                <InfoCard.Description>{item.description}</InfoCard.Description>
              </InfoCard.Content>
            </div>
          </InfoCard.Root>
        ))}
      </div>
    </Card>
  )
}
