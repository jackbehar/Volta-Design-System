import React from 'react';
import { Checkbox, FormControlLabel } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/FormControlLabel', component: FormControlLabel, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('FormControlLabel'),
  render: (args) => <FormControlLabel {...args} control={<Checkbox defaultChecked />} />,
};
