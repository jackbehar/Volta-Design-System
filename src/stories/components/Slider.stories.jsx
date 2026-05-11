import React from 'react';
import { Slider } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/Slider', component: Slider, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('Slider'),
  render: (args) => <Slider {...args} style={{ width: 240 }} />,
};
