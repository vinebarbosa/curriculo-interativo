import { Github, Linkedin, Mail } from 'lucide-react'
import Card from './Card'

export default function AboutCard() {
  return (
    <Card className="py-4" title="About me">
      <div className="bg-slate-100/40 p-4 rounded-lg">
        <p className="text-sm text-slate-500 leading-relaxed">
          I am passionate about using technology to solve real-world problems. I
          am always looking for new ways to improve the user experience and make
          software more accessible to everyone. I am also a strong advocate for
          open source software and I am always willing to contribute to the
          community.
        </p>

        <hr className="my-4 border-t border-slate-200" />

        <div className="flex flex-col">
          <a
            className="text-sm font-medium text-slate-800"
            href="mailto:viniciosbarbosa.dev@gmail.com"
          >
            <Mail size={14} className="inline-block -mt-0.5 mr-2" />
            viniciosbarbosa.dev@gmail.com
          </a>

          <hr className="my-1 border-t border-slate-200" />

          <a
            className="text-sm font-medium text-slate-800"
            href="https://github.com/vinebarbosa"
          >
            <Github size={14} className="inline-block -mt-0.5 mr-2" />
            github.com/vinebarbosa
          </a>

          <hr className="my-1 border-t border-slate-200" />

          <a
            className="text-sm font-medium text-slate-800"
            href="https://linkedin.com/in/vinebarbosa"
          >
            <Linkedin size={14} className="inline-block -mt-0.5 mr-2" />
            linkedin.com/in/vinebarbosa
          </a>
        </div>
      </div>
    </Card>
  )
}
