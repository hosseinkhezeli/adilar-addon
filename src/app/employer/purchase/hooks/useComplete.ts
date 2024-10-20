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
  const isSuccess = true;

  const { push: navigateTo } = useRouter();
  const onClickSuccess = () => {
    //TODO:correct this address
    navigateTo('asdasda/form-creator' as Route);
  };
  const onClickReturn = () => {
    //TODO:correct this address
    navigateTo('divar' as Route);
  };
  const onClickExit = () => {
    //TODO:correct this address
    navigateTo('divar' as Route);
  };

  return {
    onClickReturn,
    onClickExit,
    onClickSuccess,
    trackingCode,
    isSuccess,
  };
}
