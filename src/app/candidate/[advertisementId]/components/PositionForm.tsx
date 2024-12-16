'use client';
//@3rd Party
import React from 'react';
import { InputListWithUseForm } from 'ideep-design-system-2';
//________________________________________________________________

//@Mui
import {
  Alert,
  Box,
  BoxProps,
  Button,
  Stack,
  StackProps,
  styled,
} from '@mui/material';
//________________________________________________________________

//@Hooks & Components
import { usePositionForm } from '../hooks/usePositionForm';
import { SvgLoading } from '@/app/components/Loading';
import { FileUploader } from './FileUploader';
//________________________________________________________________

//@Types
import { TSubmissionState } from '../hooks/usePositionSubmission';
import SvgCloseCircle from 'ideep-design-system-2/icons/CloseCircle';
interface PositionFormProps {
  handleStateChange: (state: TSubmissionState) => void;
}

export const PositionForm: React.FC<PositionFormProps> = ({
  handleStateChange,
}) => {
  const {
    form,
    validatedInputList,
    fileInput,
    handleGetFileFromUploader,
    handleClearResumeFile,
    resumeFile,
    handleSubmit,
    isResumeRequired,
    isLoadingAd,
    errorAd,
    isPendingFileSubmission,
    isPendingFormSubmission,
  } = usePositionForm({ handleStateChange });

  if (isLoadingAd) {
    return <LoadingIndicator />;
  }

  if (errorAd?.message) {
    return <ErrorMessage message={errorAd.message} />;
  }

  return (
    <FormContainer component="form" onSubmit={form.handleSubmit(handleSubmit)}>
      <InputListWithUseForm
        form={form}
        inputList={validatedInputList!}
        gridContainerProps={{ xs: 12, margin: '0 -8px' }}
        labelsProps={{ variant: 'body3', margin: '0 !important' }}
        withoutHelperText
        gridItemProps={{ xs: 12 }}
      />
      <SubmitButton
        type="submit"
        disabled={isResumeRequired && !resumeFile}
        isLoading={isPendingFileSubmission || isPendingFormSubmission}
      >
        ادامه
      </SubmitButton>
      {fileInput?.id && (
        <FileUploader
          handleGetFileFromUploader={handleGetFileFromUploader}
          resumeFile={resumeFile}
          handleClearResumeFile={handleClearResumeFile}
          isResumeRequired={Boolean(isResumeRequired)}
        />
      )}
    </FormContainer>
  );
};

// Loading indicator component
const LoadingIndicator: React.FC = () => (
  <Container sx={{ alignItems: 'center', minHeight: 'calc(100vh - 130px)' }}>
    <SvgLoading />
  </Container>
);

// Error message component
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <Container sx={{ alignItems: 'center', minHeight: 'calc(100vh - 130px)' }}>
    <Alert
      severity="error"
      icon={<SvgCloseCircle primarycolor="inherit" />}
      sx={{ stroke: (theme) => theme.palette.error.main }}
    >
      خطایی رخ داد {message}
    </Alert>
  </Container>
);
// Styled components
const FormContainer = styled(Box)<BoxProps & { component?: React.ElementType }>(
  () => ({
    width: '100%',
    height: '100%',
    maxWidth: 560,
    margin: '0 auto',
    minHeight: 'calc(100vh + 32px)',
  })
);

const SubmitButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  maxWidth: 'calc(100% - 21px)',
  margin: '0 auto',
  bottom: 16,
  right: 0,
  left: 0,
  zIndex: 1000,
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% - 28px)',
    maxWidth: 560,
  },
}));

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  maxWidth: 560,
  minHeight: 'calc(100vh + 32px)',
  paddingBottom: theme.spacing(14),
  marginBottom: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'baseline',
  overflowY: 'auto',
  gap: 12,
}));
