'use client';
//@3rd Party
import Image from 'next/image';
import React from 'react';
//__________________________________________________________
//@Mui
import { Box, Button, Stack, styled, Typography } from '@mui/material';
//__________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/success.svg';

import CountdownTimer from '@/app/components/CountdownTimer';
import { useSubmissionResult } from '@/app/candidate/[advertisementId]/hooks/useSubmissionResult';
//__________________________________________________________

export function SubmissionResult() {
  const { isNavigating, onClickReturn, submission_state_property } =
    useSubmissionResult();
  return (
    <>
      <Container>
        <Title
          sx={{
            color: submission_state_property
              ? submission_state_property.color
              : 'success.main',
          }}
        >
          {submission_state_property
            ? submission_state_property.title
            : 'رزومه شما با موفقیت ارسال شد'}
        </Title>
        <Image
          src={
            submission_state_property
              ? submission_state_property.image
              : SvgSuccess
          }
          alt="success"
          width={250}
          height={136}
          style={{ margin: '0 auto', width: '100%', marginTop: 20 }}
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
          <CountdownTimer
            onTimeUp={onClickReturn}
            title={<>تا بازگشت به دیوار</>}
          />
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={onClickReturn}
              isLoading={isNavigating}
              fullWidth
              sx={{
                zIndex: 1000,
              }}
            >
              بازگشت به دیوار
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

const Container = styled(Stack)(() => ({
  gap: 8,
  alignItems: 'center',
  height: 'calc(100vh - 152px)',
  justifyContent: 'center',
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body3.medium'].fontSize,
  fontWeight: theme?.typography['body3.medium'].fontWeight,
  color: theme?.palette.success.main,
  textAlign: 'center',
}));
