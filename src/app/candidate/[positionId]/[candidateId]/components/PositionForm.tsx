'use client';
//@3rd Party
import { Box, BoxProps, Button, styled } from '@mui/material';
import { InputListWithUseForm } from 'ideep-design-system-2';
//________________________________________________________________

//@Hooks
import { usePositionForm } from '../hooks/usePositionForm';
//________________________________________________________________

export function PositionForm() {
  const { form, inputList } = usePositionForm();
  return (
    <Form
      component="form"
      onSubmit={form.handleSubmit((data) => console.log(data))}
    >
      <InputListWithUseForm
        form={form}
        inputList={inputList}
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
    width: '100%',
    height: '100%',
    display: 'flex',
    minWidth: '100%',
    minHeight: 'calc(100% - 164px)',
    paddingBottom: theme.spacing(14),
    marginBottom: theme.spacing(4),
    overflowY: 'auto',
    justifyContent: 'center',
    alignItems: 'baseline',
  })
);
