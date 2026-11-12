import type { Activity } from '../types/Activity';
import ActivityCard from '../components/ActivityCard';
import { useActivities } from '../hooks/useActivities';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

function displayList(activities: Activity[]) {
  if (activities.length === 0) {
    return (
      <Typography sx={{ color: 'text.secondary', py: 3 }}>
        No activities yet.
      </Typography>
    );
  }

  return (
    <>
      <h2>When did I last...?</h2>
      <section>
        {activities.map((activity: Activity) => (
          <ActivityCard activity={activity} />
        ))}
      </section>
    </>
  );
}
export default function ActivityList() {
  const { data: activities, isPending, isError, refetch } = useActivities();

  if (isPending) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', py: 6 }}>
        <CircularProgress aria-label="Loading categories" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={() => refetch()}>
            Retry
          </Button>
        }
      >
        Could not load activities.
      </Alert>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>When did I last...?</h2>
        {/* <AddCategoryButton /> */}
      </Box>
      {displayList(activities)}
    </>
  );
}
