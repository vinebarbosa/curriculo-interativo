import { WithChildrenAndClassName } from '@/types/react'
import { classNames } from '@/utils/styles'

type IBadge = WithChildrenAndClassName

const Badge = ({ children, className }: IBadge) => {
  return (
    <span
      className={classNames(
        'bg-zinc-200/80 text-xs p-2 py-1 text-slate-600/80 font-medium w-fit',
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
