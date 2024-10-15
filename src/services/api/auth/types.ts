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
