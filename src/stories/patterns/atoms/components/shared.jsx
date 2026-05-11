import React from 'react';
import { Box, Typography } from '../../../../index';

export const icon = (name, color = '#6B7280', size = 20, alt = name) => (
  <img
    alt={alt}
    src={`https://api.iconify.design/mdi/${name}.svg?color=${encodeURIComponent(color)}`}
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

export const SectionTitle = ({ children }) => (
  <Box style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
    <Box style={{ width: '4px', height: '24px', backgroundColor: '#6366F1', borderRadius: '2px' }} />
    <Typography variant="overline" style={{ color: '#0A0F1E', fontWeight: 700, letterSpacing: '2px', fontSize: '14px' }}>
      {children}
    </Typography>
  </Box>
);
