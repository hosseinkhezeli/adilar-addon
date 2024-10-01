import './palette/palette.d.ts';
import { createTheme, PaletteMode } from '@mui/material';
import { darkPalette } from '@/theme/palette/dark/darkPalette';
import { lightPalette } from '@/theme/palette/light/lightPalette';
import { customTheme as designSystemTheme } from 'ideep-design-system-2/theme';
import { typography } from '@/theme/component/Typography';
import { MuiBottomNavigation } from '@/theme/component/ButtomNavigation/MuiBottomNavigation';
import { MuiBottomNavigationAction } from '@/theme/component/ButtomNavigation/MuiBottomNavigationAction';
import { MuiButton } from '@/theme/component/Button/MuiButton';
import { MuiTextField } from '@/theme/component/TextField/TextField';

const getDesignTokens = (mode: PaletteMode) => ({
  mode,
  ...(mode === 'light' ? lightPalette : darkPalette),
});

const customTheme = (mode: PaletteMode, isRtl: boolean) =>
  createTheme({
    ...designSystemTheme(mode, isRtl),
    typography: typography,
    palette: getDesignTokens(mode),
    components: {
      ...designSystemTheme(mode, isRtl).components,
      MuiBottomNavigation,
      MuiBottomNavigationAction,
      MuiButton,
      MuiTextField,
    },
  });

export default customTheme;
