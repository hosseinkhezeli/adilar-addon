export interface IFieldOption {
  id: string;
  title: string;
  value: string;
  fieldId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TFormFieldType =
  | 'NationalCode'
  | 'Date'
  | 'Text'
  | 'PhoneNumber'
  | 'Email'
  | 'Select'
  | 'MultiLineText'
  | 'MultiSelect'
  | 'File'
  | 'Number';

export interface IFormField {
  id: string;
  name: string;
  text: string | null;
  type: TFormFieldType;
  defaultPriority: number;
  isRequiredByDefault: boolean;
  category: string;
  semanticType: string;
  user: IUserRes | null;
  userId: string | null;
  formFields: any | null;
  options: IFieldOption[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserRes {
  passwordHash: string | null;
  confirmationCode: string | null;
  confirmationCodeExpiration: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  postalCode: string | null;
  state: string;
  phoneNumber: string;
  accessToken: string | null;
  forms: IForm[];
  resumes: File[];
  companies: ICompany[];
  payments: any;
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string | null;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}

export interface ICompany {
  id: string;
  name: string;
  slug: string;
  user: IUserRes;
  userId: string;
  advertisements: any[];
  forms: IForm[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IField {
  id: string;
  isRequired: boolean;
  priority: number;
  field: IFormField;
  fieldId: string;
  formId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IOption {
  id: string;
  title: string;
  value: string;
  fieldId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IForm {
  id: string;
  name: string;
  isResumeUploadingRequired: boolean;
  user: IUserRes;
  userId: string;
  companyId: string;
  fields: IField[];
  advertisements: any[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
