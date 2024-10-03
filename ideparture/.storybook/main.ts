import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/Introduction.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
