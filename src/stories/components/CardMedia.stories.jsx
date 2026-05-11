import React from 'react';
import { Card, CardMedia } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/CardMedia', component: CardMedia, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('CardMedia'),
  render: (args) => (
    <Card style={{ maxWidth: 360 }}>
      <CardMedia {...args} />
    </Card>
  ),
};
