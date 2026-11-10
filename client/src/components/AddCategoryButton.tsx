import { useState, type SubmitEvent } from 'react';
import { isAxiosError } from 'axios';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useCreateCategory } from '../hooks/useCreateCategory';

const MAX_LENGTH = 50;

function getErrorMessage(error: unknown) {
  if (isAxiosError<{ message?: string }>(error)) {
    return error.response?.data?.message ?? 'Something went wrong.';
  }
  return 'Something went wrong.';
}

export default function AddCategoryButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const createCategory = useCreateCategory();

  const trimmed = name.trim();
  const tooLong = trimmed.length > MAX_LENGTH;

  const handleClose = () => {
    if (createCategory.isPending) return;
    setOpen(false);
    setName('');
    createCategory.reset();
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCategory.mutate(trimmed, { onSuccess: handleClose });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add category
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Add category</DialogTitle>

        <form onSubmit={handleSubmit} noValidate>
          <DialogContent sx={{ display: 'grid', gap: 2 }}>
            {createCategory.isError && (
              <Alert severity="error">
                {getErrorMessage(createCategory.error)}
              </Alert>
            )}

            <TextField
              label="Category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={tooLong}
              helperText={
                tooLong
                  ? `Max ${MAX_LENGTH} characters`
                  : 'e.g. Household chores'
              }
              autoFocus
              required
              fullWidth
            />
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={handleClose}
              color="secondary"
              disabled={createCategory.isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={!trimmed || tooLong || createCategory.isPending}
            >
              {createCategory.isPending ? 'Adding...' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
