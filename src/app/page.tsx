'use client';
import React from 'react';
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { InputListWithUseForm } from 'ideep-design-system-2';
import { IUseFormInput } from 'ideep-design-system-2/components/input-list/type';
import { useForm } from 'react-hook-form';
import { MenuButton } from '@/app/components/MenuButton';
import BottomSheet from '@/app/components/BottomSheet';

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
    // {
    //   label: 'نام',
    //   name: 'fullName',
    //   type: 'text',
    //   gridItemProp: { xs: 12 },
    //   labelProps: { fontSize: 14, marginBottom: 0 },
    // },
    // {
    //   label: 'نام خانوادگی',
    //   name: 'fullName',
    //   type: 'text',
    //   gridItemProp: { xs: 12 },
    //   labelProps: { fontSize: 14, marginBottom: 0 },
    // },
    // {
    //   label: 'ایمیل',
    //   name: 'fullName',
    //   type: 'text',
    //   gridItemProp: { xs: 12 },
    //   labelProps: { fontSize: 14, marginBottom: 0 },
    // },
    // {
    //   label: 'شماره موبایل',
    //   name: 'fullName',
    //   type: 'text',
    //   gridItemProp: { xs: 12 },
    //   labelProps: { fontSize: 14, marginBottom: 0 },
    // },
    // {
    //   label: 'شماره حساب',
    //   name: 'fullName',
    //   type: 'text',
    //   gridItemProp: { xs: 12 },
    //   labelProps: { fontSize: 14, marginBottom: 0 },
    // },
  ];
  const options = ['کد ملی', 'تاریخ تولد', 'نشانی', 'عکس', 'تحصیل', 'رزومه'];

  const ITEM_HEIGHT = 48;
  const form = useForm();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack alignItems={'center'} sx={{ height: '100%', width: '100%' }}>
      <Typography variant={'body2'} my={6}>
        فرم ساز برنامه نویس فرانت
      </Typography>
      <Box width={'100%'} display={'flex'} justifyContent={'center'}>
        <InputListWithUseForm
          inputList={inputList}
          form={form}
          gridContainerProps={{
            xs: 12,
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center',
            rowGap: 0,
            minHeight: 460,
          }}
        />
      </Box>
      {/*<Button>مشاهده رزومه های دریافتی</Button>*/}
      <MenuButton
        isOpen={open}
        onClick={handleClick}
        sx={{ alignSelf: 'start' }}
      >
        افزودن سطر جدید
      </MenuButton>
      <BottomSheet handleClose={handleClose} open={open} title={'سطر جدید'}>
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'نشانی'}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </BottomSheet>
    </Stack>
  );
}
