import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Switch to 'dark' for dark mode
    primary: {
      main: '#4F7A5C', // Custom primary color
      light: '#4F7A5C',
      dark: '#7FB08C',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#F6F7F3',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Nunito Sans Variable", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3': {
          fontFamily: '"Fraunces Variable", serif',
        },
      },
    },
  },
});

export default theme;