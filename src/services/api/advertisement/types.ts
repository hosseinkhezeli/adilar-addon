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
