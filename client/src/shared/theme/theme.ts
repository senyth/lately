import { createTheme } from '@mui/material/styles';

const bodyFont = '"Nunito Sans Variable", "Helvetica", "Arial", sans-serif';
const headingFont = '"Fraunces Variable", serif';
 
const headingStyle = { fontFamily: headingFont, fontWeight: 600, };

const theme = createTheme({
  palette: {
    mode: 'light', // Switch to 'dark' for dark mode
    primary: { 
      main: '#4F7A5C', 
      contrastText: '#FFFFFF', 
    },
      background: { 
        default: '#F6F7F3', 
        paper: '#FFFFFF', 
      },
      text: { 
        primary: '#1E2420', 
        secondary: '#6B756D',
       },
      divider: '#E1E5DD',
  },
  typography: {
    fontFamily: bodyFont,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3': headingStyle,
      },
    },
  },
});

export default theme;