'use client';
import { TAllData } from '@/app/employer/form-creator/type';
import { getCookie } from '@/utils/methods';

export const RETURN_URL = decodeURIComponent(getCookie('return-url') || '');

export const DIVAR_PRIMARY_COLOR = '#96403F';

export const baseData: TAllData = {
  baseInfo: {
    title: 'اطلاعات شخصی',
    bottomSheetItems: [],
    staticFields: [],
    dynamicFields: [],
  },
  // education: {
  //   title: 'تحصیلات',
  //   bottomSheetItems: [],
  //   staticFields: [
  //     // {
  //     //   title: 'نام',
  //     //   placeholder: 'اجباری',
  //     // },
  //     // {
  //     //   title: 'نام خانوادگی',
  //     //   placeholder: 'اجباری',
  //     // },
  //   ],
  //   dynamicFields: [],
  // },
};

// TODO:delete this after backend add this to fields as a optional field
export const mockDataForResume = [
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

export const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
];

export const ApplicantCardHeight = 56;

export const PageSize = 10;
