import React from 'react';
import { Avatar, AvatarGroup, Badge, Box, Chip, Divider, Paper, Typography } from '../../../../index';
import { SectionTitle, icon } from './shared';

export default function VisualElementsSection() {
  return (
    <Box>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Visual Elements
      </Typography>
      <SectionTitle>Badges / Chips / Avatars / Divider</SectionTitle>
      <Paper elevation={0} style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
        <Box style={{ display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
          <Badge badgeContent={4} color="primary">{icon('bell-outline', '#374151', 28)}</Badge>
          <Badge badgeContent={12} color="error">{icon('email-outline', '#374151', 28)}</Badge>
          <Badge variant="dot" color="success">{icon('account-circle', '#374151', 28)}</Badge>
          <Chip label="Primary" color="primary" />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="With Icon" color="success" icon={icon('check-circle', '#FFFFFF', 16)} />
          <Avatar src="https://picsum.photos/seed/user1/80/80" />
          <Avatar style={{ backgroundColor: '#1976D2' }}>JA</Avatar>
          <AvatarGroup max={4}>
            <Avatar src="https://picsum.photos/seed/u1/80/80" />
            <Avatar src="https://picsum.photos/seed/u2/80/80" />
            <Avatar src="https://picsum.photos/seed/u3/80/80" />
            <Avatar src="https://picsum.photos/seed/u4/80/80" />
            <Avatar src="https://picsum.photos/seed/u5/80/80" />
          </AvatarGroup>
        </Box>
        <Divider style={{ marginBottom: '12px' }} />
        <Divider textAlign="center">
          <Chip label="Centered Divider Text" size="small" />
        </Divider>
      </Paper>
    </Box>
  );
}
