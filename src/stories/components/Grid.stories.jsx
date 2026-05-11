import React from 'react';
import { Grid, Paper, Typography } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Grid', component: Grid, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Grid'),
  render: (args) => (
    <Grid {...args}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 12 }}>
          <Typography>Column A</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 12 }}>
          <Typography>Column B</Typography>
        </Paper>
      </Grid>
    </Grid>
  ),
};
