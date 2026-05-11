import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Divider,
} from '../../../../index';
import InputAdornment from '../../../../components/InputAdornment/InputAdornment';
import { SectionTitle, icon } from './shared';

export default function FormFieldsSection() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('option1');

  return (
    <Box>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Form Fields
      </Typography>
      <SectionTitle>Text Fields + Select</SectionTitle>
      <Paper elevation={0} style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
          <TextField label="Email Address" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ endAdornment: <InputAdornment position="end">{icon('eye-outline', '#6B7280')}</InputAdornment> }}
          />
          <TextField label="Error" error helperText="Invalid format" defaultValue="wrong@" />
          <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
          <TextField label="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
          <TextField label="Search" placeholder="Search..." InputProps={{ startAdornment: <InputAdornment position="start">{icon('magnify', '#9CA3AF')}</InputAdornment> }} />
        </Box>
        <Divider style={{ marginBottom: '20px' }} />
        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <TextField label="Multiline" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message..." />
          <FormControl fullWidth>
            <InputLabel>Outlined</InputLabel>
            <Select label="Outlined" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
              <MenuItem value="option1">Option One</MenuItem>
              <MenuItem value="option2">Option Two</MenuItem>
              <MenuItem value="option3">Option Three</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
}
