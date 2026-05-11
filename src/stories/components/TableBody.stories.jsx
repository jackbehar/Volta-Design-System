import React from 'react';
import { TableBody, TableCell, TableRow } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/TableBody', component: TableBody, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('TableBody'),
  render: (args) => (
    <TableBody {...args}>
      <TableRow>
        <TableCell>Design System</TableCell>
        <TableCell>Active</TableCell>
        <TableCell align="right">72%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Roadmap</TableCell>
        <TableCell>Draft</TableCell>
        <TableCell align="right">44%</TableCell>
      </TableRow>
    </TableBody>
  ),
};
