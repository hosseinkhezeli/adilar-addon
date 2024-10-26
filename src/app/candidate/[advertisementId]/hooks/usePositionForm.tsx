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
  const form = useForm({ mode: 'all' });

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
        acc[field?.name as string] = field?.type as string;
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

    const submitAdFormFn = (resumeFileId?: string | undefined) =>
      submitAdForm(
        {
          submissionAnswers: submissionAnswers as TSubmissionAnswer[],
          advertisementId: ad?.id || ' ',
          ...(resumeFileId && {
            resumeFileId: resumeFileId,
          }),
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

    const submitResumeFileFn = () =>
      submitResumeFile(formData, {
        onSuccess: (data) => {
          submitAdFormFn(data.id);
        },
        onError: () => {
          enqueueSnackbar('در روند ثبت رزومه خطایی رخ داد', {
            variant: 'error',
          });
        },
      });
    if (resumeFile) {
      submitResumeFileFn();
    } else {
      submitAdFormFn();
    }
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

// const mockAd = [
//   {
//     id: '671cc28fba7835dfc03fc17e',
//     name: 'نام',
//     text: null,
//     type: 'Text',
//     defaultPriority: 1,
//     isRequiredByDefault: true,
//     category: 'Personal',
//     semanticType: 'FirstName',
//     validationRegex: '^([\\u0600-\\u06EF\\s]){1,100}$',
//     validationMessage: 'نام باید حروف فارسی باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886427Z',
//     updatedAt: '2024-10-26T10:21:03.886427Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc17f',
//     name: 'نام خانوادگی',
//     text: null,
//     type: 'Text',
//     defaultPriority: 2,
//     isRequiredByDefault: true,
//     category: 'Personal',
//     semanticType: 'LastName',
//     validationRegex: '^([\\u0600-\\u06EF\\s]){1,100}$',
//     validationMessage: 'نام خانوادگی باید حروف فارسی باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886558Z',
//     updatedAt: '2024-10-26T10:21:03.886558Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc180',
//     name: 'شماره موبایل',
//     text: null,
//     type: 'PhoneNumber',
//     defaultPriority: 3,
//     isRequiredByDefault: true,
//     category: 'Personal',
//     semanticType: 'PhoneNumber',
//     validationRegex:
//       '^(\\+98)?(0)?9\\d{9}$|^(\\+98?[0-9][0-9])?\\d{8}|(0[0-9][0-9])?\\d{8}$',
//     validationMessage: 'شماره موبایل باید 11 رقم باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886558Z',
//     updatedAt: '2024-10-26T10:21:03.886558Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc181',
//     name: 'ایمیل',
//     text: null,
//     type: 'Email',
//     defaultPriority: 4,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'Email',
//     validationRegex:
//       '^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$',
//     validationMessage: 'فرمت ایمیل معتبر نمی باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886558Z',
//     updatedAt: '2024-10-26T10:21:03.886558Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc182',
//     name: 'تاریخ تولد',
//     text: null,
//     type: 'Date',
//     defaultPriority: 5,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'BirthDate',
//     validationRegex: null,
//     validationMessage: null,
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886559Z',
//     updatedAt: '2024-10-26T10:21:03.886559Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc183',
//     name: 'جنسیت',
//     text: null,
//     type: 'Select',
//     defaultPriority: 6,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'Gender',
//     validationRegex: null,
//     validationMessage: null,
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [
//       {
//         id: '671cc28fba7835dfc03fc184',
//         title: 'مرد',
//         value: '1',
//         fieldId: '671cc28fba7835dfc03fc183',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886615Z',
//         updatedAt: '2024-10-26T10:21:03.886615Z',
//       },
//       {
//         id: '671cc28fba7835dfc03fc185',
//         title: 'زن',
//         value: '2',
//         fieldId: '671cc28fba7835dfc03fc183',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886659Z',
//         updatedAt: '2024-10-26T10:21:03.886659Z',
//       },
//     ],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886559Z',
//     updatedAt: '2024-10-26T10:21:03.886559Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc186',
//     name: 'کد ملی',
//     text: null,
//     type: 'NationalCode',
//     defaultPriority: 7,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'NationalCode',
//     validationRegex: '^\\d{10}$',
//     validationMessage: 'کد ملی باید 10 رقم باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886681Z',
//     updatedAt: '2024-10-26T10:21:03.886681Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc187',
//     name: 'وضعیت تاهل',
//     text: null,
//     type: 'Select',
//     defaultPriority: 8,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'MaritalStatus',
//     validationRegex: null,
//     validationMessage: null,
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [
//       {
//         id: '671cc28fba7835dfc03fc188',
//         title: 'مجرد',
//         value: '1',
//         fieldId: '671cc28fba7835dfc03fc187',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886682Z',
//         updatedAt: '2024-10-26T10:21:03.886682Z',
//       },
//       {
//         id: '671cc28fba7835dfc03fc189',
//         title: 'متاهل',
//         value: '2',
//         fieldId: '671cc28fba7835dfc03fc187',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886683Z',
//         updatedAt: '2024-10-26T10:21:03.886683Z',
//       },
//     ],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886682Z',
//     updatedAt: '2024-10-26T10:21:03.886682Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc18a',
//     name: 'آدرس',
//     text: null,
//     type: 'MultiLineText',
//     defaultPriority: 9,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'Address',
//     validationRegex: '^[\\u0600-\\u06FF\\s\\dA-Za-z\\/_-]{2,250}$',
//     validationMessage:
//       'آدرس باید حداقل 2 کاراکتر و حداکثر 250 کاراکتر از نوع فارسی یا انگلیسی باشد',
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886683Z',
//     updatedAt: '2024-10-26T10:21:03.886683Z',
//   },
//   {
//     id: '671cc28fba7835dfc03fc18b',
//     name: 'وضعیت سربازی',
//     text: null,
//     type: 'Select',
//     defaultPriority: 10,
//     isRequiredByDefault: false,
//     category: 'Personal',
//     semanticType: 'MilitaryServiceStatus',
//     validationRegex: null,
//     validationMessage: null,
//     user: null,
//     userId: null,
//     formFields: null,
//     options: [
//       {
//         id: '671cc28fba7835dfc03fc18c',
//         title: 'مشمول',
//         value: '1',
//         fieldId: '671cc28fba7835dfc03fc18b',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886684Z',
//         updatedAt: '2024-10-26T10:21:03.886684Z',
//       },
//       {
//         id: '671cc28fba7835dfc03fc18d',
//         title: 'پایان خدمت',
//         value: '2',
//         fieldId: '671cc28fba7835dfc03fc18b',
//         isDeleted: false,
//         createdAt: '2024-10-26T10:21:03.886684Z',
//         updatedAt: '2024-10-26T10:21:03.886684Z',
//       },
//     ],
//     isDeleted: false,
//     createdAt: '2024-10-26T10:21:03.886683Z',
//     updatedAt: '2024-10-26T10:21:03.886683Z',
//   },
// ];
