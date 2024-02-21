import { WithChildrenAndClassName } from '@/types/react'
import { classNames } from '@/utils/styles'

type ICard = WithChildrenAndClassName & {
  title?: string
}

const Card = ({ children, title, className }: ICard) => {
  return (
    <div className={classNames('bg-white rounded-xl shadow p-2', className)}>
      {title && (
        <div className="flex items-center gap-2 p-4">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          <h3 className="text-md inline-block font-medium text-gray-800">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
