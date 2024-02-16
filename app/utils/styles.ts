import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function classNames(
  ...classes: (string | { [key: string]: boolean } | undefined)[]
) {
  return twMerge(clsx(...classes))
}
