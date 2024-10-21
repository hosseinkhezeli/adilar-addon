'use client';
//@3rd Party
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
//_______________________________________________________________

//@Types
import { Route } from 'next';
type TTransactionStatus = 'success' | 'error' | null;
//_______________________________________________________________

export function useComplete() {
  //Dependencies
  const [isNavigating, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const { push: navigateTo } = useRouter();

  const trackingCode = searchParams?.get('tracking_code');
  const isSuccess = searchParams?.get(
    'transaction_status'
  ) as TTransactionStatus;
  const postToken = searchParams.get('post_token');
  const advertisementId = searchParams.get('advertisement_id');
  const newSearchParams = new URLSearchParams({
    advertisement_id: advertisementId || '404_advertisement_id',
    post_token: postToken || '404_post_token',
  });

  //Handlers
  const onClickSuccess = () => {
    startTransition(() => {
      navigateTo(
        `/employer/form-creator?${newSearchParams.toString()}` as Route
      );
    });
  };

  const onClickReturn = () => {
    startTransition(() => {
      navigateTo(
        `/employer/purchase?state=pre_invoice&${newSearchParams.toString()}` as Route
      );
    });
  };

  const onClickExit = () => {
    startTransition(() => {
      navigateTo(`https://divar.ir/v/${postToken}` as Route);
    });
  };

  return {
    onClickReturn,
    onClickExit,
    onClickSuccess,
    trackingCode,
    isSuccess,
    isNavigating,
  };
}
