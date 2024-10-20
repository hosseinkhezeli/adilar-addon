'use client';
//@3rd Party
import Image from 'next/image';
//_______________________________________________________________

//@Mui
import { Button, Stack, Typography, styled } from '@mui/material';
//_______________________________________________________________

//@Hooks
import { useComplete } from '../hooks/useComplete';
//_______________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/payment-successful.svg';
import SvgUnSuccess from '@/assets/images/payment-unsuccessful.svg';
//_______________________________________________________________

//@Types
type TState = {
  trackingCode: number | string;
  onClick: () => void;
};

export function Completed() {
  const { onClick, trackingCode, isSuccess } = useComplete();

  return (
    <Container>
      {isSuccess ? (
        <SuccessState onClick={onClick} trackingCode={trackingCode} />
      ) : (
        <UnSuccessState onClick={onClick} trackingCode={trackingCode} />
      )}
    </Container>
  );
}

const SuccessState = ({ trackingCode, onClick }: TState) => {
  return (
    <>
      <Title>رزومه شما با موفقیت ارسال شد</Title>
      <Description>کد پیگیری : {trackingCode}</Description>
      <Image
        src={SvgSuccess}
        alt="success"
        width={172}
        height={155}
        style={{ margin: '0 auto', width: '100%' }}
      />
      <Button
        variant="outlined"
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
        onClick={onClick}
      >
        برو به فرم ساز آدیلار
      </Button>
    </>
  );
};

const UnSuccessState = ({ onClick, trackingCode }: TState) => {
  return (
    <>
      <Title sx={{ color: 'error.main' }}>تراکنش ناموفق بود</Title>
      <Description>کد پیگیری : {trackingCode}</Description>
      <Image
        src={SvgUnSuccess}
        alt="success"
        width={172}
        height={155}
        style={{ margin: '0 auto', width: '100%' }}
      />
      <Button
        variant="outlined"
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
        onClick={onClick}
      >
        بازگشت به صفحه پرداخت
      </Button>
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
