'use client';
//@3rd Party
import { useRouter } from 'next/navigation';
//_______________________________________________________________

//@Types
import { Route } from 'next';
//_______________________________________________________________

export function useComplete() {
  const trackingCode = '458965221214';
  const { push: navigateTo } = useRouter();
  const onClick = () => {
    navigateTo('asdasda/form-creator' as Route);
  };
  return { onClick, trackingCode };
}
