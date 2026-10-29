import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  type PaletteMode,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../sass/theme.scss';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

interface HeaderProps {
  mode: PaletteMode;
  onToggleMode: () => void;
}

export default function Header({ mode, onToggleMode }: HeaderProps) {
  const [open, setOpen] = useState<true | false>(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Box
      component="header"
      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
    >
      <div id="header-content">
        <Typography sx={{ color: 'primary.contrastText' }}>
          <h1>Lately</h1>
        </Typography>
        <nav>
          <ul>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Add
            </Button>
            <li>Activities</li>
            <li>Categories</li>
            <li>Logout</li>
            <li>
              <IconButton onClick={onToggleMode}>
                {mode === 'light' ? (
                  <DarkMode sx={{ color: 'primary.contrastText' }} />
                ) : (
                  <LightMode sx={{ color: 'primary.contrastText' }} />
                )}
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Activity</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="name"
              fullWidth
              variant="outlined"
            />
            <FormControl
              variant="outlined"
              sx={{ m: 1, minWidth: 120 }}
              fullWidth
            >
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value=""
              >
                <MenuItem value={10}>Chore</MenuItem>
                <MenuItem value={20}>Household Item</MenuItem>
                <MenuItem value={30}>Personal</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <DatePicker
                label="When did you do it?"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                disableFuture
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
