import React from 'react';
import { Avatar, AvatarGroup } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/AvatarGroup', component: AvatarGroup, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('AvatarGroup'),
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>A</Avatar><Avatar>B</Avatar><Avatar>C</Avatar><Avatar>D</Avatar><Avatar>E</Avatar>
    </AvatarGroup>
  ),
};
