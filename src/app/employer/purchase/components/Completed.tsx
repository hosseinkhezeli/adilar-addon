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
import SvgSuccess from '@/assets/images/success.svg';
//_______________________________________________________________

export function Completed() {
  const {
    onClick,
    trackingCode,
  }: { onClick: () => void; trackingCode: string } = useComplete();

  return (
    <Container>
      <Title>رزومه شما با موفقیت ارسال شد</Title>
      <Description>شماره پیگیری : {trackingCode}</Description>
      <Image
        src={SvgSuccess}
        alt="success"
        width={250}
        height={136}
        style={{ margin: '0 auto', width: '100%' }}
      />
      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
        onClick={onClick}
      >
        برو به فرم ساز
      </Button>
    </Container>
  );
}
const Container = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  gap: 32,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body3.medium'].fontSize,
  fontWeight: theme?.typography['body3.medium'].fontWeight,
  color: theme?.palette.success.main,
  textAlign: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body3'].fontSize,
  fontWeight: theme?.typography['body3'].fontWeight,
  textAlign: 'center',
}));
