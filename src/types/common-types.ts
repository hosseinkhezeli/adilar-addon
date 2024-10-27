import { IAdvertisement } from '@/services/api/advertisement/types';

export interface IFieldOption {
  id: string;
  title: string;
  value: string;
  fieldId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TApplicantState = 'Pending' | 'Accepted' | 'Rejected';

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

export type TSemanticFieldType =
  | 'BirthDate'
  | 'Address'
  | 'FirstName'
  | 'LastName'
  | 'PhoneNumber'
  | 'Email'
  | 'Gender'
  | 'NationalCode'
  | 'MaritalStatus'
  | 'MilitaryServiceStatus';

export type TCategoryFieldType = 'Personal';

export interface IFormField {
  id: string;
  name: string;
  text: string | null;
  type: TFormFieldType;
  validationRegex: string | null | undefined;
  validationMessage: string | null | undefined;
  defaultPriority: number;
  isRequired: boolean;
  isRequiredByDefault: boolean;
  category: string;
  semanticType: TSemanticFieldType;
  user: IUserRes | null;
  userId: string | null;
  formFields: IFormField[] | null;
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
  payments: { id: string }[];
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
  advertisements: IAdvertisement[];
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
  advertisements: IAdvertisement[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TInputFieldRules = {
  required: { value: boolean; message: string } | undefined;
  pattern: { value: RegExp; message: string } | undefined;
  minLength: { value: number; message: string } | undefined;
  maxLength: { value: number; message: string } | undefined;
};
