export type TTypeData = 'baseInfo' | 'education';

export type TBottomSheetItem = 'NationalCode' | 'Date';

export type TAllData = {
  [key in TTypeData]: IFormSection;
};

export interface IStaticField {
  title: string;
  placeholder: string;
}

export interface IBottomSheetItem {
  id: number;
  type: TBottomSheetItem;
  title: string;
  checked?: boolean;
}

export interface IDynamicField {
  id: number;
  type: TBottomSheetItem;
  title: string;
  isRequired: boolean;
}

export interface IFormSection {
  title: string;
  bottomSheetItems: IBottomSheetItem[];
  staticFields: IStaticField[];
  dynamicFields: IDynamicField[];
}
