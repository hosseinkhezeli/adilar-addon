import { Components, Theme } from '@mui/material/styles';
import { stepConnectorClasses } from '@mui/material/StepConnector';
export const MuiStepConnector: Components<Theme>['MuiStepConnector'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginTop: 12,
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.primary.main,
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: theme.palette.primary.main,
        },
      },
      [`& .${stepConnectorClasses.disabled}`]: {
        borderColor: theme.palette.grey[4],
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderTopWidth: 1,
        borderRadius: 1,
      },
    }),
  },
};
