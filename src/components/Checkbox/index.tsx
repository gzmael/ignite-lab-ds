import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { Text } from '../Text'

export interface CheckboxProps {
  label: string
  id: string
}

export function Checkbox({ label, id }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        className="h-6 w-6 rounded bg-gray-800 p-[2px]"
        id={id}
      >
        <CheckboxPrimitive.Indicator>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor={id}>
        <Text size="sm">{label}</Text>
      </label>
    </div>
  )
}
