import React from 'react';
import { Rating } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Rating', component: Rating, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Rating'),
  render: (args) => <Rating {...args} />,
};
