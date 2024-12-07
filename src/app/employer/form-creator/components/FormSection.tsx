'use client';
import React from 'react';
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { SectionComponent } from '@/app/employer/form-creator/components/SectionComponent';
import { TTypeData } from '@/app/employer/form-creator/type';
import { useFormSection } from '../hooks/useFormSection';
import { ResumeItemComponent } from './ResumeItemComponent';
import SvgAdd from 'ideep-design-system-2/icons/Add';
import SvgCloseCircle from 'ideep-design-system-2/icons/CloseCircle';

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
    isNavigating,
    handleNavigateToDivar,
    adError,
  } = useFormSection();

  return (
    <Stack
      component="form"
      bgcolor="background.3"
      onSubmit={form.handleSubmit(handleSubmitForm)}
      sx={{ height: '100%', width: '100%' }}
    >
      <Box
        py={4}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <Typography
          variant="body3.medium"
          color="text.16"
          width="100%"
          textAlign="center"
        >
          فرم ساز {form.watch('name')}
        </Typography>
        <BackButton disabled={isNavigating} onClick={handleNavigateToDivar}>
          <SvgAdd
            primarycolor={'inherit'}
            style={{
              transform: 'rotate(45deg) scale(1.5)',
              width: 24,
              height: 24,
            }}
          />
        </BackButton>
      </Box>
      <Divider />
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
        {adError?.value ? (
          <Alert
            severity="error"
            icon={<SvgCloseCircle primarycolor="inherit" />}
            sx={{ stroke: ({ palette }) => palette.error.main }}
          >
            {adError.error?.message}
          </Alert>
        ) : (
          <>
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
          </>
        )}
      </Box>

      <Button
        type="submit"
        variant="contained"
        isLoading={isSubmittingAdForm}
        disabled={adError?.value}
        sx={{
          position: 'fixed',
          maxWidth: 528,
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

const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: 16,
  stroke: theme.palette.text.primary,
  path: {
    strokeWidth: 1.6,
  },
  '&.Mui-disabled': {
    stroke: theme.palette.text[9] + '! important',
  },
}));
