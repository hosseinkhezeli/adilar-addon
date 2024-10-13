'use client';
//@3rd Party
import React, { useState } from 'react';
//____________________________________________________

//@MUI
import { Stack, styled } from '@mui/material';
//____________________________________________________

//@Components
import { PlanCard } from './PlanCard';
//____________________________________________________
//@Types
import { TPlanCard } from '../types';
//____________________________________________________

export function Plans() {
  //TODO: remove this mock data
  const plansInfo: TPlanCard['plan'][] = [
    {
      id: '1',
      title: 'افزودن روی این آگهی',
      description:
        'افزونه فرم‌ساز رزومه ادیلار فقط روی این اگهی قرار خواهد گرفت',
      price: 60000,
    },
    {
      id: '2',
      title: 'افزودن روی تمام اگهی ها',
      description:
        'افزونه فرم‌ساز رزومه ادیلار روی تمام اگهی های استخدامی که ثبت میکنید قرار خواهد گرفت',
      price: 60000,
    },
  ];

  const [activePlan, setActivePlan] = useState<string>('1');

  const handleChange = (id: string) => {
    setActivePlan(id);
  };

  return (
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
  );
}

const PlansContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));
