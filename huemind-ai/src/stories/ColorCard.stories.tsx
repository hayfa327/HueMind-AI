import type { Meta, StoryObj } from '@storybook/react'
import ColorCard from '../design-system/components/ColorCard/ColorCard'

const meta: Meta<typeof ColorCard> = {
  title: 'Design System/ColorCard',
  component: ColorCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    hex: { control: 'color' },
    name: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof ColorCard>

export const Primary: Story = {
  args: {
    label: 'Primary',
    hex: '#005F73',
    name: 'Arctic Blue',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    hex: '#E8A79B',
    name: 'Lingonberry Blush',
  },
}

export const Vibrant: Story = {
  args: {
    label: 'Accent',
    hex: '#7C3AED',
    name: 'Purple Heart',
  },
}