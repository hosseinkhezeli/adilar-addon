'use client';
//@3rd Party
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
//_______________________________________________________________

//@Utils
import { inputListAdapter } from '@/utils/methods';
//_______________________________________________________________
//@Types
import { TSubmissionState } from './usePositionSubmission';
import { useGetAdByDivarPostToken } from '@/services/api/employer/hooks';
import { useSearchParams } from 'next/navigation';
import {
  useSubmitAdFormAsCandidate,
  useSubmitResumeFile,
} from '@/services/api/candidate/hooks';
import { TSubmissionAnswer } from '@/services/api/candidate/types';
import { enqueueSnackbar } from 'notistack';

type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};
//_______________________________________________________________
export function usePositionForm({ handleStateChange }: TProps) {
  const postToken = useSearchParams().get('post_token');
  const { mutate: submitAdForm, isPending: isSubmitting } =
    useSubmitAdFormAsCandidate();
  const { mutate: submitResumeFile, isPending: isSubmittingResumeFile } =
    useSubmitResumeFile();
  const { data: ad, isSuccess } = useGetAdByDivarPostToken(postToken);
  const form = useForm();
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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
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

    // Create a mapping of fieldId to its type for quick lookup
    const fieldTypeMap = inputList.reduce(
      (acc, field) => {
        acc[field.name as string] = field.type as string;
        return acc;
      },
      {} as Record<string, string>
    );

    const submissionAnswers = fieldIds?.map((fieldId) => {
      const fieldType = fieldTypeMap[fieldId as keyof typeof fieldTypeMap];
      const fieldValue = data[fieldId];
      return {
        fieldId,
        value:
          fieldType === 'date-picker'
            ? new Date(fieldValue || Date.now())?.toISOString()
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
            advertisementId: ad?.id,
            resumeFileId: data?.id,
          },
          {
            onSuccess: () => {
              handleStateChange('done');
              enqueueSnackbar({
                message: 'ثبت رزومه با موفقیت انجام شد',
                variant: 'success',
              });
            },
            onError: (error) => {
              enqueueSnackbar({
                message: 'ثبت رزومه با موفقیت انجام نشد',
                variant: 'error',
              });
              console.error('Error submitting file:', error);
            },
          }
        );
      },
      onError: (error) => {
        enqueueSnackbar({
          message: 'ثبت رزومه با موفقیت انجام نشد',
          variant: 'error',
        });
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
//Delete this S@#$t
const mockData = [
  {
    id: '670d1e18e12cc7afb89d18a2',
    name: 'نام',
    text: null,
    type: 'Text',
    defaultPriority: 1,
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'FirstName',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.403772Z',
    updatedAt: '2024-10-14T13:35:20.403772Z',
  },
  {
    id: '670d1e18e12cc7afb89d18a3',
    name: 'نام خانوادگی',
    text: null,
    type: 'Text',
    defaultPriority: 2,
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'LastName',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.403884Z',
    updatedAt: '2024-10-14T13:35:20.403884Z',
  },
  {
    id: '670d1e18e12cc7afb89d18a4',
    name: 'شماره موبایل',
    text: null,
    type: 'PhoneNumber',
    defaultPriority: 3,
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'PhoneNumber',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.403885Z',
    updatedAt: '2024-10-14T13:35:20.403885Z',
  },
  {
    id: '670d1e18e12cc7afb89d18a5',
    name: 'ایمیل',
    text: null,
    type: 'Email',
    defaultPriority: 4,
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'Email',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.40389Z',
    updatedAt: '2024-10-14T13:35:20.40389Z',
  },
  {
    id: '670d1e18e12cc7afb89d18a6',
    name: 'تاریخ تولد',
    text: null,
    type: 'Date',
    defaultPriority: 5,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'BirthDate',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.40389Z',
    updatedAt: '2024-10-14T13:35:20.40389Z',
  },
  {
    id: '670d1e18e12cc7afb89d18a7',
    name: 'جنسیت',
    text: null,
    type: 'Select',
    defaultPriority: 6,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'Gender',
    user: null,
    userId: null,
    formFields: null,
    options: [
      {
        id: '670d1e18e12cc7afb89d18a8',
        title: 'مرد',
        value: '1',
        fieldId: '670d1e18e12cc7afb89d18a7',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.403949Z',
        updatedAt: '2024-10-14T13:35:20.40395Z',
      },
      {
        id: '670d1e18e12cc7afb89d18a9',
        title: 'زن',
        value: '2',
        fieldId: '670d1e18e12cc7afb89d18a7',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.404002Z',
        updatedAt: '2024-10-14T13:35:20.404002Z',
      },
    ],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.40389Z',
    updatedAt: '2024-10-14T13:35:20.40389Z',
  },
  {
    id: '670d1e18e12cc7afb89d18aa',
    name: 'کد ملی',
    text: null,
    type: 'NationalCode',
    defaultPriority: 7,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'NationalCode',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.404056Z',
    updatedAt: '2024-10-14T13:35:20.404056Z',
  },
  {
    id: '670d1e18e12cc7afb89d18ab',
    name: 'وضعیت تاهل',
    text: null,
    type: 'Select',
    defaultPriority: 8,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'MaritalStatus',
    user: null,
    userId: null,
    formFields: null,
    options: [
      {
        id: '670d1e18e12cc7afb89d18ac',
        title: 'مجرد',
        value: '1',
        fieldId: '670d1e18e12cc7afb89d18ab',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.404056Z',
        updatedAt: '2024-10-14T13:35:20.404056Z',
      },
      {
        id: '670d1e18e12cc7afb89d18ad',
        title: 'متاهل',
        value: '2',
        fieldId: '670d1e18e12cc7afb89d18ab',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.404056Z',
        updatedAt: '2024-10-14T13:35:20.404056Z',
      },
    ],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.404056Z',
    updatedAt: '2024-10-14T13:35:20.404056Z',
  },
  {
    id: '670d1e18e12cc7afb89d18ae',
    name: 'آدرس',
    text: null,
    type: 'MultiLineText',
    defaultPriority: 9,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'Address',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.404057Z',
    updatedAt: '2024-10-14T13:35:20.404057Z',
  },
  {
    id: '670d1e18e12cc7afb89d18af',
    name: 'وضعیت سربازی',
    text: null,
    type: 'Select',
    defaultPriority: 10,
    isRequiredByDefault: false,
    category: 'Personal',
    semanticType: 'MilitaryServiceStatus',
    user: null,
    userId: null,
    formFields: null,
    options: [
      {
        id: '670d1e18e12cc7afb89d18b0',
        title: 'مشمول',
        value: '1',
        fieldId: '670d1e18e12cc7afb89d18af',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.404057Z',
        updatedAt: '2024-10-14T13:35:20.404057Z',
      },
      {
        id: '670d1e18e12cc7afb89d18b1',
        title: 'پایان خدمت',
        value: '2',
        fieldId: '670d1e18e12cc7afb89d18af',
        isDeleted: false,
        createdAt: '2024-10-14T13:35:20.404058Z',
        updatedAt: '2024-10-14T13:35:20.404058Z',
      },
    ],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.404057Z',
    updatedAt: '2024-10-14T13:35:20.404057Z',
  },
  {
    id: '670d1e18e12cc7afb89d18ae',
    name: 'روزمه',
    text: null,
    type: 'File',
    defaultPriority: 11,
    isRequiredByDefault: true,
    category: 'Personal',
    semanticType: 'Resume',
    user: null,
    userId: null,
    formFields: null,
    options: [],
    isDeleted: false,
    createdAt: '2024-10-14T13:35:20.404057Z',
    updatedAt: '2024-10-14T13:35:20.404057Z',
  },
];