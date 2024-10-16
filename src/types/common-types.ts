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
  user: string | null;
  userId: string | null;
  formFields: any | null;
  options: IFieldOption[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
