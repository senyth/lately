import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useThemeMode } from './ThemeModeContext';

export default function ToggleThemeButton() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <span>
        <IconButton onClick={toggleMode}>
          {mode === 'light' ? (
            <DarkMode sx={{ color: 'primary.contrastText' }} />
          ) : (
            <LightMode sx={{ color: 'primary.contrastText' }} />
          )}
        </IconButton>
      </span>
    </Tooltip>
  );
}
