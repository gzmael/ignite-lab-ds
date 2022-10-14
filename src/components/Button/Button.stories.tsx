import { Button, ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>

export const Default: StoryObj = {}
export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Button example small',
  },
}
export const Medium: StoryObj<ButtonProps> = {
  args: {
    children: 'Button example medium',
  },
}
export const Large: StoryObj<ButtonProps> = {
  args: {
    children: 'Button example large',
  },
}
export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    children: <a>Button example large</a>,
    asChild: true,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
