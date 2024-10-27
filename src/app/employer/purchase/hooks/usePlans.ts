'use client';
//@3rd Party
import { useState } from 'react';
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
  //Dependencies
  const pathname = usePathname();
  const { setPlan } = usePurchaseStore();
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

  //TODO: remove this mock data
  const plansInfo: TPlanCard['plan'][] = [
    {
      id: '1',
      title: 'افزودن روی این آگهی',
      description:
        'افزونه فرم‌ساز رزومه ادیلار فقط روی این اگهی قرار خواهد گرفت',
      price: 90000,
      status: 'active',
    },
    {
      id: '2',
      title: 'افزودن روی تمام اگهی ها',
      description:
        'افزونه فرم‌ساز رزومه ادیلار روی تمام اگهی های استخدامی که ثبت میکنید قرار خواهد گرفت',
      price: 0,
      status: 'inactive',
    },
  ];

  const [activePlan, setActivePlan] = useState<string>('1');

  const handleChange = (id: string) => {
    setActivePlan(id);
  };

  //Handlers
  const handleSubmitPlan = (plan: TPlanCard['plan'] | undefined) => {
    if (plan?.id) {
      setPlan(plan);
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    }
  };

  return { handleSubmitPlan, handleChange, activePlan, plansInfo };
}
