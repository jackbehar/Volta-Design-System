import React from 'react';
import { Box, Button, Chip, Paper, Typography } from '../../index';

function tokenBar(label, hex, dark = false) {
  return (
    <Box key={label} style={{ flex: 1, height: '72px', backgroundColor: hex, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '8px 10px' }}>
      <Typography variant="caption" style={{ color: dark ? '#3730A3' : '#fff', fontWeight: 700, fontSize: '10px' }}>{label}</Typography>
      <Typography variant="caption" style={{ color: dark ? '#3730A3' : '#fff', fontSize: '9px' }}>{hex}</Typography>
    </Box>
  );
}

function FoundationsPage() {
  return (
    <Box style={{ backgroundColor: '#F8F9FB' }}>
      <Box style={{ backgroundColor: '#0A0F1E', padding: '56px 80px 64px' }}>
        <Typography variant="h2" style={{ color: '#F1F5F9', fontSize: '52px', marginBottom: '16px' }}>Foundation & Tokens</Typography>
        <Typography variant="body1" style={{ color: '#94A3B8', fontSize: '20px', maxWidth: '760px' }}>
          The core visual language: color, typography, spacing, shape, elevation, and layout scales.
        </Typography>
      </Box>
      <Box style={{ padding: '48px 64px', display: 'grid', gap: '36px' }}>
        <Box>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>Color Palette</Typography>
          <Paper style={{ overflow: 'hidden', borderRadius: '14px', display: 'flex' }}>
            {[
              ['50', '#EEF2FF', true],
              ['100', '#E0E7FF', true],
              ['200', '#C7D2FE', true],
              ['300', '#A5B4FC', true],
              ['400', '#818CF8', false],
              ['500', '#6366F1', false],
              ['600', '#4F46E5', false],
              ['700', '#4338CA', false],
              ['800', '#3730A3', false],
              ['900', '#312E81', false],
            ].map(([label, hex, dark]) => tokenBar(label, hex, dark))}
          </Paper>
        </Box>
        <Box>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>Typography</Typography>
          <Paper style={{ padding: '24px' }}>
            <Typography variant="h1">Display Heading</Typography>
            <Typography variant="h3">Page Heading</Typography>
            <Typography variant="body1">Body text used for main content areas and paragraphs.</Typography>
            <Typography variant="body2">Secondary body text for supporting content and descriptions.</Typography>
            <Typography variant="overline">SECTION LABEL / OVERLINE TEXT</Typography>
          </Paper>
        </Box>
        <Box>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>Shape</Typography>
          <Paper style={{ padding: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            {[0, 4, 8, 12, 16, 24, 9999].map((r) => (
              <Box key={r} style={{ width: '56px', height: '56px', backgroundColor: '#EEF2FF', border: '2px solid #6366F1', borderRadius: `${r}px` }} />
            ))}
          </Paper>
        </Box>
        <Box>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>Space & Elevation</Typography>
          <Paper style={{ padding: '20px' }}>
            <Box style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
              {[4, 8, 16, 24, 32, 48].map((s) => (
                <Box key={s} style={{ width: '20px', height: `${s}px`, backgroundColor: '#DBEAFE', border: '1px dashed #93C5FD' }} />
              ))}
            </Box>
            <Box style={{ display: 'flex', gap: '12px' }}>
              {[0, 1, 2, 4, 8, 12].map((e) => (
                <Paper key={e} elevation={e} style={{ width: '72px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="caption">{e}</Typography>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Box>
        <Box>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>Breakpoints & Z-Index</Typography>
          <Paper style={{ padding: '20px' }}>
            <Box style={{ display: 'grid', gap: '8px', marginBottom: '12px' }}>
              {[
                ['xs', '0px'],
                ['sm', '600px'],
                ['md', '900px'],
                ['lg', '1200px'],
                ['xl', '1536px'],
              ].map(([key, min]) => (
                <Box key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">{key}</Typography>
                  <Typography variant="caption">{min}</Typography>
                </Box>
              ))}
            </Box>
            <Box style={{ display: 'flex', gap: '8px' }}>
              <Chip label="appBar 1100" size="small" />
              <Chip label="drawer 1200" size="small" />
              <Chip label="modal 1300" size="small" />
              <Chip label="tooltip 1500" size="small" />
            </Box>
          </Paper>
        </Box>
        <Box>
          <Button variant="contained">Apply Tokens</Button>
        </Box>
      </Box>
    </Box>
  );
}

const meta = { title: 'Patterns/Foundations', tags: ['autodocs'] };
export default meta;
export const FullPage = { render: () => <FoundationsPage /> };
export const ColorPalette = { render: () => <FoundationsPage /> };
export const TypographyScale = { name: 'Typography', render: () => <FoundationsPage /> };
export const Shape = { render: () => <FoundationsPage /> };
export const Space = { render: () => <FoundationsPage /> };
export const Elevation = { name: 'Shadows / Elevation', render: () => <FoundationsPage /> };
export const Breakpoints = { render: () => <FoundationsPage /> };
export const ZIndex = { name: 'Z-Index', render: () => <FoundationsPage /> };
