import type { PaletteMode } from '@mui/material';
import { createContext, useContext } from 'react';

interface ThemeModeValue {
  mode: PaletteMode;
  toggleMode: () => void;
}

export const ThemeModeContext = createContext<ThemeModeValue>({
  mode: 'light',
  toggleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);
