export interface IGetPositionListProps {
  pageParam: string | number;
}

export interface IGetPositionListResponse {
  advertisements: IAdvertisement[];
}

export interface IAdvertisement {
  id: string;
  divarPostToken: string;
  title: string;
  companyName: string;
  submissionsCount: number;
  unreadSubmissionsCount: number;
  createdAt: string | Date;
  lastSubmissionDateTime: string | Date | null;
}

export interface IGetApplicantListProps {
  pageNumber: string | number;
  state: string;
  advertisementId: string;
}

export interface IGetApplicantListResponse {
  submissions: ISubmission[];
  submissionsByStateResult: ISubmissionsByStateResult[];
}

export interface ISubmissionsByStateResult {
  state: string;
  count: number;
}

export interface ISubmission {
  id: string;
  firstName: string;
  lastName: string;
  submissionDateTime: Date | string;
  isReviewed: boolean;
}
