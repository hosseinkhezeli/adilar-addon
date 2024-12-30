'use client';
//@3rd Party
import React from 'react';
import Image from 'next/image';
//_______________________________________________________________

//@Mui
import { Box, Button, Stack, Typography, styled } from '@mui/material';
//_______________________________________________________________

//@Hooks & Components
import CountdownTimer from '@/app/components/CountdownTimer';
//_______________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/payment-successful.svg';
import SvgUnSuccess from '@/assets/images/payment-unsuccessful.svg';
//_______________________________________________________________

//@Types
type TSuccessState = {
  trackingCode: null | string;
  onClick: () => void;
  isLoading: boolean;
};
type TUnSuccessState = {
  trackingCode: null | string;
  onClickReturn: () => void;
  onClickExit: () => void;
  isLoading: boolean;
};

export const SuccessState = ({
  trackingCode,
  onClick,
  isLoading,
}: TSuccessState) => {
  return (
    <>
      <Image
        src={SvgSuccess}
        alt="success"
        width={172}
        height={155}
        style={{ margin: '0 auto', width: '100%' }}
      />
      <Title>تراکنش با موفقیت انجام شد</Title>
      <Description>کد پیگیری : {trackingCode}</Description>
      <BottomSection>
        <CountdownTimer onTimeUp={onClick} title={<>تا رفتن به فرم ساز</>} />
        <ActionSection>
          <Button
            variant="contained"
            fullWidth
            onClick={onClick}
            isLoading={isLoading}
          >
            برو به فرم ساز آدیلار
          </Button>
        </ActionSection>
      </BottomSection>
    </>
  );
};

export const UnSuccessState = ({
  onClickExit,
  onClickReturn,
  trackingCode,
  isLoading,
}: TUnSuccessState) => {
  return (
    <>
      <Image
        src={SvgUnSuccess}
        alt="success"
        width={172}
        height={155}
        style={{ margin: '0 auto', width: '100%' }}
      />
      <Title sx={{ color: 'error.main' }}>تراکنش ناموفق بود</Title>
      <Description>کد پیگیری : {trackingCode}</Description>

      <BottomSection>
        <CountdownTimer
          onTimeUp={onClickReturn}
          title={<>تا رفتن به پرداخت مجدد</>}
        />
        <ActionSection>
          <Button
            variant="contained"
            fullWidth
            onClick={onClickReturn}
            isLoading={isLoading}
          >
            پرداخت مجدد
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClickExit}
            isLoading={isLoading}
          >
            انصراف
          </Button>
        </ActionSection>
      </BottomSection>
    </>
  );
};

const ActionSection = styled(Box)(() => ({
  display: 'flex',
  gap: 8,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body3.medium'].fontSize,
  fontWeight: theme?.typography['body3.medium'].fontWeight,
  color: theme?.palette.success.main,
  textAlign: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['caption1'].fontSize,
  fontWeight: theme?.typography['caption1'].fontWeight,
  color: theme.palette.text[12],
  textAlign: 'center',
}));

const BottomSection = styled(Stack)(() => ({
  position: 'fixed',
  maxWidth: 528,
  width: '95%',
  margin: '0 auto',
  bottom: 16,
  gap: 6,
  right: 0,
  left: 0,
  transform: 'translateX(50% ,50%)',
}));
