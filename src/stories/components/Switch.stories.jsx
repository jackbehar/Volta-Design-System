import React from 'react';
import { Switch } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Switch', component: Switch, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Switch'),
  render: (args) => <Switch {...args} />,
};
