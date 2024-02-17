import AboutCard from './components/AboutCard'
import MainInfoCard from './components/MainInfoCard'
import InformationCard from './components/InformationCard'

export default function Home() {
  return (
    <main className="p-4 lg:p-10">
      <div className="w-100 lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto gap-4">
        <div className="w-100 md:max-w-[360px] space-y-4">
          <MainInfoCard />
          <AboutCard />
          <InformationCard />
        </div>
        <div></div>
      </div>
    </main>
  )
}
