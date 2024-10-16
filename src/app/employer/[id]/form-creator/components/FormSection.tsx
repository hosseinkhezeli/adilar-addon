'use client';
import React from 'react';
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import { SectionComponent } from '@/app/employer/[id]/form-creator/components/SectionComponent';
import { TTypeData } from '@/app/employer/[id]/form-creator/type';
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
        bgcolor="background.3"
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
          mx: 4,
        }}
      >
        ثبت
      </Button>
    </Stack>
  );
};

export { FormSection };
