import type { Meta, StoryObj } from '@storybook/angular';
import { BannerComponent } from './banner-careers.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BannerComponent> = {
  title: 'Organisms/Banner Careers',
  component: BannerComponent,
  tags: ['autodocs'],
  argTypes: {
    showBanner: {
      control: 'boolean', // Allows you to toggle the showBanner input
    },
  },
  // Use `fn` to spy on the onScroll arg or any other event-based methods
  args: {
    showBanner: true,
  },
};

export default meta;
type Story = StoryObj<BannerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Visible: Story = {
  args: {
    showBanner: true,
  },
};

export const Hidden: Story = {
  args: {
    showBanner: false,
  },
};

export const ToggleBanner: Story = {
  args: {
    showBanner: true,
  },
  play: async ({ canvasElement }) => {
    const toggleButton = canvasElement.querySelector('button');
    toggleButton?.click();
  },
};
