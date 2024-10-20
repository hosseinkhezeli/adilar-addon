'use client';
//@3rd Party
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

//@Hooks
import { usePositionForm } from '../hooks/usePositionForm';
import { UploaderButton } from '@/app/components/UploaderButton';
//________________________________________________________________

//@Types
import { TSubmissionState } from '../hooks/usePositionSubmission';
import { SvgLoading } from '@/app/components/Loading';
//________________________________________________________________

type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};

export function PositionForm({ handleStateChange }: TProps) {
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
  } = usePositionForm({ handleStateChange });
  return isLoadingAd || inputList?.length < 0 ? (
    <>
      <SvgLoading />
    </>
  ) : (
    <Container>
      <Form component="form" onSubmit={form.handleSubmit(handleSubmit)}>
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
          disabled={isResumeRequired && !resumeFile}
          sx={{
            position: 'fixed',
            width: 'calc(100% - 32px)',
            margin: '0 auto',
            bottom: 16,
            zIndex: 1000,
          }}
        >
          ادامه
        </Button>
      </Form>
      {fileInput?.id && (
        <Stack sx={{ gap: 4, width: '100%', px: 2 }}>
          <Typography variant="caption1">
            در این بخش فایل رزومه شخصی خود را بارگذاری کنید
            {isResumeRequired && <Typography color="error.main">*</Typography>}
          </Typography>
          <UploaderButton
            onFileChange={handleGetFileFromUploader}
            file={resumeFile}
            onDelete={handleClearResumeFile}
          />
        </Stack>
      )}
    </Container>
  );
}

const Form = styled(Box)<BoxProps & { component?: React.ElementType }>(
  ({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    minWidth: '100%',
    minHeight: 'calc(100% - 164px)',
    justifyContent: 'center',
    alignItems: 'baseline',
  })
);
const Container = styled(Stack)<StackProps>(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  minWidth: '100%',
  minHeight: 'calc(100% - 164px)',
  paddingBottom: theme.spacing(14),
  marginBottom: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'baseline',
  overflowY: 'auto',
  gap: 12,
}));
