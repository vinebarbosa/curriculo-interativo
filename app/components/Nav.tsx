'use client'

import { classNames } from '@/utils/styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { href: '/', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white rounded-xl shadow p-2 sticky top-4 w-full z-50">
      <ul className="flex gap-2">
        {routes.map(({ href, label }) => (
          <li key={href} className="flex-1">
            <Link href={href}>
              <p
                className={classNames(
                  'block p-2 rounded-lg text-center text-sm text-gray-800 hover:bg-gray-50 hover:text-blue-600 transition-colors',
                  {
                    'bg-gray-50 text-blue-600': pathname === href,
                  },
                )}
              >
                {label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
