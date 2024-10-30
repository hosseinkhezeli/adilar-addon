'use client';
//@3rd Party
import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Stack,
  StackProps,
  styled,
  Typography,
} from '@mui/material';
import { InputListWithUseForm } from 'ideep-design-system-2';
//________________________________________________________________

//@Hooks & Components
import { usePositionForm } from '../hooks/usePositionForm';
import { SvgLoading } from '@/app/components/Loading';
import { FileUploader } from './FileUploader';
//________________________________________________________________

//@Types
import { TSubmissionState } from '../hooks/usePositionSubmission';
interface PositionFormProps {
  handleStateChange: (state: TSubmissionState) => void;
}

export const PositionForm: React.FC<PositionFormProps> = ({
  handleStateChange,
}) => {
  const {
    form,
    inputList,
    fileInput,
    handleGetFileFromUploader,
    handleClearResumeFile,
    resumeFile,
    handleSubmit,
    isResumeRequired,
    isLoadingAd,
    errorAd,
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
        inputList={inputList!}
        gridContainerProps={{ xs: 12, margin: '0 -8px' }}
        labelsProps={{ variant: 'body3', margin: '0 !important' }}
        withoutHelperText
        gridItemProps={{ xs: 12 }}
      />
      <SubmitButton type="submit" disabled={isResumeRequired && !resumeFile}>
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
  <Box display="flex" justifyContent="center" alignItems="center">
    <SvgLoading />
  </Box>
);

// Error message component
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <Container>
    <Typography sx={{ textAlign: 'center' }}>خطایی رخ داد {message}</Typography>
  </Container>
);
// Styled components
const FormContainer = styled(Box)<BoxProps & { component?: React.ElementType }>(
  () => ({
    width: '100%',
    height: '100%',
    minHeight: 'calc(100vh + 32px)',
  })
);

const SubmitButton = styled(Button)(() => ({
  position: 'fixed',
  width: 'calc(100% - 32px)',
  margin: '0 auto',
  bottom: 16,
  left: 16,
  zIndex: 1000,
}));

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  minHeight: 'calc(100vh + 32px)',
  paddingBottom: theme.spacing(14),
  marginBottom: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'baseline',
  overflowY: 'auto',
  gap: 12,
}));
