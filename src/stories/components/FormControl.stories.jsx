import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/FormControl', component: FormControl, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('FormControl'),
  render: (args) => (
    <FormControl {...args} fullWidth style={{ maxWidth: 280 }}>
      <InputLabel>Category</InputLabel>
      <Select label="Category" value="option1">
        <MenuItem value="option1">Option One</MenuItem>
      </Select>
    </FormControl>
  ),
};
