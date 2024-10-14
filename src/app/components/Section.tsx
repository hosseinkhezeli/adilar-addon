'use client';
//@3rd Party
import { Divider, styled, Typography, TypographyProps } from '@mui/material';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
//____________________________________________________

//@Types
type TSection = {
  children: React.ReactNode;
  title: React.ReactNode;
  containerProps?: BoxProps;
};
//____________________________________________________

export function Section({ children, title, containerProps }: TSection) {
  return (
    <Container {...containerProps}>
      <Title component={typeof title === 'string' ? 'p' : 'div'}>{title}</Title>
      <Divider sx={{ borderColor: (theme) => theme.palette.text[8] }} />
      {children}
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid ',
  borderColor: theme.palette.text[8],
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}));

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography['body3.medium'].fontSize,
  fontWeight: theme.typography['body3.medium'].fontWeight,
  color: theme.palette.text.primary,
}));
