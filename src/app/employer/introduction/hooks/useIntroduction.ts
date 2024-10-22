'use client';

//@3rd-party
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { Route } from 'next';
//________________________________________________________________

import { routes } from '@/services/api/employer/routes';

export function useIntroduction() {
  //Dependencies
  const { push: navigateTo } = useRouter();
  const [isNavigating, startNavigation] = useTransition();
  const searchParams = useSearchParams();
  //Handlers
  const handleSubmit = () => {
    startNavigation(() => {
      const params = new URLSearchParams(searchParams.toString());
      navigateTo(`${routes.introduction}?${params.toString()}` as Route);
    });
  };

  return { isNavigating, handleSubmit };
}
