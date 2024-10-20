'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
//_______________________________________________________________

//@Types
import { Route } from 'next';
//_______________________________________________________________

export function useComplete() {
  //TODO: make these two dynamic from payment result
  const trackingCode = '458965221214';
  const isSuccess = false;
  const { push: navigateTo } = useRouter();
  const onClick = () => {
    navigateTo('asdasda/form-creator' as Route);
  };
  return { onClick, trackingCode, isSuccess };
}
