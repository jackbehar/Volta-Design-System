import React from 'react';
import UXPinWrapper from '../src/components/UXPinWrapper/UXPinWrapper';

const stripUxpinTags = (description) => {
  if (!description || typeof description !== 'string') {
    return description;
  }

  return description
    .split('\n')
    .filter((line) => !line.trim().startsWith('@uxpin'))
    .join('\n')
    .trim();
};

const preview = {
  decorators: [
    (Story) =>
      React.createElement(
        UXPinWrapper,
        null,
        React.createElement(
          'div',
          { style: { padding: '16px' } },
          React.createElement(Story, null)
        )
      ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      sort: 'alpha',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Patterns', ['Foundations', 'Atoms', 'Molecules', 'Organisms', 'Templates']],
      },
    },
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return stripUxpinTags(notes);
        }

        const info = component && component.__docgenInfo;
        return stripUxpinTags(info && info.description ? info.description : '');
      },
    },
    layout: 'padded',
  },
};

export default preview;
