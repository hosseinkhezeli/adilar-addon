import {
  TCategoryFieldType,
  TFormFieldType,
  TSemanticFieldType,
} from '@/types/common-types';

export interface IGetSubmissionProps {
  id: string | number;
}

export interface IGetSubmissionResponse {
  id: string;
  resumeId: string;
  nextSubmissionId: string | null;
  previousSubmissionId: string | null;
  fields: IField[];
}

export interface IField {
  id: string;
  name: string;
  value: string | null;
  type: TFormFieldType;
  category: TCategoryFieldType;
  semanticType: TSemanticFieldType;
  priority: number;
}

export interface ISetIsReviewedProps {
  id: number | string;
}

export interface ISetIsReviewedResponse {
  status: boolean;
}

export interface ISetApprovalProps {
  id: number | string;
  isApprove: boolean;
}
