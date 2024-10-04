/**
 * PREVIEW | iDeparture Design System v.3.0.1
 */

import type { Preview } from "@storybook/angular";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light, // or themes.dark
    },
    
    layout: 'fullscreen', // makes it full screen for a clean presentation
  },
};

export default preview;
