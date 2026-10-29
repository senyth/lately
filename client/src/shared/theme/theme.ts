import { createTheme, type PaletteMode, type ThemeOptions } from '@mui/material/styles';

const bodyFont = '"Nunito Sans Variable", "Helvetica", "Arial", sans-serif';
const headingFont = '"Fraunces Variable", serif';
const headingStyle = { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.01em' };

const sage = {
  light: {
    background: '#F6F7F3',
    surface: '#FFFFFF',
    text: '#1E2420',
    muted: '#6B756D',
    accent: '#4F7A5C',
    accentContrast: '#FFFFFF',
    secondary: '#7FB08C',
    secondaryContrast: '#FFFFFF',
    border: '#E1E5DD',
    // recency: { recent: '#5E8C6A', due: '#C99A3E', overdue: '#B5543C' },
  },
  dark: {
    background: '#121613',
    surface: '#1B211C',
    text: '#E6EBE5',
    muted: '#8F9A91',
    accent: '#7FB08C',
    accentContrast: '#121613',
    secondary: '#4F7A5C',
    secondaryContrast: '#121613',
    border: '#2A322C',
    // recency: { recent: '#7FB08C', due: '#E0B45F', overdue: '#E07A62' },
  },
} as const;

export const getTheme = (mode: PaletteMode) => {
  const t = sage[mode];
 
  const options: ThemeOptions = {
    palette: {
      mode,
      primary: { main: t.accent, contrastText: t.accentContrast },
      secondary: { main: t.secondary, contrastText: t.secondaryContrast },
      background: { default: t.background, paper: t.surface },
      text: { primary: t.text, secondary: t.muted },
      divider: t.border,
    },
 
    shape: { borderRadius: 12 },
 
    typography: {
      fontFamily: bodyFont,
      h1: headingStyle,
      h2: headingStyle,
      h3: headingStyle,
      h4: headingStyle,
      h5: headingStyle,
      h6: headingStyle,
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: t.background, color: t.text },
          'h1, h2, h3, h4, h5, h6': headingStyle,
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiCard: {
        defaultProps: { variant: 'outlined' },
        styleOverrides: { root: { borderColor: t.border } },
      },
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'transparent' },
        styleOverrides: {
          root: { borderBottom: `1px solid ${t.border}`, backgroundImage: 'none' },
        },
      },
      MuiDialog: {
        styleOverrides: { paper: { border: `1px solid ${t.border}` } },
      },
    },
  };
 
  return createTheme(options);
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');