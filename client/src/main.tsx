import { StrictMode, useState } from 'react'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { getTheme } from './shared/theme/theme.ts'
import type { PaletteMode } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function Root() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App 
          mode={mode}
          onToggleMode={() => setMode(m => (m === 'light' ? 'dark' : 'light'))}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);