import React from 'react';
import { Box, Typography } from '../../../../index';

export default function AtomsHero() {
  return (
    <Box style={{ backgroundColor: '#0A0F1E', padding: '56px 80px 64px' }}>
      <Typography variant="h2" style={{ color: '#F1F5F9', fontSize: '52px', marginBottom: '16px' }}>
        Atoms
      </Typography>
      <Typography variant="body1" style={{ color: '#94A3B8', fontSize: '22px', lineHeight: 1.6, maxWidth: '640px' }}>
        The foundational building blocks of the Volta Design System. Each atom is a single, indivisible UI
        element.
      </Typography>
    </Box>
  );
}
