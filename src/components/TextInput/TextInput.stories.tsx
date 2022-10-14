import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key="0">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" key="1" />,
    ],
  },
  argTypes: {},
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="Type your e-mail address" key="0" />,
    ],
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
}
