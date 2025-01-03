'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
//____________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
import useUserStore from '@/store/user/userSlice';
//____________________________________________________

//@Types
import { Route } from 'next';
import { TStepperState } from '../types';
//____________________________________________________

export function usePurchaseLayout() {
  //Store deps
  const { loading } = useUserStore();
  const { reset, setAdInfo } = usePurchaseStore();
  //URL deps
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentState = searchParams.get('state') as TStepperState;
  const tokenParam = searchParams.get('token');
  const post_token = searchParams.get('post_token');
  const advertisement_id = searchParams.get('advertisement_id');
  const newState =
    currentState === 'plans'
      ? 'information'
      : currentState === 'information'
        ? 'pre_invoice'
        : currentState === 'pre_invoice'
          ? 'bank-portal'
          : 'plans';
  const newSearchParams = new URLSearchParams({ state: newState });
  //Hooks
  const { push: navigateTo } = useRouter();

  //Handlers
  useLayoutEffect(() => {
    if (!currentState) {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
    if (currentState === 'plans') {
      reset();
    }
  }, [currentState, pathname, newSearchParams.toString()]);

  useEffect(() => {
    if (post_token && advertisement_id) {
      setAdInfo(post_token, advertisement_id);
    }
    return reset();
  }, [tokenParam, post_token, advertisement_id, loading]);
  return { currentState };
}
