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
          fontSize:
            theme.typography['caption2.medium'].fontSize + ' !important',
          stroke: theme.palette.primary.main,
        },
      }),
      label: ({ theme }) => ({
        fontSize: theme.typography['caption2.medium'].fontSize + ' !important',
        ...theme.typography['caption2.medium'],
        '&.Mui-selected': {
          fontSize:
            theme.typography['caption2.medium'].fontSize + ' !important',
        },
      }),
    },
  };
