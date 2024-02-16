import type { ReactNode } from 'react'

export type WithChildren<T = unknown> = T & { children?: ReactNode }

export type WithClassName<T = unknown> = T & { className?: string }

export type WithChildrenAndClassName<T = unknown> = WithChildren<
  WithClassName<T>
>
