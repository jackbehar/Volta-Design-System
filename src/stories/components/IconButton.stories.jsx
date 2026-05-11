import React from 'react';
import { IconButton } from '../../index';
import { getMuiDefaultArgs } from '../muiDefaultArgs';
import { icon } from './atomsStoryHelpers';

export default { title: 'Components/IconButton', component: IconButton, tags: ['autodocs'] };

export const Primary = {
  args: getMuiDefaultArgs('IconButton'),
  render: (args) => <IconButton {...args}>{icon('heart', '#1976D2')}</IconButton>,
};
