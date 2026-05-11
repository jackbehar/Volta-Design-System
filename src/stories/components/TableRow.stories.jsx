import React from 'react';
import { TableCell, TableRow } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/TableRow', component: TableRow, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('TableRow'),
  render: (args) => (
    <TableRow {...args}>
      <TableCell>Design System</TableCell>
      <TableCell>Active</TableCell>
      <TableCell align="right">72%</TableCell>
    </TableRow>
  ),
};
