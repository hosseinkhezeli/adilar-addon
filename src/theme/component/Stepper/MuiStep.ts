import { Components, Theme } from '@mui/material/styles';

export const MuiStep: Components<Theme>['MuiStep'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      '&.Mui-disabled': {
        color: theme.palette.grey[4],
      },
    }),
  },
};
