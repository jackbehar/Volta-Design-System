import React from 'react';
import { Card, CardContent, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Card', component: Card, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Card'),
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardContent><Typography>Card content</Typography></CardContent>
    </Card>
  ),
};
