export type TGetAdFormAsCandidateParams = {
  adId: string;
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
