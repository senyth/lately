import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState, type SubmitEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = useRegister();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    register.mutate({ name, email, password });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 2,
        bgcolor: 'primary.main',
      }}
    >
      <Paper
        component="main"
        sx={{ width: '100%', maxWidth: 420, p: { xs: 3, sm: 4 } }}
      >
        <Stack spacing={3} component="form" noValidate onSubmit={handleSubmit}>
          <Box>
            <Typography variant="h4" component="h1">
              Create your account
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Start tracking when you last did things
            </Typography>
          </Box>

          <TextField
            label="Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            autoFocus
          />

          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText="At least 8 characters"
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={
              !name.trim() ||
              !email.trim() ||
              password.length < 8 ||
              register.isPending
            }
          >
            {register.isPending ? 'Creating account...' : 'Create account'}
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'text.secondary' }}
          >
            Already have an account?{' '}
            <Link component={RouterLink} to="/login" underline="hover">
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
