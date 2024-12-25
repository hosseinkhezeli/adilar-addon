'use client';
//@3rd Party
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { useSearchParams } from 'next/navigation';
//_______________________________________________________________

//@Utility
import { inputListAdapter } from '@/utils/methods';
//_______________________________________________________________

//@Hooks
import {
  useGetAdFormAsCandidate,
  useSubmitAdFormAsCandidate,
  useSubmitResumeFile,
} from '@/services/api/candidate/hooks';
//_______________________________________________________________

//@Types
import { TSubmissionState } from './usePositionSubmission';
import { TSubmissionAnswer } from '@/services/api/candidate/types';
import { IFormField } from '@/types/common-types';
import { ACCEPTED_FILE_TYPES, mockDataForResume } from '@/app/constant';
type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};
interface IForm {
  [key: string]: string | number;
}
//_______________________________________________________________

export function usePositionForm({ handleStateChange }: TProps) {
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const phoneNumber = searchParams.get('phone_number');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const resumeId = useRef<string | null>(null);

  const { mutate: submitAdForm, isPending: isPendingSubmitForm } =
    useSubmitAdFormAsCandidate();
  const { mutate: submitResumeFile, isPending: isPendingSubmitFile } =
    useSubmitResumeFile();
  const {
    data: ad,
    isSuccess,
    isLoading: isLoadingAd,
    error: errorAd,
  } = useGetAdFormAsCandidate({ postToken: postToken });

  const form = useForm({ mode: 'onBlur' });

  const adInputList = useMemo(
    () =>
      ad?.form?.fields?.map((field) => {
        if (field?.field) {
          return {
            ...field?.field,
            isRequired: field.isRequired,
            ...(phoneNumber && field.field.semanticType === 'PhoneNumber'
              ? { defaultValue: phoneNumber, disabled: true }
              : {}),
          };
        }
      }),
    [isSuccess, ad?.form?.fields]
  );

  const { inputList } = inputListAdapter(adInputList as IFormField[]);

  const isResumeRequired = useMemo(
    () => ad?.form?.isResumeUploadingRequired,
    [isSuccess, ad?.form?.isResumeUploadingRequired]
  );

  const fileInput = mockDataForResume.find((field) => field?.type === 'File');

  // Handlers
  const handleGetFileFromUploader = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (
      file &&
      ACCEPTED_FILE_TYPES.find((extension) => file.type === extension)
    ) {
      setResumeFile(file);
    } else {
      enqueueSnackbar({
        variant: 'error',
        message: 'فرمت فایل رزومه پشتیبانی نمی‌شود',
      });
    }
  };
  //____________________________________________________________________

  const handleClearResumeFile = () => {
    setResumeFile(null);
  };
  //____________________________________________________________________

  const submitAdFormFn = (
    submissionAnswers: TSubmissionAnswer[],
    advertisementId: string | undefined,
    resumeFileId?: string | undefined
  ) => {
    const payload = {
      submissionAnswers,
      advertisementId: advertisementId || ' ',
      ...(resumeFileId && { resumeFileId }),
    };

    submitAdForm(payload, {
      onSuccess: () => {
        handleStateChange('done');
        enqueueSnackbar('ثبت رزومه با موفقیت انجام شد', {
          variant: 'success',
          anchorOrigin: { horizontal: 'center', vertical: 'top' },
        });
      },
      onError: () => {
        enqueueSnackbar('در روند ثبت رزومه خطایی رخ داد', {
          variant: 'error',
          anchorOrigin: { horizontal: 'center', vertical: 'top' },
        });
      },
    });
  };
  //____________________________________________________________________

  const submitResumeFileFn = (
    body: FormData,
    submissionAnswers: TSubmissionAnswer[],
    advertisementId: string | undefined
  ) => {
    // In case that form submission goes wrong but file has already been uploaded
    //prevents repetitive api call for upload file
    if (resumeId.current !== null) {
      submitAdFormFn(submissionAnswers, advertisementId, resumeId.current);
    } else {
      submitResumeFile(body, {
        onSuccess: (data) => {
          resumeId.current = data?.id;
          submitAdFormFn(submissionAnswers, advertisementId, data?.id);
        },
        onError: () => {
          enqueueSnackbar('در روند ذخیره فایل رزومه خطایی رخ داد', {
            variant: 'error',
          });
        },
      });
    }
  };
  //____________________________________________________________________

  const handleSubmit = (data: IForm) => {
    if (form.formState.errors) {
      const errArr = Object.values(form.formState.errors);
      errArr.map((err) =>
        enqueueSnackbar({ variant: 'error', message: err?.message as string })
      );
    }
    const formData = new FormData();
    formData.append('File', resumeFile as Blob);

    const fieldIds = Object.keys(data);
    const fieldTypeMap = inputList?.reduce(
      (acc, field) => {
        acc[field?.name as string] = field?.type as string;
        return acc;
      },
      {} as Record<string, string>
    );

    const submissionAnswers: TSubmissionAnswer[] = fieldIds
      ?.filter((field) => data[field])
      ?.map((fieldId) => {
        const fieldType = fieldTypeMap?.[fieldId];
        const fieldValue = data[fieldId];
        return {
          fieldId,
          value:
            fieldType === 'date-picker'
              ? new Date(fieldValue).toISOString()
              : fieldValue,
        };
      })
      .filter((item) => item.value === 0 || Boolean(item.value));

    if (resumeFile) {
      submitResumeFileFn(formData, submissionAnswers, ad?.id);
    } else {
      submitAdFormFn(submissionAnswers, ad?.id);
    }
  };
  //____________________________________________________________________

  useEffect(() => {
    if (form.formState.errors) {
      const errArr = Object.values(form.formState.errors);
      errArr.map((err) =>
        enqueueSnackbar({ variant: 'error', message: err?.message as string })
      );
    }
  }, [Object.values(form.formState.errors)?.length]);

  return {
    form,
    fileInput,
    handleGetFileFromUploader,
    resumeFile,
    handleClearResumeFile,
    handleSubmit,
    isResumeRequired,
    isLoadingAd,
    errorAd,
    isPendingSubmitForm,
    isPendingSubmitFile,
    inputList,
  };
}
