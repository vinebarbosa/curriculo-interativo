import { BriefcaseIcon, CalendarRange, MapPinIcon } from 'lucide-react'
import Card from './Card'
import { InfoCard } from './InfoCard'
import { experience } from '@/data/experience'

export default function ExperienceSection() {
  return (
    <section className="w-100">
      <Card title="Experience">
        <div className="space-y-2">
          {experience.map((item) => (
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
