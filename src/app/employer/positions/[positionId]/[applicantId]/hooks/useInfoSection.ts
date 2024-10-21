//@3rd Party
import { useMemo } from 'react';
//_________________________________________________________

//@Mui
import { useTheme } from '@mui/material';
//_________________________________________________________

//@Types
import { TFormFieldType } from '@/types/common-types';
import { IGetSubmissionResponse } from '@/services/api/submission/types';
interface IUseInfoSection {
  data?: IGetSubmissionResponse;
  fullNameArrayField: string[];
}
//_________________________________________________________

export function useInfoSection({ data, fullNameArrayField }: IUseInfoSection) {
  const theme = useTheme();
  const submissionData:
    | {
        label: string;
        value: string | null;
        type: TFormFieldType;
      }[]
    | undefined = useMemo(() => {
    return data?.fields
      ?.filter((field) => !fullNameArrayField.includes(field.semanticType))
      .map((field) => ({
        label: field?.name || '-',
        value: field?.value || '-',
        type: field.type as TFormFieldType,
      }));
  }, [JSON.stringify(data)]);

  return {
    theme,
    submissionData,
  };
}
