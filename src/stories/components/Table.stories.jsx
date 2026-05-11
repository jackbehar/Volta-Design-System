import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Table', component: Table, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Table'),
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align="right">Progress</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Design System</TableCell>
          <TableCell>Active</TableCell>
          <TableCell align="right">72%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
