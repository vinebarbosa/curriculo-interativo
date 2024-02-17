import { WithChildren } from '@/types/react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface IInfoCardIcon {
  src: string
}

interface IInfoCardSubInfoItem extends WithChildren {
  icon: ReactNode
}

function InfoCardRoot({ children }: WithChildren) {
  return (
    <div className="flex flex-col lg:flex-row bg-slate-100/40 rounded-lg p-4 gap-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      {children}
    </div>
  )
}

function InfoCardIcon({ src }: IInfoCardIcon) {
  return (
    <Image
      src={src}
      className="rounded-full w-12 h-12"
      alt="logo"
      width={48}
      height={48}
      priority
    />
  )
}

function InfoCardHeader({ children }: WithChildren) {
  return <div className="flex justify-between">{children}</div>
}

function InfoCardHeaderTitle({ children }: WithChildren) {
  return <h4 className="text-sm font-medium text-gray-800">{children}</h4>
}

function InfoCardHeaderTag({ children }: WithChildren) {
  return (
    <p className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1">
      {children}
    </p>
  )
}

function InfoCardContent({ children }: WithChildren) {
  return <div>{children}</div>
}

function InfoCardSubInfoList({ children }: WithChildren) {
  return (
    <div className="flex flex-col md:flex-row gap-2 lg:gap-4 mt-2">
      {children}
    </div>
  )
}

function InfoCardSubInfoItem({ icon, children }: IInfoCardSubInfoItem) {
  return (
    <div className="flex gap-1 text-gray-500">
      {icon}
      <p className="text-xs">{children}</p>
    </div>
  )
}

function InfoCardDescriotion({ children }: WithChildren) {
  return <p className="text-gray-500 text-sm  mt-4">{children}</p>
}

export const InfoCard = {
  Root: InfoCardRoot,
  Icon: InfoCardIcon,
  Content: InfoCardContent,
  Header: InfoCardHeader,
  HeaderTitle: InfoCardHeaderTitle,
  HeaderTag: InfoCardHeaderTag,
  SubInfoList: InfoCardSubInfoList,
  SubInfoItem: InfoCardSubInfoItem,
  Description: InfoCardDescriotion,
}
