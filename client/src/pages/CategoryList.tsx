import {
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useCategories } from '../hooks/useCategories';
import AddCategoryButton from '../components/AddCategoryButton';
import type { Category } from '../types/Category';

function displayList(categories: Category[]) {
  if (categories.length === 0) {
    return (
      <Typography sx={{ color: 'text.secondary', py: 3 }}>
        No categories yet.
      </Typography>
    );
  }

  return (
    <>
      <h3>{categories.length} categories</h3>
      <List disablePadding>
        {categories.map((category: Category) => (
          <ListItem key={category._id} divider>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default function CategoryList() {
  const { data: categories, isPending, isError, refetch } = useCategories();

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
        Could not load categories.
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
        <h2>List of Categories</h2>
        <AddCategoryButton />
      </Box>
      {displayList(categories)}
    </>
  );
}
