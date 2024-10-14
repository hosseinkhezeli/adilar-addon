'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
//____________________________________________________

//@Types
import { Route } from 'next';
import { TStepperState } from '../types';
import usePurchaseStore from '@/store/purchase/purchaseSlice';
//____________________________________________________

export function usePurchaseLayout() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentState = searchParams.get('state') as TStepperState;
  const { push: navigateTo } = useRouter();
  const { reset } = usePurchaseStore();

  const newState =
    currentState === 'plans'
      ? 'information'
      : currentState === 'information'
        ? 'pre_invoice'
        : currentState === 'pre_invoice'
          ? 'bank-portal'
          : 'plans';

  const newSearchParams = new URLSearchParams({ state: newState });

  useLayoutEffect(() => {
    if (!currentState) {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
    if (currentState === 'plans') {
      reset();
    }
  }, []);

  return { currentState };
}
