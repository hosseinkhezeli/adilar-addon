import React from 'react';
import { Section } from '@/app/components/Section';
import { Stack, Typography } from '@mui/material';
import { IGetSubmissionResponse } from '@/services/api/submission/types';

interface IInfoSection {
  data?: IGetSubmissionResponse;
}

const fullNameArrayFiled = ['نام', 'نام خانوادگی'];
const InfoSection = ({ data }: IInfoSection) => {
  const submissionData:
    | {
        label: string;
        value: string | number | null;
      }[]
    | undefined = data?.fields
    ?.filter((field) => !fullNameArrayFiled.includes(field.name))
    .map((field) => ({
      label: field?.name || '-',
      value: field?.value || '-',
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
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Section>
    </Stack>
  );
};

export { InfoSection };