import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/RadioGroup', component: RadioGroup, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('RadioGroup'),
  render: (args) => (
    <RadioGroup {...args}>
      <FormControlLabel value="a" control={<Radio />} label="Option A" />
      <FormControlLabel value="b" control={<Radio />} label="Option B" />
    </RadioGroup>
  ),
};
