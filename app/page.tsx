import AboutCard from './components/AboutCard'
import MainInfoCard from './components/MainInfoCard'
import InformationCard from './components/InformationCard'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

export default function Home() {
  return (
    <main className="p-4 md:p-10">
      <div className="w-100 max-w-100 md:max-w-[400px] lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto gap-4">
        <div className="w-full lg:w-[600px] space-y-4">
          <MainInfoCard />
          <AboutCard />
          <InformationCard />
        </div>
        <div className="w-full space-y-4">
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </main>
  )
}
