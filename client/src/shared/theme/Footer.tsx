import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        borderTop: 1,
        borderColor: 'divider',
        color: 'text.secondary',
      }}
    >
      <div className="layout-content">
        <Typography variant="body2">© 2026 Lately</Typography>
      </div>
    </Box>
  );
}
