'use client';
import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { SectionComponent } from '@/app/employer/form-creator/components/SectionComponent';
import { TTypeData } from '@/app/employer/form-creator/type';
import { useFormSection } from '../hooks/useFormSection';
import { ResumeItemComponent } from './ResumeItemComponent';

const FormSection = () => {
  const {
    isLoadingFormFields,
    allData,
    handleAddDynamicField,
    handleRemoveDynamicField,
    handleRequiredField,
    form,
    handleSubmitForm,
    isSubmittingAdForm,
  } = useFormSection();

  return (
    <Stack
      component="form"
      bgcolor="background.3"
      onSubmit={form.handleSubmit(handleSubmitForm)}
      sx={{ height: '100%', width: '100%' }}
    >
      <Typography
        variant="body3.medium"
        color="text.16"
        py={2}
        borderBottom="1px solid"
        borderColor="text.8"
        width="100%"
        textAlign="center"
      >
        فرم ساز {form.watch('name')}
      </Typography>
      <Box
        width={'100%'}
        display={'flex'}
        flexDirection="column"
        flexGrow={1}
        px={4}
        py={6}
        gap={10}
        overflow="auto"
        maxWidth={560}
        mx={'auto'}
      >
        {Object.keys(allData).map((key) => (
          <SectionComponent
            key={key}
            title={allData[key as TTypeData].title}
            data={allData[key as TTypeData]}
            objectKey={key as TTypeData}
            handleRemoveDynamicField={handleRemoveDynamicField}
            handleAddDynamicField={handleAddDynamicField}
            handleRequiredField={handleRequiredField}
            isLoadingFormFields={isLoadingFormFields}
          />
        ))}

        <ResumeItemComponent
          isChecked={form.watch('isResumeUploadingRequired')}
          onChange={() => {
            form.setValue(
              'isResumeUploadingRequired',
              !form.watch('isResumeUploadingRequired')
            );
          }}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        isLoading={isSubmittingAdForm}
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          right: 0,
          left: 0,
          transform: 'translateX(50% ,50%)',
        }}
      >
        ثبت
      </Button>
    </Stack>
  );
};

export { FormSection };
