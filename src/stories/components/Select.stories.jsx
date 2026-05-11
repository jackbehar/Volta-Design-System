import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Select', component: Select, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Select'),
  render: (args) => (
    <FormControl style={{ minWidth: 220 }}>
      <InputLabel>Outlined</InputLabel>
      <Select {...args} label="Outlined">
        <MenuItem value="option1">Option One</MenuItem>
        <MenuItem value="option2">Option Two</MenuItem>
      </Select>
    </FormControl>
  ),
};
