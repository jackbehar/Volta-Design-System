import React from 'react';
import { Box, Divider, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Divider', component: Divider, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Divider'),
  render: (args) => (
    <Box style={{ width: 320 }}>
      <Typography>Top</Typography>
      <Divider {...args} style={{ margin: '8px 0' }} />
      <Typography>Bottom</Typography>
    </Box>
  ),
};
