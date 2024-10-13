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
import { MuiMenu } from '@/theme/component/Menu/MuiMenu';
import { MuiMenuItem } from '@/theme/component/Menu/MuiMenuItem';
import { MuiIconButton } from '@/theme/component/Button/MuiIconButton';
import { MuiStepper } from '@/theme/component/Stepper/MuiStepper';
import { MuiStep } from '@/theme/component/Stepper/MuiStep';
import { MuiStepLabel } from '@/theme/component/Stepper/MuiStepLabel';
import { MuiStepConnector } from '@/theme/component/Stepper/MuiStepConnector';
import { MuiStepIcon } from '@/theme/component/Stepper/MuiStepIcon';
import { MuiRadio } from '@/theme/component/Radio/MuiRadio';
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
      MuiMenu,
      MuiMenuItem,
      MuiIconButton,
      MuiStepper,
      MuiStep,
      MuiStepLabel,
      MuiStepConnector,
      MuiStepIcon,
      MuiRadio,
    },
  });

export default customTheme;
