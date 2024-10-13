import { Components, Theme } from '@mui/material/styles';

export const MuiStepLabel: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    root: () => ({
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }),
    label: ({ theme }) => ({
      fontSize: 12,
      fontWeight: 400,
      color: theme.palette.grey[4],
    }),
    iconContainer: ({ theme }) => ({
      color: theme.palette.grey[4],
      '.Mui-active .Mui-completed': {
        color: theme.palette.primary.main + ' !important',
      },
    }),
  },
};
