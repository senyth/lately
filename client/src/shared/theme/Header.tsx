import { Box, Button, IconButton, Typography, type PaletteMode } from '@mui/material';
import '../../sass/theme.scss';
import { DarkMode, LightMode } from '@mui/icons-material';

interface HeaderProps {
  mode: PaletteMode;
  onToggleMode: () => void;
}

export default function Header({ mode, onToggleMode }: HeaderProps) {
  return (
    <Box component="header" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <div id="header-content">
        <Typography sx={{ color: 'primary.contrastText' }}><h1>Lately</h1></Typography>
        <nav>
          <ul>
            <Button variant="contained" color="secondary">Add</Button>
            <li>Activities</li>
            <li>Categories</li>
            <li>Logout</li>
            <li>
              <IconButton onClick={onToggleMode}>
                {
                  mode === 'light' ? 
                    <DarkMode sx={{ color: 'primary.contrastText' }} /> :
                    <LightMode sx={{ color: 'primary.contrastText' }} />
                }
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
    </Box>
  );
}