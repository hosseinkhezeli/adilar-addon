//@3rd Party
import Image from 'next/image';
//__________________________________________________________
//@Mui
import { Button, Stack, styled, Typography } from '@mui/material';
//__________________________________________________________

//@Assets
import SvgSuccess from '@/assets/images/success.svg';
//__________________________________________________________

export function SubmissionSuccess() {
  return (
    <>
      <Container>
        <Title>رزومه شما با موفقیت ارسال شد</Title>
        <Image
          src={SvgSuccess}
          alt="success"
          width={250}
          height={136}
          style={{ margin: '0 auto', width: '100%' }}
        />

        <Button
          variant="outlined"
          type="submit"
          sx={{
            position: 'fixed',
            width: 'calc(100% - 32px)',
            margin: '0 auto',
            bottom: 16,
            zIndex: 1000,
          }}
        >
          بازگشت به دیوار
        </Button>
      </Container>
    </>
  );
}

const Container = styled(Stack)(() => ({
  gap: 8,
  alignItems: 'center',
  height: 'calc(100vh - 85px)',
  justifyContent: 'center',
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body3.medium'].fontSize,
  fontWeight: theme?.typography['body3.medium'].fontWeight,
  color: theme?.palette.success.main,
  textAlign: 'center',
}));