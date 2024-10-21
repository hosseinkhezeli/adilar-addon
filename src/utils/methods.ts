import { IFormField } from '@/types/common-types';
import { Theme } from '@mui/material/styles';
import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';

const EMPTY_TEXT = '-';
const CURRENCY_UNIT = 'تومان';
const BACKEND_CURRENCY_UNIT = 'تومان';
export type TColorKeys =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'default'
  | 'transparent'
  | undefined;
export const getColorByOwnerProps = (
  color: TColorKeys,
  theme: Theme,
  alpha?: string | number
): string | undefined => {
  const isColorKey = (color: any): color is keyof Theme['palette'] => {
    return color in theme.palette; // Assuming `theme` is accessible here
  };
  if (color && isColorKey(color)) {
    const paletteColor = theme.palette[color];
    if (typeof paletteColor === 'object' && 'main' in paletteColor) {
      return `${paletteColor.main}${alpha || ''}`;
    }
  }
  return undefined;
};

export const handleEmptyText = (value?: string | undefined) => {
  return value ?? EMPTY_TEXT;
};

export const dateToShamsi = (date: Date | string | undefined | null) => {
  if (!date) return '-';
  const formatDate = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('fa-IR').format(formatDate);
};

export const fullNameDisplay = (firstName?: string, lastName?: string) => {
  return handleEmptyText(
    firstName && lastName ? firstName + ' ' + lastName : undefined
  );
};

export function currency(
  value: number | string | undefined,
  withoutUnit?: boolean
) {
  if (!value) return '-';
  const currencyValue =
    BACKEND_CURRENCY_UNIT === CURRENCY_UNIT
      ? Number(value)
      : Number(value) / 10;
  if (!currencyValue) return '-';
  return (
    new Intl.NumberFormat('fa-IR').format(currencyValue) +
    (withoutUnit ? '' : ' ' + CURRENCY_UNIT)
  );
}

export function typeAdapter(type: string): IUseFormInput['type'] {
  switch (type) {
    case 'Text':
      return 'text';
    case 'PhoneNumber':
      return 'number';
    case 'MultiLineText':
      return 'text-area';
    case 'Date':
      return 'date-picker';
    case 'NationalCode':
      return 'number';
    case 'Select':
      return 'select';
    case 'MultiSelect':
      return 'multi-select';
    case 'Number':
      return 'number';
    case 'Email':
      return 'email';
    default:
      return 'text';
  }
}

export function inputListAdapter(fields: IFormField[] | undefined) {
  // @ts-ignore
  const inputList: IUseFormInput[] = fields
    ?.filter((field) => field.type !== 'File')
    ?.map((field) => {
      return {
        label: field?.name || '-',
        name: field?.id || '-',
        type: typeAdapter(field?.type) || 'text',
        props: {
          ...(field?.type === 'Date' && {
            className: 'rmdp-mobile',
            mobileLabels: {
              CANCEL: 'بستن',
              OK: 'تایید',
            },
          }),
        },
        ...((field?.isRequiredByDefault || field?.isRequired) && {
          rules: { required: true },
        }),
        ...(field?.type === 'PhoneNumber' && {
          rules: { minLength: 11 },
        }),
        ...(field?.type === 'NationalCode' && {
          rules: { minLength: 10 },
        }),
        ...((field?.isRequiredByDefault || field?.isRequired) &&
          field?.type === 'PhoneNumber' && {
            rules: { required: true, minLength: 11 },
          }),
        ...((field?.isRequiredByDefault || field?.isRequired) &&
          field?.type === 'NationalCode' && {
            rules: { required: true, minLength: 10 },
          }),
        options: field?.options?.map((option) => ({
          label: option?.title,
          value: option?.id,
        })),
      };
    });

  return { inputList };
}

export function truncateString(
  str: string | undefined,
  maxLength: number
): string {
  if (maxLength <= 0 || !str) {
    return '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength - 3) + '...';
}

export function clearObject<T extends Record<string, any>>(obj: T): T {
  for (const key in obj) {
    // Check if the value is falsy and not equal to 0
    if (!obj[key] && obj[key] !== 0) {
      delete obj[key];
    }
  }
  return obj;
}

export function generateDayName(date: Date | string | null | undefined) {
  if (!date) return '-';
  let dateValue = '';
  const lastDay = new Date(date).getDate();
  const today = new Date().getDate();
  switch (lastDay) {
    case today:
      dateValue = 'امروز';
      break;
    case today - 1:
      dateValue = 'دیروز';
      break;
    default:
      return dateToShamsi(date);
  }

  return dateValue;
}
