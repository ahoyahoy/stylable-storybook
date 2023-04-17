import type { StorybookConfig } from '@storybook/nextjs';
import {
  applyWebpackConfigStylableExcludes,
  StylableWebpackPlugin,
} from '@stylable/webpack-plugin';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: { storyStoreV7: false },
  webpackFinal: async (config, { configType }) => {
    applyWebpackConfigStylableExcludes(config);

    config.plugins = [
      ...(config.plugins || []),
      new StylableWebpackPlugin(),
    ];

    return config;
  }
};
export default config;
