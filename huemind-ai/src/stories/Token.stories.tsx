import type { Meta, StoryObj } from '@storybook/react'
import TokenCard from '../design-system/components/tokenCard/TokenCard'

const meta: Meta<typeof TokenCard> = {
  title: 'Design System/TokenCard',
  component: TokenCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TokenCard>

export const Radius: Story = {
  args: {
    name: 'Border Radius',
    value: '8px',
    type: 'radius',
  },
}

export const RadiusLarge: Story = {
  args: {
    name: 'Border Radius Large',
    value: '24px',
    type: 'radius',
  },
}

export const Spacing: Story = {
  args: {
    name: 'Base Spacing',
    value: '8px',
    type: 'spacing',
  },
}

export const Color: Story = {
  args: {
    name: 'Primary Color',
    value: '#005F73',
    type: 'color',
  },
}