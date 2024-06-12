import Card from './Card'

export default function InformationCard() {
  return (
    <Card title="Information">
      <div className="bg-slate-100/40 p-4 rounded-lg">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-sm text-gray-700">Ceará, BR</p>
        </div>
        <hr className="my-2" />

        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Experience</p>
          <p className="text-sm text-gray-700">Specialist</p>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Availability</p>
          <p className="text-sm text-gray-700">Open to new opportunities</p>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Relocation</p>
          <p className="text-sm text-gray-700">Yes</p>
        </div>
      </div>
    </Card>
  )
}
