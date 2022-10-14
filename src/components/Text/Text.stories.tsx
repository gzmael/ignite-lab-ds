import { Text, TextProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text example',
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      type: 'string',
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
    children: 'Text example small',
  },
}
export const Medium: StoryObj<TextProps> = {
  args: {
    size: 'md',
    children: 'Text example medium',
  },
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    children: 'Text example large',
  },
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    children: <p>Text example large</p>,
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
