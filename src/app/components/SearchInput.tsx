'use client';
import React from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SvgSearchNormal from 'ideep-design-system-2/icons/SearchNormal';

export function SearchInput({ sx, ...textFieldProps }: TextFieldProps) {
  return (
    <TextField
      fullWidth
      sx={[style, ...(Array.isArray(sx) ? sx : [sx])]}
      placeholder={'جستوجو'}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ stroke: (theme) => theme.palette.text[11] + ' !important' }}
            >
              <SvgSearchNormal primarycolor={'inherit'} />
            </InputAdornment>
          ),
        },
      }}
      {...textFieldProps}
    />
  );
}
const style: TextFieldProps['sx'] = {};
