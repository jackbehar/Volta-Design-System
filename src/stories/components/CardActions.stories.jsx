import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/CardActions', component: CardActions, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('CardActions'),
  render: (args) => (
    <Card style={{ maxWidth: 360 }}>
      <CardContent><Typography>Actions area</Typography></CardContent>
      <CardActions {...args}><Button size="small">Cancel</Button><Button size="small" variant="contained">Save</Button></CardActions>
    </Card>
  ),
};
