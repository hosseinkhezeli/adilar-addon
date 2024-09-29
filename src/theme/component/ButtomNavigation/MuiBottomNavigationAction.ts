import { Components, Theme } from '@mui/material/styles';

export const MuiBottomNavigationAction: Components<Theme>['MuiBottomNavigationAction'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: 'inherit',
        transition: '0.2s ease all',
        color: theme.palette.text.primary,
        stroke: theme.palette.text.primary,
        '&.Mui-selected': {
          fontSize: theme.typography.caption1.fontSize + ' !important',
          stroke: theme.palette.primary.main,
        },
      }),
      label: ({ theme }) => ({
        fontSize: theme.typography.caption1.fontSize + ' !important',
        ...theme.typography.caption1,
        '&.Mui-selected': {
          fontSize: theme.typography.caption1.fontSize + ' !important',
        },
      }),
    },
  };
