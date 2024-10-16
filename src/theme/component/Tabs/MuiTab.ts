import { Components, Theme } from '@mui/material/styles';

export const MuiTab: Components<Theme>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      transition: 'color 0.2s ease',
      whiteSpace: 'nowrap',
      ...theme.typography['caption1.bold'],
    }),
  },
};
