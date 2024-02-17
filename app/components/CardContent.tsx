import { WithChildrenAndClassName } from '@/types/react'
import { classNames } from '@/utils/styles'

type ICardContent = WithChildrenAndClassName

const CardContent = ({ children, className }: ICardContent) => {
  return (
    <div className={classNames('bg-slate-100/40 p-4 rounded-lg', className)}>
      {children}
    </div>
  )
}

export default CardContent
