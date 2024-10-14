'use client';
//@3rd Party
import React from 'react';
import { InputListWithUseForm } from 'ideep-design-system-2';
//____________________________________________________

//@MUI
import { Box, Button } from '@mui/material';
//____________________________________________________

//@Hooks
import { useInformationForm } from '../../hooks/useInformationForm';
//____________________________________________________

export function InformationForm() {
  const { form, InformationFormInputList, handleSubmitForm } =
    useInformationForm();
  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(handleSubmitForm)}
      sx={{
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
      }}
    >
      <InputListWithUseForm
        form={form}
        inputList={InformationFormInputList}
        gridContainerProps={{ xs: 12, rowGap: 0, width: '100% !important' }}
        labelsProps={{ variant: 'body3' }}
        gridItemProps={{
          xs: 12,
          sx: {
            '& .MuiFormHelperText-root': {
              minHeight: '16px !important',
              height: '16px !important',
              opacity: 0.5,
            },
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          position: 'absolute',
          width: 'calc(100% - 32px)',
          margin: '0 auto',

          bottom: 4,
        }}
      >
        ادامه
      </Button>
    </Box>
  );
}
