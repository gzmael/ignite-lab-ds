import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Lembrar de mim por 30 dias',
    id: 'authenticated',
  },
  argTypes: {},
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
