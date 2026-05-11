import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/CardActionArea', component: CardActionArea, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('CardActionArea'),
  render: (args) => (
    <Card style={{ maxWidth: 360 }}>
      <CardActionArea {...args}>
        <CardContent><Typography>Clickable area</Typography></CardContent>
      </CardActionArea>
    </Card>
  ),
};
