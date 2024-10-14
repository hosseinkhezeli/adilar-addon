import React from 'react';
import { Section } from '@/app/components/Section';
import { Stack, Typography } from '@mui/material';

const InfoSection = () => {
  const data = [
    {
      label: 'شماره موبایل',
      value: '۰۹۱۲۱۱۱۱۱۱۱',
    },
    {
      label: 'کد ملی',
      value: '۱۲۳۴۵۶۷۸۹۰',
    },
    {
      label: 'تاریخ تولد',
      value: '۱۳۷۱/۰۴/۰۶',
    },
  ];

  return (
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
        سیما اشرفی
      </Typography>
      <Stack gap={4}>
        {data.map((item) => (
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
  );
};

export { InfoSection };
