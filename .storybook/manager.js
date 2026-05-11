import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const voltaTheme = create({
  base: 'dark',
  brandTitle: 'Volta Design System',
  brandUrl: '/',
  brandTarget: '_self',
  brandImage: '/assets/image-12864e3c-8f8b-4fbc-906b-b850f4e84803.png',
  colorPrimary: '#6366F1',
  colorSecondary: '#818CF8',
  appBg: '#0A0F1E',
  appContentBg: '#0F172A',
  appBorderColor: '#1E293B',
  appBorderRadius: 8,
  textColor: '#F1F5F9',
  barBg: '#0A0F1E',
  barTextColor: '#94A3B8',
  barSelectedColor: '#818CF8',
  inputBg: '#111827',
  inputBorder: '#334155',
  inputTextColor: '#F1F5F9',
});

addons.setConfig({
  theme: voltaTheme,
  panelPosition: 'right',
});
