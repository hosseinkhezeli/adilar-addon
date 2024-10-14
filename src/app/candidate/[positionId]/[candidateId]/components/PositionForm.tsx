'use client';
import { Box, Button } from '@mui/material';
import { InputListWithUseForm } from 'ideep-design-system-2';
import { usePositionForm } from '../hooks/usePositionForm';

export function PositionForm() {
  const { form, inputList } = usePositionForm();
  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit((data) => console.log(data))}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        minWidth: '100%',
        minHeight: 'calc(100% - 164px)',
        paddingBottom: 14,
        mb: 4,
        overflowY: 'auto',
        justifyContent: 'center',
        alignItems: 'baseline',
      }}
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
    </Box>
  );
}
