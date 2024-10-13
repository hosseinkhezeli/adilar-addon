import React from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';
interface ICustomSwitch {
  label: string;
}

const CustomSwitch = ({ label = '' }: ICustomSwitch) => {
  return (
    <FormControlLabel
      label={<Typography variant="body3">{label}</Typography>}
      sx={{
        gap: 2,
        m: 0,
      }}
      control={
        <Switch
          sx={{
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
          }}
        />
      }
    />
  );
};

export { CustomSwitch };
