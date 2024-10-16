import { IFormField } from '@/types/common-types';

export type TIntroductionDto = {
  advertisementProcessId: string;
};

export type TIntroductionRes = {
  token: string;
};

export interface IGetResumeDataProps {
  id: string | number;
}

export interface IGetApplicantListProps {
  pageParam: string | number;
}

export interface IGetPositionListProps {
  pageParam: string | number;
}

export type TSubmitBasicInfoBody = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  companySlug: string;
};

export type TFormFieldsRes = IFormField[];

export type TAdFormDto = {
  isResumeUploadingRequired: boolean;
  name: string;
  addFormFieldsDto: [
    {
      isRequired: boolean;
      priority: number;
      fieldId: string;
    },
  ];
};

export type TSubmitAdFormParams = {
  body: TAdFormDto;
};
