import CardAbout from './components/CardAbout'
import CardMain from './components/CardMain'

export default function Home() {
  return (
    <main className="p-10">
      <div className="w-100 lg:max-w-[1024px] flex flex-col lg:flex-row mx-auto gap-4">
        <div className="w-100 md:max-w-[360px] space-y-4">
          <CardMain />
          <CardAbout />
        </div>
        <div></div>
      </div>
    </main>
  )
}
