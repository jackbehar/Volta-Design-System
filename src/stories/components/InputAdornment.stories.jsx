import React from 'react';
import { TextField } from '../../index';
import InputAdornment from '../../components/InputAdornment/InputAdornment';
import { getMuiDefaultArgs } from '../muiDefaultArgs';
import { icon } from './atomsStoryHelpers';

export default { title: 'Components/InputAdornment', component: InputAdornment, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('InputAdornment'),
  render: (args) => (
    <TextField
      label="Search"
      placeholder="Search..."
      InputProps={{ startAdornment: <InputAdornment {...args}>{icon('magnify', '#6B7280', 14)}</InputAdornment> }}
    />
  ),
};
