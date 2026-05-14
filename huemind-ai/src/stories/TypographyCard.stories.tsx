import type { Meta, StoryObj } from '@storybook/react'
import TypographyCard from '../design-system/components/typographyCard/TypographyCard'

const meta: Meta<typeof TypographyCard> = {
  title: 'Design System/TypographyCard',
  component: TypographyCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TypographyCard>

export const Heading: Story = {
  args: {
    fontFamily: 'Playfair Display',
    role: 'Heading',
    category: 'Serif',
  },
}

export const Body: Story = {
  args: {
    fontFamily: 'Inter',
    role: 'Body',
    category: 'Sans-serif',
  },
}

export const Modern: Story = {
  args: {
    fontFamily: 'Space Grotesk',
    role: 'Heading',
    category: 'Sans-serif',
  },
}