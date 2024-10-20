'use client';
//@3rd Party
import Image from 'next/image';
//__________________________________________________________
//@Mui
import { Box, Button, Stack, styled, Typography } from '@mui/material';
//__________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/success.svg';
import { useSubmissionSuccess } from '../hooks/useSubmissionSuccess';
import CountdownTimer from '@/app/components/CountdownTimer';
//__________________________________________________________

export function SubmissionSuccess() {
  const { isNavigating, onClickReturn } = useSubmissionSuccess();
  return (
    <>
      <Container>
        <Image
          src={SvgSuccess}
          alt="success"
          width={250}
          height={136}
          style={{ margin: '0 auto', width: '100%' }}
        />
        <Title>رزومه شما با موفقیت ارسال شد</Title>

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
