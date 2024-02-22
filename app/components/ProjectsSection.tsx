import {
  CalendarRange,
  ExternalLinkIcon,
  FolderIcon,
  UserIcon,
} from 'lucide-react'
import Card from './Card'
import { InfoCard } from './InfoCard'

import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <Card title="Projects">
      <div className="space-y-2">
        {projects.map((item) => (
          <InfoCard.Root key={item.title}>
            <InfoCard.Icon src={item.icon} />
            <div>
              <InfoCard.Header>
                <InfoCard.HeaderTitle>{item.title}</InfoCard.HeaderTitle>
              </InfoCard.Header>
              <InfoCard.Content>
                <InfoCard.SubInfoList>
                  <InfoCard.SubInfoItem icon={<FolderIcon size={14} />}>
                    {item.category}
                  </InfoCard.SubInfoItem>
                  <InfoCard.SubInfoItem icon={<UserIcon size={14} />}>
                    {item.participation}
                  </InfoCard.SubInfoItem>
                  <InfoCard.SubInfoItem icon={<CalendarRange size={14} />}>
                    {item.date}
                  </InfoCard.SubInfoItem>
                </InfoCard.SubInfoList>
                <InfoCard.Description>{item.description}</InfoCard.Description>
                <InfoCard.Footer>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600"
                  >
                    <ExternalLinkIcon size={16} className="inline mb-1" />{' '}
                    {item.url}
                  </a>
                </InfoCard.Footer>
              </InfoCard.Content>
            </div>
          </InfoCard.Root>
        ))}
      </div>
    </Card>
  )
}
