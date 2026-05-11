import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Typography,
} from '../../../../index';
import { SectionTitle, icon } from './shared';

export default function CardsContainersSection() {
  return (
    <Box>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Cards & Containers
      </Typography>
      <SectionTitle>Paper / Card Anatomy / Box surfaces</SectionTitle>
      <Paper elevation={0} style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
        <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
          <Paper elevation={1} style={{ padding: '16px', borderRadius: '8px' }}>
            <Typography variant="subtitle2">Paper elevation 1</Typography>
          </Paper>
          <Paper elevation={8} style={{ padding: '16px', borderRadius: '8px' }}>
            <Typography variant="subtitle2">Paper elevation 8</Typography>
          </Paper>
          <Paper variant="outlined" style={{ padding: '16px', borderRadius: '8px' }}>
            <Typography variant="subtitle2">Paper outlined</Typography>
          </Paper>
        </Box>
        <Divider style={{ marginBottom: '20px' }} />
        <Box style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <Card style={{ borderRadius: '12px' }}>
            <CardHeader
              title="Card Title"
              subheader="Card subheader"
              avatar={<Avatar style={{ backgroundColor: '#7C3AED' }}>FA</Avatar>}
              action={<IconButton>{icon('dots-vertical', '#6B7280')}</IconButton>}
            />
            <CardMedia component="img" height="140" image="https://picsum.photos/seed/cardA/600/300" alt="media" />
            <CardContent>
              <Typography variant="body2">Header + media + content + actions structure.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Cancel</Button>
              <Button size="small" variant="contained">Save</Button>
            </CardActions>
          </Card>
          <Card style={{ borderRadius: '12px' }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">CardActionArea</Typography>
                <Typography variant="body2" style={{ color: '#6B7280' }}>
                  Entire card surface is clickable.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Paper>
    </Box>
  );
}
