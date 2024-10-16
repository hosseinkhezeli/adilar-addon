export type TIntroductionDto = {
  advertisementProcessId: string;
};

export type TIntroductionResponse = {
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
