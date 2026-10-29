import { StrictMode, useState } from 'react'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { getTheme } from './shared/theme/theme.ts'
import type { PaletteMode } from '@mui/material/styles'
import { createRoot } from 'react-dom/client'

export function Root() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App 
        mode={mode}
        onToggleMode={() => setMode(m => (m === 'light' ? 'dark' : 'light'))}
      />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);