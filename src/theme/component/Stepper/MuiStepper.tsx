import { Components, Theme } from '@mui/material/styles';

export const MuiStepper: Components<Theme>['MuiStepper'] = {
  styleOverrides: {
    root: () => ({
      alignItems: 'stretch',
      padding: '0 8px',
    }),
  },
};
