import { Components, Theme } from '@mui/material/styles';

export const MuiRadio: Components<Theme>['MuiRadio'] = {
  defaultProps: {
    color: 'primary',
    size: 'medium',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[4],
    }),
    colorPrimary: ({ theme, ownerState }) => ({
      color: theme.palette.grey[4],
      '.MuiSvgIcon-root': {
        color: 'inherit',
      },
    }),
  },
};
