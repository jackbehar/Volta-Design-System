/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [
    {
      from: './assets',
      to: '/assets',
    },
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (webpackConfig) => {
    webpackConfig.module.rules.push({
      test: /\.(js|jsx)$/,
      include: /src/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), { targets: 'defaults' }],
            [require.resolve('@babel/preset-react'), { runtime: 'classic' }],
          ],
        },
      },
    });

    webpackConfig.resolve.extensions = webpackConfig.resolve.extensions || [];
    webpackConfig.resolve.extensions.push('.js', '.jsx');

    return webpackConfig;
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
