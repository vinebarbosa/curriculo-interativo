import { CalendarRange, GraduationCapIcon, MapPinIcon } from 'lucide-react'
import Card from './Card'
import { InfoCard } from './InfoCard'
import { education } from '@/data/education'

export default function EducationSection() {
  return (
    <Card title="Education">
      <div className="space-y-2">
        {education.map((item) => (
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
