import type { PaletteMode } from '@mui/material';
import { THEME_STORAGE_KEY } from '../../constants/theme.constants';

export function saveMode(mode: PaletteMode) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    return null;
  }
}

export function getSavedMode(): PaletteMode | null {
  try {
    const savedMode = localStorage.getItem(THEME_STORAGE_KEY);
    return savedMode === 'light' || savedMode === 'dark' ? savedMode : null;
  } catch {
    return null;
  }
}

export function getSystemMode(): PaletteMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getInitialMode(): PaletteMode {
  return getSavedMode() ?? getSystemMode();
}
