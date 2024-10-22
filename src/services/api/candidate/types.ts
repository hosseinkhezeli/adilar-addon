import { ICompany, IForm } from '@/types/common-types';

export type TGetAdFormAsCandidateParams = {
  postToken: string | null;
};
export type TSubmitAdFormBody = {
  submissionAnswers: TSubmissionAnswer[];
  advertisementId: string;
  resumeFileId: string;
};

export type TSubmissionAnswer = {
  fieldId: string;
  value?: string;
  numberValue?: number;
  dateTimeValue?: string;
  optionId?: string;
};

export type TResumeFileRes = {
  address: null;
  bucketName: string;
  contentType: string;
  createdAt: string;
  data: null;
  extension: string;
  id: string;
  isDeleted: boolean;
  name: string;
  updatedAt: string;
  userId: string;
};

export interface ISubmitAdFormAsCandidate {
  id: string;
  title: string;
  divarPostToken: string;
  state: string;
  company: ICompany;
  companyId: string;
  form: IForm;
  formId: string;
  payments: { id: string }[];
  submissions: TSubmissionAnswer[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
