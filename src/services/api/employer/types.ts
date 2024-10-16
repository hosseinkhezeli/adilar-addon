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

export type TSubmitBasicInfoBody = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  companySlug: string;
};

export type TFormFieldsRes = IFormField[];
