import React from 'react';
import { Box } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Box', component: Box, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Box'),
  render: (args) => <Box {...args} p={2}>{args.children}</Box>,
};
