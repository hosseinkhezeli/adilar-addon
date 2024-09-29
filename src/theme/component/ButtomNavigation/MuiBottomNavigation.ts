import { Components, Theme } from '@mui/material/styles';

export const MuiBottomNavigation: Components<Theme>['MuiBottomNavigation'] = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({
      fontFamily: 'inherit',
    }),
  },
};
