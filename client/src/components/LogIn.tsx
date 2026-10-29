import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 2,
      }}
    >
      <Paper
        component="main"
        sx={{
          width: '100%',
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
        }}
      >
        <Stack spacing={4} component="form" noValidate>
          <Box>
            <Typography variant="h4" component="h1">
              Lately
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Sign in to continue
            </Typography>
          </Box>

          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            autoFocus
          />

          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />

          <Button type="submit" variant="contained" size="large">
            Sign in
          </Button>

          <Box>
            <Typography sx={{ color: 'text.secondary' }}>
              Don't have an account? <Link href="">Register here</Link>.
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
