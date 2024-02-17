import { Download } from 'lucide-react'
import Badge from './Badge'
import Card from './Card'
import Image from 'next/image'

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Next.js',
  'NestJS',
  'Prisma',
  'Material UI',
  'PostgreSQL',
  'Tailwind CSS',
]

export default function MainInfoCard() {
  return (
    <Card className="p-0 w-full overflow-hidden">
      <div className="relative">
        <Image
          src="/cover.jpg"
          alt="cover"
          className="w-full h-full object-cover rounded-t-lg"
          height={270}
          width={360}
          priority
        />
        <div className="absolute top-0 left-0 right-0 h-full flex items-end p-4 bg-gradient-to-b-tranparent">
          <Image
            className="rounded-full border-4 border-white w-20 h-20"
            src="/avatar.png"
            alt="Vinícios Barbosa avatar"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
      <div className="px-6 py-2">
        <div className="flex items-center gap-2">
          <h1 className="text-md font-medium text-gray-800 relative ">
            Vinícios Barbosa
          </h1>
          <div className="flex items-center justify-center animate-pulse-custom bg-emerald-500/20 p-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-sm font-light mt-0.5 text-gray-800">
          Full Stack Developer &#x2022; Brazil
        </h2>
      </div>
      <div className="bg-slate-100/40 p-4 m-2 rounded-lg">
        <p className="text-sm text-slate-500 leading-relaxed">
          Full-stack developer with 2+ years of experience in building web apps.
          Skilled in React, Node.js, TypeScript, and more.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>

        <button className="mt-8 bg-blue-600 text-white py-2.5 px-4 rounded-md text-xs font-medium w-full hover:bg-blue-700 transition duration-200">
          Download CV
          <Download className="inline-block ml-2 -mt-1" size={14} />
        </button>
      </div>
    </Card>
  )
}
