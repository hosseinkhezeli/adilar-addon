'use client';
//@3rd Party
import Image from 'next/image';
//_______________________________________________________________

//@Mui
import { Box, Button, Stack, Typography, styled } from '@mui/material';
//_______________________________________________________________

//@Hooks
import { useComplete } from '../../hooks/useComplete';
//_______________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/payment-successful.svg';
import SvgUnSuccess from '@/assets/images/payment-unsuccessful.svg';
import CountdownTimer from './CountdownTimer';
//_______________________________________________________________

//@Types
type TSuccessState = {
  trackingCode: number | string;
  onClick: () => void;
};
type TUnSuccessState = {
  trackingCode: number | string;
  onClickReturn: () => void;
  onClickExit: () => void;
};

export function Completed() {
  const {
    onClickSuccess,
    onClickReturn,
    onClickExit,
    trackingCode,
    isSuccess,
  } = useComplete();

  return (
    <Container>
      {isSuccess ? (
        <SuccessState onClick={onClickSuccess} trackingCode={trackingCode} />
      ) : (
        <UnSuccessState
          onClickExit={onClickExit}
          onClickReturn={onClickReturn}
          trackingCode={trackingCode}
        />
      )}
    </Container>
  );
}

const SuccessState = ({ trackingCode, onClick }: TSuccessState) => {
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
      <Stack
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          gap: 6,
        }}
      >
        <CountdownTimer onTimeUp={onClick} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Button variant="outlined" fullWidth onClick={onClick}>
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
}: TUnSuccessState) => {
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

      <Stack
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          gap: 6,
        }}
      >
        <CountdownTimer onTimeUp={onClickReturn} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Button variant="contained" fullWidth onClick={onClickReturn}>
            پرداخت مجدد
          </Button>
          <Button variant="outlined" fullWidth onClick={onClickExit}>
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
