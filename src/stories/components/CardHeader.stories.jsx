import React from 'react';
import { Avatar, Card, CardHeader, IconButton } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';
import { icon } from './atomsStoryHelpers';

export default { title: 'Components/CardHeader', component: CardHeader, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('CardHeader'),
  render: (args) => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader {...args} avatar={<Avatar>H</Avatar>} action={<IconButton>{icon('dots-vertical')}</IconButton>} />
    </Card>
  ),
};
