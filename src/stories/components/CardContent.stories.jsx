import React from 'react';
import { Card, CardContent, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/CardContent', component: CardContent, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('CardContent'),
  render: (args) => (
    <Card style={{ maxWidth: 360 }}>
      <CardContent {...args}><Typography>CardContent area</Typography></CardContent>
    </Card>
  ),
};
