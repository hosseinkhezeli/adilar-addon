'use client';
//@3rd Party
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
//___________________________________________________________

//@Hooks
import usePurchaseStore from '@/store/purchase/purchaseSlice';
//___________________________________________________________

//@Types
import { TPlanCard } from '../types';
import { Route } from 'next';
//___________________________________________________________

export function usePlans() {
  const pathname = usePathname();
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const advertisementId = searchParams.get('advertisement_id');
  const nextState = 'information';
  const newSearchParams = new URLSearchParams({
    state: nextState,
    advertisement_id: advertisementId || '404_advertisement_id',
    post_token: postToken || '404_post_token',
  });
  const { setPlan } = usePurchaseStore();
  const handleSubmitPlan = (plan: TPlanCard['plan'] | undefined) => {
    if (plan?.id) {
      setPlan(plan);
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
  };
  return { handleSubmitPlan };
}
