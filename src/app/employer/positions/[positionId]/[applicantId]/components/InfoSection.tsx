import React from 'react';
import { Section } from '@/app/components/Section';
import { Stack, Typography } from '@mui/material';
import { IGetSubmissionResponse } from '@/services/api/submission/types';
import { TFormFieldType } from '@/types/common-types';

interface IInfoSection {
  data?: IGetSubmissionResponse;
}

const fullNameArrayFiled = ['FirstName', 'LastName'];
const InfoSection = ({ data }: IInfoSection) => {
  const submissionData:
    | {
        label: string;
        value: string | null;
        type: TFormFieldType;
      }[]
    | undefined = data?.fields
    ?.filter((field) => !fullNameArrayFiled.includes(field.semanticType))
    .map((field) => ({
      label: field?.name || '-',
      value: field?.value || '-',
      type: field.type as TFormFieldType,
    }));

  return (
    <Stack
      sx={{
        pt: 4,
      }}
    >
      <Section
        title="اطلاعات شخصی"
        containerProps={{
          sx: {
            height: 'auto',
          },
        }}
      >
        <Typography
          variant="body2.medium"
          color="primary.main"
          sx={{
            mb: 4,
          }}
        >
          {`${data?.fields?.find((field) => field.name == fullNameArrayFiled[0])?.value || '-'} ${data?.fields?.find((field) => field.name == fullNameArrayFiled[1])?.value || '-'}`}
        </Typography>
        <Stack gap={4}>
          {submissionData?.map((item) => (
            <Stack key={item.label} direction="row" gap={2}>
              <Typography variant="body3" color="text.12">
                {item.label}
              </Typography>
              <Typography variant="body2" color="text.15">
                {item.type == 'Date' && item.value
                  ? new Date(item.value).toLocaleString('fa', {
                      dateStyle: 'short',
                    })
                  : item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Section>
    </Stack>
  );
};

export { InfoSection };
