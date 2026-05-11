import React from 'react';
import { Paper } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Paper', component: Paper, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Paper'),
  render: (args) => <Paper {...args} style={{ padding: 16 }}>{args.children}</Paper>,
};
