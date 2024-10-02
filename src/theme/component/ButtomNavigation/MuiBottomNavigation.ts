import { Components, Theme } from '@mui/material/styles';

export const MuiBottomNavigation: Components<Theme>['MuiBottomNavigation'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      bottom: 0,
      width: '100%',
      fontFamily: 'inherit',
      borderTop: '1px solid',
      borderColor: theme.palette.divider,
      minHeight: 75,
    }),
  },
};
