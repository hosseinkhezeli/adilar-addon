import { AxiosError } from 'axios';

export interface IUserRes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roles: string[];
}

export interface ILoginRes {
  token: string;
  expiration: string;
  user: IUserRes;
}

export interface IViewedTutorialProps {
  viewedAdSubmissionTutorial?: boolean;
  viewedSubmissionTutorial?: boolean;
}

export interface IViewedTutorialResponse {
  errors: AxiosError[];
  succeeded: boolean;
}
