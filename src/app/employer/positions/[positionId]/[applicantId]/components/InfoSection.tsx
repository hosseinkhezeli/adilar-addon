//@3rd Party
import React from 'react';
//_________________________________________________________

//@Mui
import { Chip, Stack, Typography } from '@mui/material';
//_________________________________________________________

//@Components & Hooks
import { Section } from '@/app/components/Section';
import { useInfoSection } from '@/app/employer/positions/[positionId]/[applicantId]/hooks/useInfoSection';
//_________________________________________________________

//@Types
import { IGetSubmissionResponse } from '@/services/api/submission/types';
interface IInfoSection {
  data?: IGetSubmissionResponse;
}
//_________________________________________________________

//@Variable
const fullNameArrayField = ['FirstName', 'LastName'];
//_________________________________________________________

const InfoSection = ({ data }: IInfoSection) => {
  const { theme, submissionData } = useInfoSection({
    data,
    fullNameArrayField,
  });

  return (
    <Stack
      sx={{
        pt: 4,
      }}
    >
      <Section
        title={
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body3.medium">اطلاعات شخصی</Typography>
            {data?.state !== 'Pending' && (
              <Chip
                sx={{
                  ...theme.typography['caption1.bold'],
                  backgroundColor:
                    data?.state === 'Accepted' ? 'success.1' : 'error.1',
                  px: 0,
                  color:
                    data?.state === 'Accepted' ? 'success.main' : 'error.main',
                  height: '24px',
                }}
                label={data?.state === 'Accepted' ? 'تایید شده' : 'رد شده'}
              />
            )}
          </Stack>
        }
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
          {`${data?.fields?.find((field) => field.semanticType == fullNameArrayField[0])?.value || '-'} ${data?.fields?.find((field) => field.semanticType == fullNameArrayField[1])?.value || '-'}`}
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
