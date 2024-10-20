'use client';
//@3rd Party
import { useRouter, useSearchParams } from 'next/navigation';
//_______________________________________________________________

//@Types
import { Route } from 'next';
import { useTransition } from 'react';

//_______________________________________________________________

export function useComplete() {
  //TODO: make these two dynamic from payment result
  const trackingCode = '458965221214';
  const isSuccess = false;
  //___________________________________________________
  const [isNavigating, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const advertisementId = searchParams.get('advertisement_id');
  const newSearchParams = new URLSearchParams({
    advertisement_id: advertisementId || '404_advertisement_id',
    post_token: postToken || '404_post_token',
  });
  const { push: navigateTo } = useRouter();
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
