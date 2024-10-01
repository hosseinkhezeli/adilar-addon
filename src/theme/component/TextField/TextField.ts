import { Components, Theme } from '@mui/material/styles';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      WebkitTextFillColor: ownerState.error
        ? `${theme.palette.error['4']} !important`
        : theme.palette.text.primary,
      ...(ownerState['aria-readonly'] && {
        pointerEvents: 'none',
        WebkitTextFillColor: `${theme.palette.text.disabled} !important`,
        color: `${theme.palette.text.disabled} !important`,
      }),
      //Base Input & Text area components
      '& .MuiInputBase-input': {
        ...theme.typography['body3'],
        // borderRadius: theme.shape.borderRadius / 2,
        // '&:-webkit-autofill': {
        //   WebkitTextFillColor: theme.palette.text.primary,
        //   transition: 'background-color 5000s ease-in-out 0s',
        //   boxShadow: 'unset',
        // },
        // '& textarea': {
        //   paddingTop: 4,
        // },
      },
      // '& .MuiOutlinedInput-input': {
      //   ...(ownerState.rows && {
      //     paddingTop: '8px !important',
      //   }),
      // },

      '& textarea': {
        // fontWeight: 400,
      },
      caretColor: theme.palette.primary.main,
      //Adornment section styles
      '& .MuiInputAdornment-root': {
        stroke: theme.palette.text.primary,
      },
      '& .MuiInputAdornment-positionStart': {
        marginTop:
          ownerState.variant === 'filled' ? '1rem !important' : 'initial',
      },
      '& .MuiFormHelperText-root': {
        color: ownerState.error
          ? theme.palette.error['4']
          : theme.palette.text.primary,
        display: 'block',
        minHeight: '23px',
        position: 'relative !important',
        top: '0px !important',
        width: 'max-content',
      },
    }),
  },
};
