// export type TTypeData = 'baseInfo' | 'education';
export type TTypeData = 'baseInfo';

export type TBottomSheetItem =
  | 'NationalCode'
  | 'Date'
  | 'Text'
  | 'Number'
  | 'Select'
  | 'MultiSelect'
  | 'Email'
  | 'PhoneNumber'
  | 'File'
  | 'MultiLineText';

export type TAllData = {
  [key in TTypeData]: IFormSection;
};

export interface IStaticField {
  title: string;
  id: string;
  type: TBottomSheetItem;
  checked?: boolean;
  placeholder: string;
}

export interface IBottomSheetItem {
  id: string;
  type: TBottomSheetItem;
  title: string;
  checked?: boolean;
}

export interface IDynamicField {
  id: string;
  type: TBottomSheetItem;
  title: string;
  isRequired: boolean;
}

export interface IFormSection {
  title: string;
  bottomSheetItems: IBottomSheetItem[] | [];
  staticFields: IStaticField[] | [];
  dynamicFields: IDynamicField[];
}
