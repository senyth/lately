import { Box, CircularProgress } from '@mui/material';

export default function FullPageSpinner() {
  return (
    <Box
      role="status"
      aria-label="Loading"
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
