'use client';

//@3rd Party
import React from 'react';
//____________________________________________________

//@MUI
import { Box, Stepper, Step, StepLabel, styled } from '@mui/material';
//____________________________________________________

//@Constants
const steps = ['انتخاب افزونه', 'تکمیل اطلاعات', 'تکمیل پرداخت'];
//____________________________________________________

//@Types
import { TStepperState } from '../types';

interface PurchaseProgressProps {
  activeState: TStepperState;
}
//____________________________________________________

export function PurchaseProgress({ activeState }: PurchaseProgressProps) {
  enum StepperState {
    PLANS = 0,
    INFORMATION = 1,
    PRE_INVOICE = 2,
    COMPLETED = 3,
  }
  return (
    <StepperContainer>
      <Stepper
        activeStep={
          StepperState[activeState?.toUpperCase() as keyof typeof StepperState]
        }
      >
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </StepperContainer>
  );
}

const StepperContainer = styled(Box)(() => ({
  width: '100%',
}));
