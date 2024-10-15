'use client';
//@3rd Party
import React from 'react';
import { InputListWithUseForm } from 'ideep-design-system-2';
//____________________________________________________

//@MUI
import { Box, BoxProps, Button, styled } from '@mui/material';
//____________________________________________________

//@Hooks
import { useInformationForm } from '../../hooks/useInformationForm';
//____________________________________________________

export function InformationForm() {
  const { form, InformationFormInputList, handleSubmitForm } =
    useInformationForm();
  return (
    <Form component="form" onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputListWithUseForm
        form={form}
        inputList={InformationFormInputList}
        gridContainerProps={{ xs: 12, width: '100% !important' }}
        labelsProps={{ variant: 'body3', margin: '0 !important' }}
        withoutHelperText
        gridItemProps={{
          xs: 12,
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
      >
        ادامه
      </Button>
    </Form>
  );
}

const Form = styled(Box)<BoxProps & { component?: React.ElementType }>(
  ({ theme }) => ({
    minWidth: '100%',
    minHeight: 'calc(100% - 164px)',
    paddingBottom: 14,
    mb: 4,
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    width: '100%',
    height: '100%',
    marginBottom: theme.spacing(4),
  })
);
