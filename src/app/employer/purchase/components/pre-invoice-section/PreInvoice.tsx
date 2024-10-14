'use client';
//@Mui
import { Box, Button, Divider, Stack, styled, Typography } from '@mui/material';
//___________________________________________________________

//@Hooks & Components
import { Section } from '@/app/components/Section';
import { usePreInvoices } from '../../hooks/usePreInvoices';
import { currency } from '@/utils/methods';
import { Discount } from './Discount';
//___________________________________________________________

//@Types
type TPreInvoice = {
  coupon: string;
  onChange: (coupon: string) => void;
  onSubmit: (coupon: string) => void;
};
//___________________________________________________________

export function PreInvoice() {
  const {
    plan,
    taxPrice,
    discount,
    totalPrice,
    onChangeDiscount,
    onSubmitDiscount,
    coupon,
  } = usePreInvoices();

  const preInvoiceInfo = [
    {
      title: 'مبلغ افزونه',
      value: plan?.price,
    },
    {
      title: 'مالیات ارزش افزوده',
      value: taxPrice,
    },
    {
      title: 'تخفیف',
      value: discount,
    },
  ];

  return (
    <Container>
      <Discount
        coupon={coupon}
        onChange={onChangeDiscount}
        onSubmit={onSubmitDiscount}
      />
      <Section
        title="جزئیات پرداخت"
        containerProps={{ sx: { height: 'max-content' } }}
      >
        <PreInvoiceContainer>
          <FieldContainer>
            {preInvoiceInfo.map((item) => (
              <Field key={item.title}>
                <Title>{item.title}</Title>
                <Value>{currency(item.value)}</Value>
              </Field>
            ))}
          </FieldContainer>
          <Divider sx={{ borderColor: (theme) => theme.palette.text[8] }} />
          <Field>
            <Title>مبلغ کل</Title>
            <Value sx={{ color: 'success.main' }}>{currency(totalPrice)}</Value>
          </Field>
        </PreInvoiceContainer>
      </Section>

      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
      >
        پرداخت
      </Button>
    </Container>
  );
}

const Container = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  gap: 32,
}));

const PreInvoiceContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  margin: `${theme.spacing(1)} 0`,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography['body3'].fontSize,
  fontWeight: theme.typography['body3'].fontWeight,
  color: theme.palette.text.primary,
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography['body2.medium'].fontSize,
  fontWeight: theme.typography['body2.medium'].fontWeight,
  color: theme.palette.text.primary,
}));

const FieldContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  margin: `${theme.spacing(2)} 0`,
}));

const Field = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
