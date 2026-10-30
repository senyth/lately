import { StrictMode, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './shared/theme/theme.ts';
import type { PaletteMode } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.tsx';
import { ThemeModeContext } from './shared/theme/ThemeModeContext.tsx';

export function Root() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleMode = () => {
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  };

  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
          <RouterProvider router={router} />
        </ThemeModeContext.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
