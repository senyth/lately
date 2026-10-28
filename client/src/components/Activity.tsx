import { Box, Button, Typography } from "@mui/material";
import type { Activity } from "../types/Activity";

export default function Activity() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
      <Typography sx={{ color: 'primary.main' }}>Laundry</Typography>
      <Typography sx={{ color: 'text.secondary' }}>2 days ago</Typography>
      <Button variant="contained">Did it today</Button>
    </Box>
  );
}