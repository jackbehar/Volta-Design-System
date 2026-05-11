import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/FormGroup', component: FormGroup, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('FormGroup'),
  render: (args) => (
    <FormGroup {...args}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Option A" />
      <FormControlLabel control={<Checkbox />} label="Option B" />
    </FormGroup>
  ),
};
