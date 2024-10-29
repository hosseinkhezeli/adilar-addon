//@3rd Party
import React from 'react';
//____________________________________________________

//@MUI
import {
  Box,
  FormControlLabel,
  Radio,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
//____________________________________________________

//@Types
import { TPlanCard } from '../../types';
//____________________________________________________

export function PlanCard({ plan, isActive, handleClick }: TPlanCard) {
  const theme = useTheme();
  return (
    <>
      <CardContainer
        sx={{
          borderColor: isActive
            ? theme.palette.primary.main
            : theme.palette.text[8],
          opacity: plan.status === 'active' ? 1 : 0.5,
          filter: plan.status === 'active' ? 'none' : 'grayscale(1)',
          pointerEvents: plan.status === 'active' ? 'auto' : 'none',
        }}
        onClick={() => {
          if (plan.status === 'active') handleClick?.(plan.id);
        }}
        onTouchStart={(e) => {
          if (plan.status === 'active') {
            e.preventDefault();
            handleClick?.(plan.id);
          }
        }}
      >
        <CardContent>
          <FormControlLabel
            disableTypography
            value={plan.id}
            control={
              <Radio
                size="medium"
                checked={isActive}
                color="primary"
                sx={{ ml: -2 }}
              />
            }
            label={plan.title}
            checked={isActive}
            sx={{
              fontSize:
                theme.typography['body3.medium'].fontSize + ' !important',
              fontWeight: theme.typography['body3.medium'].fontWeight,
            }}
          />

          <CardPrice>
            {plan.price === 0 ? '-' : plan.price?.toLocaleString()} تومان
          </CardPrice>
        </CardContent>
        <Typography variant="body3">{plan.description}</Typography>
      </CardContainer>
    </>
  );
}

const CardContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  border: '1px solid',
  padding: theme.spacing(2),
  minHeight: 116,
  borderRadius: theme.spacing(2),
  transition: 'border-color 0.3s ease',
  userSelect: 'none',
  cursor: 'pointer',
  width: '100%',
}));

const CardContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const CardPrice = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography['body3'].fontSize,
  color: theme.palette.primary.main,
}));
