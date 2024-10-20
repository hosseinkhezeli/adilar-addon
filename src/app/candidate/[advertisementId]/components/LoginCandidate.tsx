'use client';
import React, { useEffect, useState } from 'react';
import BottomSheet from '@/app/components/BottomSheet';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import SvgTickCircle from 'ideep-design-system-2/icons/TickCircle';
import { useLoginCandidate } from '@/app/candidate/[advertisementId]/hooks/useLoginCandidate';

const TIMEOUT_DURATION = 3000;

type TLoginCandidateProps = {
  phoneNumber: string | null;
};

export function LoginCandidate({ phoneNumber }: TLoginCandidateProps) {
  const { handleLogin, isNavigating } = useLoginCandidate();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), TIMEOUT_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e?: object, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <BottomSheet
      handleClose={handleClose}
      open={open}
      title={'ورود به آدیلار'}
      withoutCloseButton
      sx={{
        '.MuiDialog-paper': {
          minHeight: 'calc(100vh - 360px)',
          transform: 'translateY(55%)',
        },
        '.MuiBackdrop-root': {
          backgroundColor: ({ palette }) => palette.grey[16] + '70',
          backdropFilter: 'none',
        },
      }}
    >
      <Container>
        <Section>
          <Typography variant={'caption1.medium'}>
            شما با شماره زیر وارد شده‌اید
          </Typography>
          <PhoneNumberBox>
            <SvgTickCircle primarycolor={'inherit'} />
            <Typography variant={'body3.medium'} color={'primary.main'}>
              {phoneNumber}
            </Typography>
          </PhoneNumberBox>
          <Typography variant={'caption1'} mb={16}>
            ارسال رزومه٬ فقط با همین شماره امکان پذیر خواهد بود
          </Typography>
        </Section>
        <Button
          variant={'contained'}
          fullWidth
          onClick={handleLogin}
          isLoading={isNavigating}
        >
          ادامه
        </Button>
      </Container>
    </BottomSheet>
  );
}

const Container = styled(Stack)(() => ({
  alignItems: 'center',
  padding: '0 16px',
  marginTop: 32,
  width: '100%',
  justifyContent: 'space-between',
}));

const PhoneNumberBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  stroke: theme.palette.primary.main,
  backgroundColor: theme.palette.primary[1],
  width: '100%',
  minHeight: 40,
  borderRadius: 8,
  gap: 8,
}));

const Section = styled(Stack)(() => ({
  alignItems: 'center',
  width: '100%',
  gap: 12,
}));
