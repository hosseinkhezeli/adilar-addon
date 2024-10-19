'use client';
//@3rd Party
import { usePathname, useRouter } from 'next/navigation';
//___________________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
//___________________________________________________________

//@Types
import { TPlanCard } from '../types';
import { Route } from 'next';

export function usePlans() {
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const nextState = 'information';
  const newSearchParams = new URLSearchParams({ state: nextState });
  const { setPlan } = usePurchaseStore();
  const handleSubmitPlan = (plan: TPlanCard['plan'] | undefined) => {
    if (plan?.id) {
      setPlan(plan);
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
  };
  return { handleSubmitPlan };
}
