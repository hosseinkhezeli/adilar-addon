'use client';
//@3rd Party
import React, { useMemo, useState } from 'react';
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

type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};
interface IForm {
  [key: string]: string | number;
}
//_______________________________________________________________

export function usePositionForm({ handleStateChange }: TProps) {
  const postToken = useSearchParams().get('post_token');
  const { mutate: submitAdForm } = useSubmitAdFormAsCandidate();
  const { mutate: submitResumeFile } = useSubmitResumeFile();
  const {
    data: ad,
    isSuccess,
    isLoading: isLoadingAd,
    error: errorAd,
  } = useGetAdFormAsCandidate({ postToken: postToken });
  const form = useForm();

  const adInputList = useMemo(
    () =>
      ad?.form?.fields?.map((field) => {
        if (field?.field) {
          return { ...field?.field, isRequired: field.isRequired };
        }
      }),
    [isSuccess, ad?.form?.fields]
  );
  const isResumeRequired = useMemo(
    () => ad?.form?.isResumeUploadingRequired,
    [isSuccess, ad?.form?.isResumeUploadingRequired]
  );
  const { inputList } = inputListAdapter(adInputList as IFormField[]);
  const fileInput = mockData.find((field) => field?.type === 'File');

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Handlers
  const handleGetFileFromUploader = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleClearResumeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = (data: IForm) => {
    const fieldIds = Object.keys(data);
    const fieldTypeMap = inputList?.reduce(
      (acc, field) => {
        acc[field.name as string] = field.type as string;
        return acc;
      },
      {} as Record<string, string>
    );

    const submissionAnswers = fieldIds
      ?.map((fieldId) => {
        const fieldType = fieldTypeMap?.[fieldId];
        const fieldValue = data[fieldId];
        return {
          fieldId,
          value:
            fieldType === 'date-picker'
              ? new Date(fieldValue || Date.now()).toISOString()
              : fieldValue,
        };
      })
      .filter((item) => item.value === 0 || Boolean(item.value));

    const formData = new FormData();
    formData.append('File', resumeFile as Blob);

    submitResumeFile(formData, {
      onSuccess: (data) => {
        submitAdForm(
          {
            submissionAnswers: submissionAnswers as TSubmissionAnswer[],
            advertisementId: ad?.id || ' ',
            resumeFileId: data?.id,
          },
          {
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
          }
        );
      },
      onError: () => {
        enqueueSnackbar('در روند ثبت رزومه خطایی رخ داد', { variant: 'error' });
      },
    });
  };

  return {
    form,
    inputList,
    fileInput,
    handleGetFileFromUploader,
    resumeFile,
    handleClearResumeFile,
    handleSubmit,
    isResumeRequired,
    isLoadingAd,
    errorAd,
  };
}

// TODO:delete this after backend add this to fields as a optional field
const mockData = [
  {
    id: '670d1e18e12cc7afb89d18ae',
    name: 'روزمه',
    type: 'File',
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'Resume',
    createdAt: '2024-10-14T13:35:20.404057Z',
    updatedAt: '2024-10-14T13:35:20.404057Z',
  },
];
