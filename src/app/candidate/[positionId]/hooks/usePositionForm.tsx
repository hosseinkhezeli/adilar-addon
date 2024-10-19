'use client';
// Third Party Imports
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
import { useSearchParams } from 'next/navigation';

// Utility Imports
import { inputListAdapter } from '@/utils/methods';

// API Hooks
import { useGetAdByDivarPostToken } from '@/services/api/employer/hooks';
import {
  useSubmitAdFormAsCandidate,
  useSubmitResumeFile,
} from '@/services/api/candidate/hooks';

// Type Imports
import { TSubmissionState } from './usePositionSubmission';
import { TSubmissionAnswer } from '@/services/api/candidate/types';

// Type Definitions
type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};

// Main Component
export function usePositionForm({ handleStateChange }: TProps) {
  const postToken = useSearchParams().get('post_token');
  const { mutate: submitAdForm } = useSubmitAdFormAsCandidate();
  const { mutate: submitResumeFile } = useSubmitResumeFile();
  const { data: ad, isSuccess } = useGetAdByDivarPostToken(postToken);
  const form = useForm();

  // Memoized Values
  const adInputList = useMemo(
    () => ad?.form?.fields?.map((field) => field?.field),
    [isSuccess]
  );
  const isResumeRequired = useMemo(
    () => ad?.form?.isResumeUploadingRequired,
    [isSuccess]
  );
  const { inputList } = inputListAdapter(adInputList);
  const fileInput = mockData.find((field) => field.type === 'File');

  // State Management
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

  const handleSubmit = (data: any) => {
    const fieldIds = Object.keys(data);
    const fieldTypeMap = inputList.reduce(
      (acc, field) => {
        acc[field.name as string] = field.type as string;
        return acc;
      },
      {} as Record<string, string>
    );

    const submissionAnswers = fieldIds.map((fieldId) => {
      const fieldType = fieldTypeMap[fieldId];
      const fieldValue = data[fieldId];
      return {
        fieldId,
        value:
          fieldType === 'date-picker'
            ? new Date(fieldValue || Date.now()).toISOString()
            : fieldValue,
      };
    });

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
            onError: (error) => {
              enqueueSnackbar('ثبت رزومه با موفقیت انجام نشد', {
                variant: 'error',
                anchorOrigin: { horizontal: 'center', vertical: 'top' },
              });
              console.error('Error submitting file:', error);
            },
          }
        );
      },
      onError: (error) => {
        enqueueSnackbar('ثبت رزومه با موفقیت انجام نشد', { variant: 'error' });
        console.error('Error submitting file:', error);
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
  };
}

// Mock Data (Consider removing or moving to a separate file if not used)
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
