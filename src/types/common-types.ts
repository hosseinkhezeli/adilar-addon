export interface IFieldOption {
  id: string;
  title: string;
  value: string;
  fieldId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IFormField {
  id: string;
  name: string;
  text: string | null;
  type: string; // You may want to create a union type for specific types if known
  defaultPriority: number;
  isRequiredByDefault: boolean;
  category: string;
  semanticType: string;
  user: string | null;
  userId: string | null;
  formFields: any | null; // Adjust this type based on your actual data structure
  options: IFieldOption[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
