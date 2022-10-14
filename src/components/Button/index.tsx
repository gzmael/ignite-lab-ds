import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

const Button = ({
  children,
  asChild = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      type={type}
      className={clsx(
        'w-full rounded bg-cyan-500 py-3 px-4 font-semibold text-black transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white',
        {},
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button }
