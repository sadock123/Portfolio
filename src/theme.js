import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { colors } from './CSS/colors';

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: [
      '"Poppins", sans-serif',
      '"Raleway", sans-serif',
      '"Segoe UI"',
      '"Fira Code", monospace',
      '"Roboto"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#1B2430',
      paper: '#282D4F',
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;