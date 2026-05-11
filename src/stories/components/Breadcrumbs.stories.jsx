import React from 'react';
import { Breadcrumbs, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Breadcrumbs', component: Breadcrumbs, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Breadcrumbs'),
  render: (args) => (
    <Breadcrumbs {...args}>
      <Typography color="text.secondary">Foundations</Typography>
      <Typography color="text.secondary">Molecules</Typography>
      <Typography color="text.primary">Search Bar</Typography>
    </Breadcrumbs>
  ),
};
