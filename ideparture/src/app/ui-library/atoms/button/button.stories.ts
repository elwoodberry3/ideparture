/**
 * BUTTON
 * An Atom.
 * 
 * iDeparture Design System v.3.0.1
 */

import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    styleType: {
      control: { type: 'select' },
      options: ['text-only', 'text-icon', 'filled', 'outline'],
      description: 'Defines the button style (text-only, text-icon, filled, or outline)',
    },
    text: {
      control: { type: 'text' },
      description: 'Button text',
    },
    icon: {
      control: { type: 'text' },
      description: 'Optional icon for text-icon button (use valid SVG icon reference)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Optional background color for the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'large'],
      description: 'Button size (small or large)',
    },
    buttonClick: { action: 'clicked' },
  },
  args: {
    text: 'Button',
    styleType: 'text-only',
    backgroundColor: 'transparent',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Text-Only Button Story
export const TextOnly: Story = {
  args: {
    text: 'Sign Up Here!',
    styleType: 'text-only',
  },
};

// Text + Icon Button Story
export const TextIcon: Story = {
  args: {
    text: 'Save',
    styleType: 'text-icon',
    icon: 'save-icon', // Replace with actual SVG reference
  },
};

// Filled Button Story
export const Filled: Story = {
  args: {
    text: 'Submit',
    styleType: 'filled',
    backgroundColor: '#1B2E40', // Primary color
  },
};

// Outline Button Story
export const Outline: Story = {
  args: {
    text: 'Cancel',
    styleType: 'outline',
    backgroundColor: 'transparent',
  },
};

// Large Button Story
export const Large: Story = {
  args: {
    text: 'Large Button',
    size: 'large',
    styleType: 'filled',
  },
};

// Small Button Story
export const Small: Story = {
  args: {
    text: 'Small Button',
    size: 'small',
    styleType: 'text-only',
  },
};
