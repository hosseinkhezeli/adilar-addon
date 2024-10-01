'use client';
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { InputListWithUseForm } from 'ideep-design-system-2';
import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';
import { useForm } from 'react-hook-form';

export default function Home() {
  const inputList: IUseFormInput[] = [
    {
      label: 'نام',
      name: 'fullName',
      type: 'text',
      gridItemProp: { xs: 12 },
      labelProps: { fontSize: 14, marginBottom: 0 },
    },
    {
      label: 'نام خانوادگی',
      name: 'fullName',
      type: 'text',
      gridItemProp: { xs: 12 },
      labelProps: { fontSize: 14, marginBottom: 0 },
    },
    {
      label: 'ایمیل',
      name: 'fullName',
      type: 'text',
      gridItemProp: { xs: 12 },
      labelProps: { fontSize: 14, marginBottom: 0 },
    },
    {
      label: 'شماره موبایل',
      name: 'fullName',
      type: 'text',
      gridItemProp: { xs: 12 },
      labelProps: { fontSize: 14, marginBottom: 0 },
    },
    {
      label: 'شماره حساب',
      name: 'fullName',
      type: 'text',
      gridItemProp: { xs: 12 },
      labelProps: { fontSize: 14, marginBottom: 0 },
    },
  ];

  const form = useForm();
  return (
    <Stack flexGrow={1} alignItems={'center'}>
      <Typography variant={'body2'} my={6}>
        فرم ساز برنامه نویس فرانت
      </Typography>
      <InputListWithUseForm
        inputList={inputList}
        form={form}
        gridContainerProps={{ xs: 12 }}
      />
      <Button>مشاهده رزومه های دریافتی</Button>
    </Stack>
  );
}
