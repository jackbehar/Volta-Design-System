import React from 'react';
import { Badge } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';
import { Placeholder } from './atomsStoryHelpers';

export default { title: 'Components/Badge', component: Badge, tags: ['autodocs'] };

export const Primary = {
  args: { ...getMuiDefaultArgs('Badge'), color: 'primary' },
  render: (args) => <Badge {...args}><Placeholder /></Badge>,
};
