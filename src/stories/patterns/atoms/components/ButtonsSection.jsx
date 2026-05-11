import React from 'react';
import { Box, Button, CircularProgress, Divider, IconButton, Paper, Typography } from '../../../../index';
import { SectionTitle, icon } from './shared';

export default function ButtonsSection() {
  return (
    <Box>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Buttons
      </Typography>
      <SectionTitle>Contained / Outlined / Text</SectionTitle>
      <Paper elevation={0} style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
        <Box style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="outlined" color="primary">Outlined</Button>
          <Button variant="text" color="primary">Text</Button>
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="contained" startIcon={<CircularProgress size={14} color="inherit" />}>Loading</Button>
        </Box>
        <Divider style={{ marginBottom: '16px' }} />
        <Box style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" variant="contained">Small</Button>
          <Button size="medium" variant="contained">Medium</Button>
          <Button size="large" variant="contained">Large</Button>
          <IconButton color="primary">{icon('heart', '#1976D2')}</IconButton>
          <IconButton color="secondary">{icon('star', '#9C27B0')}</IconButton>
          <IconButton color="primary" disabled>{icon('heart', '#BDBDBD')}</IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
