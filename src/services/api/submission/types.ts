export type TCategorySection = 'Personal';
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
  type: string;
  category: TCategorySection;
  semanticType: string;
  priority: number;
}

export interface ISetIsReviewedProps {
  id: number | string;
}

export interface ISetIsReviewedResponse {
  status: boolean;
}
