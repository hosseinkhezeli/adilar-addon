'use client';
//@3rd Party
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
//_______________________________________________________________

//@Utils
import { inputListAdapter } from '@/utils/methods';
//_______________________________________________________________
//@Types
import { TSubmissionState } from './usePositionSubmission';

type TProps = {
  handleStateChange: (state: TSubmissionState) => void;
};
//_______________________________________________________________
export function usePositionForm({ handleStateChange }: TProps) {
  const form = useForm();
  const { inputList } = inputListAdapter(mockData);
  const fileInput = mockData.find((field) => field.type === 'File');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const handleGetFileFromUploader = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      console.log('Selected file:', file);
    }
  };
  const handleClearResumeFile = () => {
    setResumeFile(null);
  };

  const handleSubmit = (data: any) => {
    handleStateChange('done');
  };

  return {
    form,
    inputList,
    fileInput,
    handleGetFileFromUploader,
    resumeFile,
    handleClearResumeFile,
    handleSubmit,
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
