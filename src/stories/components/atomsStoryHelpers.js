import React from 'react';

export const icon = (name, color = '#6B7280', size = 16) => (
  <img
    alt={name}
    src={`https://api.iconify.design/mdi/${name}.svg?color=${encodeURIComponent(color)}`}
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

export const Placeholder = () => (
  <span style={{ display: 'inline-block', width: 24, height: 24, background: '#E5E7EB', borderRadius: 4 }} />
);
