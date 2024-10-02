/**
 * BUTTON
 * An Atom.
 * 
 * iDeparture Design System v.3.0.1
 */

import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    icon: {
      control: 'text',
      description: 'Optional icon to display alongside the text',
    },
    styleType: {
      control: {
        type: 'select',
        options: ['text-only', 'text-icon', 'filled', 'outline'],
      },
      description: 'Defines the button style type',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the button',
      if: { arg: 'styleType', eq: 'filled' }, // Optional: only show for filled style
    },
    // Updated to the actual output event name
    buttonClick: {
      action: 'clicked',
      description: 'Event fired when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Text Only Button
export const TextOnly: Story = {
  args: {
    text: 'Click Me',
    styleType: 'text-only',
    buttonClick: fn(), // You can add the action here if needed
  },
};

// Text + Icon Button
export const TextWithIcon: Story = {
  args: {
    text: 'Settings',
    icon: '⚙️', // Replace this with an actual icon as needed
    styleType: 'text-icon',
    buttonClick: fn(),
  },
};

// Text (All Caps), Filled Button
export const FilledAllCaps: Story = {
  args: {
    text: 'SUBMIT',
    styleType: 'filled',
    backgroundColor: '#007bff', // Example color
    buttonClick: fn(),
  },
};

// Text (Lowercase), Outline Button
export const LowercaseOutline: Story = {
  args: {
    text: 'cancel',
    styleType: 'outline',
    buttonClick: fn(),
  },
};

// Large Button
export const Large: Story = {
  args: {
    size: 'large',
    text: 'Large Button',
    styleType: 'filled',
    backgroundColor: '#007bff', // Example color
    buttonClick: fn(),
  },
};

// Small Button
export const Small: Story = {
  args: {
    size: 'small',
    text: "Ideparture",
    styleType: 'outline',
    buttonClick: fn(),
    icon: "What"
  },
};
