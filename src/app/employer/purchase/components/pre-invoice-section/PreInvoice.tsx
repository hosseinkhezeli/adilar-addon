'use client';
//@3rd Party
import React from 'react';
//___________________________________________________________

//@Mui
import { Box, Button, Divider, Stack, styled, Typography } from '@mui/material';
//___________________________________________________________

//@Hooks & Components
import { Section } from '@/app/components/Section';
import { usePreInvoices } from '../../hooks/usePreInvoices';
import { currency } from '@/utils/methods';
import { Discount } from './Discount';
//___________________________________________________________

export function PreInvoice() {
  const {
    totalPrice,
    // onChangeDiscount,
    // onSubmitDiscount,
    // coupon,
    preInvoiceInfo,
    onSubmitPayment,
    isSubmitting,
  } = usePreInvoices();

  return (
    <Container>
      {/* <Discount
        coupon={coupon}
        onChange={onChangeDiscount}
        onSubmit={onSubmitDiscount}
      /> */}
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
        onClick={onSubmitPayment}
        isLoading={isSubmitting}
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
          right: 0,
          left: 0,
          transform: 'translateX(50% ,50%)',
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
