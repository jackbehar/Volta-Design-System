import React from 'react';
import { Avatar, Badge, Box, Button, Chip, Grid, IconButton, Paper, TextField, Typography } from '../../index';
import InputAdornment from '../../components/InputAdornment/InputAdornment';

const icon = (name, color = '#6B7280', size = 16) => (
  <img alt={name} src={`https://api.iconify.design/mdi/${name}.svg?color=${encodeURIComponent(color)}`} style={{ width: `${size}px`, height: `${size}px` }} />
);

function TemplatesPage() {
  const [query, setQuery] = React.useState('');
  return (
    <Box style={{ backgroundColor: '#F8FAFC' }}>
      <Box style={{ backgroundColor: '#0A0F1E', padding: '56px 80px 64px' }}>
        <Typography variant="h2" style={{ color: '#F1F5F9', fontSize: '52px', marginBottom: '16px' }}>Templates</Typography>
        <Typography variant="body1" style={{ color: '#94A3B8', fontSize: '20px', maxWidth: '760px' }}>
          Full page layouts built from organisms and molecules.
        </Typography>
      </Box>
      <Box style={{ padding: '40px', display: 'grid', gap: '24px' }}>
        <Typography variant="h4">Dashboard Layouts</Typography>
        <Paper style={{ borderRadius: '16px', overflow: 'hidden' }}>
          <Box style={{ display: 'flex', minHeight: '420px' }}>
            <Box style={{ width: '220px', backgroundColor: '#0F172A', color: '#64748B', padding: '18px' }}>
              <Typography style={{ color: '#FFF', fontWeight: 700, marginBottom: '14px' }}>Volta</Typography>
              <Chip label="Dashboard" size="small" style={{ backgroundColor: '#6366F1', color: '#fff' }} />
            </Box>
            <Box style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '18px' }}>
              <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <Typography variant="h6">Analytics Overview</Typography>
                <Box style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <TextField
                    size="small"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position="start">{icon('magnify', '#6B7280', 14)}</InputAdornment> }}
                  />
                  <IconButton size="small"><Badge badgeContent={4} color="error">{icon('bell-outline')}</Badge></IconButton>
                </Box>
              </Box>
              <Grid container spacing={2}>
                {['Revenue', 'Active Users', 'Conversion', 'Open Tasks'].map((k) => (
                  <Grid key={k} item xs={12} sm={6} md={3}>
                    <Paper style={{ padding: '12px' }}>
                      <Typography variant="caption" style={{ color: '#94A3B8' }}>{k}</Typography>
                      <Typography variant="h6">--</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Paper>
        <Typography variant="h4">Content Page</Typography>
        <Paper style={{ borderRadius: '16px', overflow: 'hidden' }}>
          <Box style={{ display: 'flex', minHeight: '420px' }}>
            <Box style={{ width: '220px', borderRight: '1px solid #F1F5F9', padding: '16px' }}>
              <Typography variant="overline">Getting Started</Typography>
              <Typography variant="body2">Introduction</Typography>
              <Typography variant="body2">Installation</Typography>
            </Box>
            <Box style={{ flex: 1, padding: '24px' }}>
              <Box style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <Chip label="v3.2" size="small" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }} />
                <Chip label="Stable" size="small" style={{ backgroundColor: '#F0FDF4', color: '#15803D' }} />
              </Box>
              <Typography variant="h4" style={{ marginBottom: '10px' }}>Introduction to Volta DS</Typography>
              <Typography variant="body1" style={{ marginBottom: '18px' }}>
                Volta is a production-ready component library built to unify design and engineering.
              </Typography>
              <Button variant="contained">Installation</Button>
            </Box>
            <Box style={{ width: '180px', borderLeft: '1px solid #F1F5F9', padding: '16px' }}>
              <Typography variant="overline">On this page</Typography>
              <Typography variant="body2">Introduction</Typography>
              <Typography variant="body2">What's included</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

const meta = { title: 'Patterns/Templates', tags: ['autodocs'] };
export default meta;
export const FullPage = { render: () => <TemplatesPage /> };
export const DashboardLayouts = { render: () => <TemplatesPage /> };
export const ContentPage = { render: () => <TemplatesPage /> };
