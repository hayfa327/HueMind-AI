import type { Meta, StoryObj } from '@storybook/react'
import AccessibilityBadge from '../design-system/components/AccessibilityBadge/AccessibilityBadge'

const meta: Meta<typeof AccessibilityBadge> = {
  title: 'Design System/AccessibilityBadge',
  component: AccessibilityBadge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccessibilityBadge>

export const LevelAA: Story = {
  args: {
    level: 'AA',
    contrastRatio: '4.5',
    description: 'Meets standard accessibility requirements for normal text.',
  },
}

export const LevelAAA: Story = {
  args: {
    level: 'AAA',
    contrastRatio: '7.1',
    description: 'Highest accessibility standard, suitable for all audiences.',
  },
}