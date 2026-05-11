import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '../../index';
import InputAdornment from '../../components/InputAdornment/InputAdornment';

const icon = (name, color = '#6B7280', size = 18) => (
  <img alt={name} src={`https://api.iconify.design/mdi/${name}.svg?color=${encodeURIComponent(color)}`} style={{ width: `${size}px`, height: `${size}px` }} />
);

function OrganismsPage() {
  const [search, setSearch] = React.useState('');
  return (
    <Box style={{ backgroundColor: '#F8FAFC' }}>
      <Box style={{ backgroundColor: '#0A0F1E', padding: '56px 80px 64px' }}>
        <Typography variant="h2" style={{ color: '#F1F5F9', fontSize: '52px', marginBottom: '16px' }}>Organisms</Typography>
        <Typography variant="body1" style={{ color: '#94A3B8', fontSize: '20px', maxWidth: '760px' }}>
          Complex interface sections composed from molecules and atoms.
        </Typography>
      </Box>
      <Box style={{ padding: '40px', display: 'grid', gap: '28px' }}>
        <Paper style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar style={{ backgroundColor: '#6366F1' }}>V</Avatar>
            <Typography variant="h6">Navigation Header</Typography>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TextField
              size="small"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start">{icon('magnify')}</InputAdornment> }}
            />
            <IconButton><Badge badgeContent={2} color="error">{icon('bell-outline')}</Badge></IconButton>
          </Box>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Paper style={{ padding: '18px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>Data Table</Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    ['Design System', 'Active', '72%'],
                    ['API Gateway', 'Active', '91%'],
                    ['Roadmap', 'Draft', '44%'],
                  ].map(([name, status, progress]) => (
                    <TableRow key={name}>
                      <TableCell>{name}</TableCell>
                      <TableCell><Chip size="small" label={status} color={status === 'Draft' ? 'default' : 'success'} /></TableCell>
                      <TableCell align="right">{progress}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper style={{ padding: '18px' }}>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>Actions</Typography>
              <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button variant="contained">Create New</Button>
                <Button variant="outlined">View Reports</Button>
                <Button variant="text">Manage Team</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const meta = { title: 'Patterns/Organisms', tags: ['autodocs'] };
export default meta;
export const FullPage = { render: () => <OrganismsPage /> };
export const DataTablesLists = { render: () => <OrganismsPage /> };
export const NavigationMenus = { render: () => <OrganismsPage /> };
