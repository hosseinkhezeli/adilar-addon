'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect } from 'react';
//____________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
import useUserStore from '@/store/user/userSlice';
import { useGetAdByDivarPostToken } from '@/services/api/employer/hooks';
import { useMockLogin } from '@/services/api/auth/hooks';
//____________________________________________________

//@Types
import { Route } from 'next';
import { TStepperState } from '../types';
//____________________________________________________

export function usePurchaseLayout() {
  //Store
  const { setToken, initialize, token, loading } = useUserStore();
  const { reset, setAdInfo } = usePurchaseStore();
  //URL
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
  const { data } = useGetAdByDivarPostToken(post_token);
  const { mutate: login } = useMockLogin();
  console.log(data);
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
    initialize();
    if (!token && !loading) {
      login(undefined, {
        onSuccess: (data) => {
          setToken(data.token);
        },
      });
    }
    if (post_token && advertisement_id) {
      setAdInfo(post_token, advertisement_id);
    }
  }, [tokenParam, post_token, advertisement_id, loading]);
  return { currentState };
}
