import React, { ReactNode } from 'react';
import {
  FormControlLabel,
  FormControlLabelProps,
  Switch,
  SwitchProps,
} from '@mui/material';
interface ICustomSwitch {
  switchProps?: SwitchProps;
  formControlLableProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
  label: ReactNode;
}

const CustomSwitch = ({
  switchProps,
  formControlLableProps,
  label,
}: ICustomSwitch) => {
  return (
    <FormControlLabel
      label={label}
      sx={{
        gap: 2,
        m: 0,
      }}
      {...formControlLableProps}
      control={
        <Switch
          {...switchProps}
          sx={[
            {
              width: 36,
              height: 20,
              overflow: 'hidden',
              m: 0,
              '& .MuiSwitch-switchBase': {
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 'none',
                },
                '&.Mui-checked': {
                  transform: 'translateX(15px)',
                  '& .MuiSwitch-thumb': {
                    backgroundColor: 'common.white',
                    borderColor: 'common.white',
                  },
                },
                '&.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: 'primary.main',
                },
                '& .MuiSwitch-thumb': {
                  width: 16,
                  height: 16,
                  borderColor: 'common.white',
                },
              },
              '& .MuiSwitch-track': {
                height: 20,
                backgroundColor: 'grey.4',
              },
            },
            ...(Array.isArray(switchProps?.sx)
              ? switchProps.sx
              : [switchProps?.sx]),
          ]}
        />
      }
    />
  );
};

export { CustomSwitch };
