'use client';

//@3rd Party
import React, { useState } from 'react';
//____________________________________________________

//@MUI
import { Box, Stepper, Step, StepLabel, Button, styled } from '@mui/material';
//____________________________________________________

//@Constants
const steps = ['انتخاب افزونه', 'تکمیل اطلاعات', 'تکمیل پرداخت'];
//____________________________________________________

export function PurchaseProgress() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <StepperContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* TODO: remove this and implement stepper logic */}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />

        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </Box>
      {/* TODO: remove this and implement stepper logic */}
    </StepperContainer>
  );
}

const StepperContainer = styled(Box)(() => ({
  width: '100%',
}));
