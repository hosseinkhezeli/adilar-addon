import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    root: {
      borderRadius: 10,
      padding: 0,
      path: {
        strokeWidth: 1,
      },
    },
  },
};
