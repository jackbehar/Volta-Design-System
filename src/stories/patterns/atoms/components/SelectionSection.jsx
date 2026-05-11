import React from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Switch,
  Typography,
} from '../../../../index';
import { SectionTitle } from './shared';

export default function SelectionSection() {
  const [radioValue, setRadioValue] = React.useState('daily');
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [sliderValue, setSliderValue] = React.useState(40);
  const [ratingValue, setRatingValue] = React.useState(4);

  return (
    <Box>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Selection Controls
      </Typography>
      <SectionTitle>Checkbox / Radio / Switch / Slider / Rating</SectionTitle>
      <Paper elevation={0} style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
          <Box>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '10px', color: '#9CA3AF' }}>
              CHECKBOX GROUP
            </Typography>
            <FormControl>
              <FormLabel>Select your interests</FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Design Systems" />
                <FormControlLabel control={<Checkbox />} label="Front-end Development" />
                <FormControlLabel control={<Checkbox indeterminate />} label="UX Research" />
              </FormGroup>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '10px', color: '#9CA3AF' }}>
              RADIO GROUP
            </Typography>
            <FormControl>
              <FormLabel>Notification Frequency</FormLabel>
              <RadioGroup value={radioValue} onChange={(_, v) => setRadioValue(v)}>
                <FormControlLabel value="realtime" control={<Radio />} label="Real-time" />
                <FormControlLabel value="daily" control={<Radio />} label="Daily digest" />
                <FormControlLabel value="weekly" control={<Radio />} label="Weekly summary" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '10px', color: '#9CA3AF' }}>
              SWITCH
            </Typography>
            <FormControlLabel control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />} label={switchChecked ? 'On' : 'Off'} />
          </Box>
          <Box>
            <Typography variant="caption" style={{ display: 'block', marginBottom: '10px', color: '#9CA3AF' }}>
              SLIDER + RATING
            </Typography>
            <Slider value={sliderValue} onChange={(_, v) => setSliderValue(v)} valueLabelDisplay="auto" />
            <Rating value={ratingValue} onChange={(_, v) => setRatingValue(v)} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
