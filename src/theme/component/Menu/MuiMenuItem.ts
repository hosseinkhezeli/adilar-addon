import { Components, Theme } from '@mui/material/styles';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  defaultProps: { dense: true },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography['body3'],
      '&.Mui-selected': {
        backgroundColor: theme.palette.secondary['1'] + '50 !important',
      },
    }),
  },
};
