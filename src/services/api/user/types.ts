import { AxiosError } from 'axios';

export type TGetUserRes = {
  firstName: string;
  lastName: string;
  id: string;
  phoneNumber: string;
  completedAdvertisementPageTutorial: boolean;
  completedSubmissionPageTutorial: boolean;
};

export interface IViewedTutorialProps {
  viewedAdSubmissionTutorial?: boolean;
  viewedSubmissionTutorial?: boolean;
}

export interface IViewedTutorialResponse {
  errors: AxiosError[];
  succeeded: boolean;
}
