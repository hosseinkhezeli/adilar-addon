import './palette/palette.d.ts';
import { createTheme, PaletteMode } from '@mui/material';
import { darkPalette } from '@/theme/palette/dark/darkPalette';
import { lightPalette } from '@/theme/palette/light/lightPalette';
import { customTheme as designSystemTheme } from 'ideep-design-system-2/theme';

const getDesignTokens = (mode: PaletteMode) => ({
  mode,
  ...(mode === 'light' ? lightPalette : darkPalette),
});

const customTheme = (mode: PaletteMode, isRtl: boolean) =>
  createTheme({
    ...designSystemTheme(mode, isRtl),
    palette: getDesignTokens(mode),
    // typography:designSystemTheme(mode, isRtl).typography as any,
  });

export default customTheme;
