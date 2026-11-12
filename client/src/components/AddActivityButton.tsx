import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { isAxiosError } from 'axios';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCategories } from '../hooks/useCategories';
import { useCreateCategory } from '../hooks/useCreateCategory';
import { useCreateActivity } from '../hooks/useCreateActivity';

const MAX_LENGTH = 80;
const DEFAULT_CATEGORY = 'Uncategorized';

function getErrorMessage(error: unknown) {
  if (isAxiosError<{ message?: string }>(error)) {
    return error.response?.data?.message ?? 'Something went wrong.';
  }
  return 'Something went wrong.';
}

export default function AddActivityButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const { data: categories, isPending: categoriesPending } = useCategories();
  const createCategory = useCreateCategory();
  const createActivity = useCreateActivity();

  const defaultRequested = useRef(false);
  useEffect(() => {
    if (categories && categories.length === 0 && !defaultRequested.current) {
      defaultRequested.current = true;
      createCategory.mutate(DEFAULT_CATEGORY);
    }
  }, [categories, createCategory]);

  const selectedCategoryId = categoryId || categories?.[0]?._id || '';

  const trimmed = name.trim();
  const tooLong = trimmed.length > MAX_LENGTH;
  const settingUpCategories = categoriesPending || categories?.length === 0;

  const handleClose = () => {
    if (createActivity.isPending) return;
    setOpen(false);
    setName('');
    setCategoryId('');
    createActivity.reset();
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    createActivity.mutate(
      { name: trimmed, categoryId: selectedCategoryId },
      { onSuccess: handleClose }
    );
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
        disabled={categoriesPending}
      >
        Add activity
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Add activity</DialogTitle>

        <form onSubmit={handleSubmit} noValidate>
          <DialogContent sx={{ display: 'grid', gap: 2 }}>
            {createActivity.isError && (
              <Alert severity="error">
                {getErrorMessage(createActivity.error)}
              </Alert>
            )}

            <TextField
              label="Activity name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={tooLong}
              helperText={
                tooLong ? `Max ${MAX_LENGTH} characters` : 'e.g. Laundry'
              }
              autoFocus
              required
              fullWidth
            />

            <TextField
              select
              label="Category"
              value={selectedCategoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              disabled={settingUpCategories}
              helperText={
                settingUpCategories
                  ? 'Setting up your categories...'
                  : undefined
              }
              required
              fullWidth
            >
              {categories?.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={handleClose}
              color="secondary"
              disabled={createActivity.isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={
                !trimmed ||
                tooLong ||
                !selectedCategoryId ||
                createActivity.isPending
              }
            >
              {createActivity.isPending ? 'Adding...' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
