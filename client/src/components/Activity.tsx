import { Box, Typography } from "@mui/material";

export default function Activity() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
      }}
      >
      <Typography sx={{ color: 'primary.main' }}>Laundry</Typography>
      <Typography sx={{ color: 'text.secondary' }}>2 days ago</Typography>
    </Box>
  );
}