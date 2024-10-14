import { useRouter } from 'next-nprogress-bar';
import { usePathname, useSearchParams } from 'next/navigation';
import { TStepperState } from '../types';
import { Route } from 'next';
import usePurchaseStore from '@/store/purchase/purchaseSlice';

export function usePlans() {
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const nextState = 'information';
  const newSearchParams = new URLSearchParams({ state: nextState });
  const { setPlan } = usePurchaseStore();
  const handleSubmitPlan = (planId: string) => {
    if (planId) {
      setPlan(planId);
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
  };
  return { handleSubmitPlan };
}
