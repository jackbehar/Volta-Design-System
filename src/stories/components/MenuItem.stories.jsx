import React from 'react';
import { MenuItem } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';

export default { title: 'Components/MenuItem', component: MenuItem, tags: ['autodocs'] };

export const Primary = {
  args: { ...getMuiDefaultArgs('MenuItem'), selected: true },
};
