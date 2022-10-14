import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

const Text = ({ size = 'md', children, asChild = false }: TextProps) => {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={clsx('font-sans text-gray-100', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}

export { Text }
