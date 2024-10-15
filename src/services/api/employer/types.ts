export type TIntroductionDto = {
  advertisementProcessId: string;
};

export type TIntroductionResponse = {
  token: string;
};

export interface IGetResumeDataProps {
  id: string | number;
}
