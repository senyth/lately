import { StrictMode, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './shared/theme/theme.ts';
import type { PaletteMode } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './routes/index.tsx';
import { ThemeModeContext } from './shared/theme/ThemeModeContext.tsx';
import {
  getInitialMode,
  getSavedMode,
  getSystemMode,
  saveMode,
} from './shared/theme/themeMode.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
  },
});

export function Root() {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  const toggleMode = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    saveMode(newMode);
  }, [mode]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onchange = () => {
      if (getSavedMode() === null) setMode(getSystemMode());
    };
    query.addEventListener('change', onchange);
    return () => query.removeEventListener('change', onchange);
  }, []);

  const theme = useMemo(() => getTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeModeContext.Provider value={value}>
            <RouterProvider router={router} />
          </ThemeModeContext.Provider>
        </LocalizationProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
