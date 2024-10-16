import { Components, Theme } from '@mui/material/styles';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({
      '& .MuiTabs-flexContainer': {
        gap: 2,
        height: '100%',
      },
    }),
  },
};
