import { Heading, HeadingProps } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading example',
    size: 'md',
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
} as Meta<HeadingProps>

export const Default: StoryObj = {}
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
    children: 'Heading example small',
  },
}
export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
    children: 'Heading example medium',
  },
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    children: 'Heading example large',
  },
}
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
    children: <h3>Heading example large</h3>,
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
