import { Components, Theme } from '@mui/material/styles';

export const MuiStepIcon: Components<Theme>['MuiStepIcon'] = {
  styleOverrides: {
    root: () => ({
      color: 'inherit',
    }),
  },
};
