import { Box, Button, Typography } from "@mui/material";
import type { Activity } from "../types/Activity";

interface ActivityCardProps {
  activity: Activity;
  onAdd?: (id: string) => void;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
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
      id={activity.id}
      >
      <div>
        <Typography sx={{ color: 'primary.main' }}>{activity.name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{activity.date}</Typography>
      </div>
      <Button variant="contained">Did it today</Button>
    </Box>
  );
}