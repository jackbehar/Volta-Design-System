import React from 'react';
import { TableCell, TableHead, TableRow } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/TableHead', component: TableHead, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('TableHead'),
  render: (args) => (
    <TableHead {...args}>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Status</TableCell>
        <TableCell align="right">Progress</TableCell>
      </TableRow>
    </TableHead>
  ),
};
