'use client';
//@3rd Party
import React from 'react';
//____________________________________________________

//@MUI
import { Button, Stack, styled } from '@mui/material';
//____________________________________________________

//@Components
import { PlanCard } from './PlanCard';
//____________________________________________________

//@Types
import { usePlans } from '../../hooks/usePlans';
//____________________________________________________

export function Plans() {
  const { handleSubmitPlan, activePlan, handleChange, plansInfo } = usePlans();
  return (
    <>
      <PlansContainer>
        {plansInfo?.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isActive={activePlan === plan.id}
            handleClick={handleChange}
          />
        ))}
      </PlansContainer>
      <Button
        variant="contained"
        onClick={() =>
          handleSubmitPlan(plansInfo.find((plan) => plan.id === activePlan))
        }
        sx={{
          position: 'fixed',
          width: 'calc(100% - 32px)',
          margin: '0 auto',
          bottom: 16,
        }}
      >
        ادامه
      </Button>
    </>
  );
}

const PlansContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  height: '100%',
}));
