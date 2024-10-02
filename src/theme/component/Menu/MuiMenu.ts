import { Components, Theme } from '@mui/material/styles';

export const MuiMenu: Components<Theme>['MuiMenu'] = {
  defaultProps: {
    variant: 'menu',
    transformOrigin: { vertical: 'top', horizontal: 'center' },
    elevation: 10,
    color: 'secondary',
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
    }),
  },
};
