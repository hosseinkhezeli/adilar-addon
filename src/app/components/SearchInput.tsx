'use client';
import React from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SvgSearchNormal from 'ideep-design-system-2/icons/SearchNormal';

interface SearchInputProps extends Omit<TextFieldProps, 'onChange'> {
  onSearch?: (value: string) => void;
}

export function SearchInput({
  sx,
  onSearch,
  ...textFieldProps
}: SearchInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(event.target.value);
  };
  return (
    <TextField
      fullWidth
      sx={[style, ...(Array.isArray(sx) ? sx : [sx])]}
      placeholder={'جستوجو'}
      onChange={handleInputChange}
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
