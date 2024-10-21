'use client';
//@3rd Party
import React from 'react';
//___________________________________________________________
//@Mui
import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
//___________________________________________________________

//@Types
type TDiscount = {
  coupon: string;
  onChange: (coupon: string) => void;
  onSubmit: (coupon: string) => void;
};
//___________________________________________________________

export function Discount({ coupon, onChange, onSubmit }: TDiscount) {
  return (
    <Container>
      <Title>کد تخفیف</Title>
      <FormContainer>
        <TextField
          fullWidth
          value={coupon}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button
          onTouchStart={() => onSubmit(coupon)}
          variant="contained"
          sx={{ minHeight: 48, minWidth: 88 }}
        >
          اعمال
        </Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  opacity: 0.5,
  pointerEvents: 'none',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: theme.typography.body3.fontWeight,
  color: theme.palette.text.primary,
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));
