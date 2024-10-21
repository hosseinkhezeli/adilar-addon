'use client';
//@3rd Party
import React from 'react';
import Image from 'next/image';
//_______________________________________________________________

//@Mui
import { Box, Button, Stack, Typography, styled } from '@mui/material';
//_______________________________________________________________

//@Hooks & Components
import { useComplete } from '../../hooks/useComplete';
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

export function Completed() {
  const {
    onClickSuccess,
    onClickReturn,
    onClickExit,
    trackingCode,
    isSuccess,
    isNavigating,
  } = useComplete();

  return (
    <Container>
      {isSuccess === 'success' ? (
        <SuccessState
          onClick={onClickSuccess}
          trackingCode={trackingCode}
          isLoading={isNavigating}
        />
      ) : (
        <UnSuccessState
          onClickExit={onClickExit}
          onClickReturn={onClickReturn}
          trackingCode={trackingCode}
          isLoading={isNavigating}
        />
      )}
    </Container>
  );
}

const SuccessState = ({ trackingCode, onClick, isLoading }: TSuccessState) => {
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
      <Stack
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          gap: 6,
        }}
      >
        <CountdownTimer onTimeUp={onClick} title={<>تا رفتن به فرم ساز</>} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={onClick}
            isLoading={isLoading}
          >
            برو به فرم ساز آدیلار
          </Button>
        </Box>
      </Stack>
    </>
  );
};

const UnSuccessState = ({
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

      <Stack
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          gap: 6,
        }}
      >
        <CountdownTimer
          onTimeUp={onClickReturn}
          title={<>تا رفتن به پرداخت مجدد</>}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
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
        </Box>
      </Stack>
    </>
  );
};

const Container = styled(Stack)(() => ({
  width: '100%',
  height: 'calc(100vh - 152px)',
  gap: 16,
  justifyContent: 'center',
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
