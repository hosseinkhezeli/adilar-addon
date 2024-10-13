'use client';

//@3rd-party
import { enqueueSnackbar } from 'notistack';
//________________________________________________________________

//@Hooks
import { useSubmitIntroduction } from '@/services/api/employer/hooks';
//________________________________________________________________

export function useIntroduction() {
  //Dependencies
  const { mutate: submitIntroduction, isPending } = useSubmitIntroduction();

  //Handlers
  const handleSubmit = () => {
    submitIntroduction(
      { advertisementProcessId: 'advertisementProcessId' },
      {
        onSuccess: () => {
          enqueueSnackbar('فرم با موفقیت ثبت شد', { variant: 'success' });
        },
        onError: () => {
          enqueueSnackbar('مشکلی نامشخص رخ داده است', { variant: 'error' });
        },
      }
    );
  };

  return { isSubmitting: isPending, handleSubmit };
}
