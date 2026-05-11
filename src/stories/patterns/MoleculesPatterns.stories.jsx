import React from 'react';
import { Alert, Box, Breadcrumbs, Button, Card, CardContent, Chip, Grid, Paper, TextField, Typography } from '../../index';
import InputAdornment from '../../components/InputAdornment/InputAdornment';

const icon = (name, color = '#6B7280', size = 18) => (
  <img alt={name} src={`https://api.iconify.design/mdi/${name}.svg?color=${encodeURIComponent(color)}`} style={{ width: `${size}px`, height: `${size}px` }} />
);

function MoleculesPage() {
  const [search, setSearch] = React.useState('');
  return (
    <Box style={{ backgroundColor: '#F8FAFC' }}>
      <Box style={{ backgroundColor: '#0A0F1E', padding: '56px 80px 64px' }}>
        <Typography variant="h2" style={{ color: '#F1F5F9', fontSize: '52px', marginBottom: '16px' }}>Molecules</Typography>
        <Typography variant="body1" style={{ color: '#94A3B8', fontSize: '20px', maxWidth: '760px' }}>
          Compositions of atoms that solve focused interface tasks.
        </Typography>
      </Box>
      <Box style={{ padding: '40px', display: 'grid', gap: '28px' }}>
        <Paper style={{ padding: '24px' }}>
          <Typography variant="h5" style={{ marginBottom: '14px' }}>Search Bars</Typography>
          <TextField
            fullWidth
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start">{icon('magnify')}</InputAdornment> }}
          />
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Cards</Typography>
                <Typography variant="body2">Reusable card compositions with heading, body, and actions.</Typography>
                <Box style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                  <Chip label="Status" color="primary" size="small" />
                  <Chip label="Draft" variant="outlined" size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '16px' }}>
              <Typography variant="h6">Alerts & Notifications</Typography>
              <Alert severity="success" style={{ marginTop: '8px' }}>Profile saved successfully.</Alert>
            </Paper>
          </Grid>
        </Grid>
        <Paper style={{ padding: '24px' }}>
          <Typography variant="h5" style={{ marginBottom: '12px' }}>Navigation & Breadcrumbs</Typography>
          <Breadcrumbs>
            <Typography color="text.secondary">Foundations</Typography>
            <Typography color="text.secondary">Molecules</Typography>
            <Typography color="text.primary">Search Bar</Typography>
          </Breadcrumbs>
          <Box style={{ marginTop: '12px' }}>
            <Button variant="contained">Primary Action</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

const meta = { title: 'Patterns/Molecules', tags: ['autodocs'] };
export default meta;
export const FullPage = { render: () => <MoleculesPage /> };
export const SearchBars = { render: () => <MoleculesPage /> };
export const Cards = { render: () => <MoleculesPage /> };
