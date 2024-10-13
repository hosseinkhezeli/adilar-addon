'use client';

//@3rd-party
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { routes } from '@/services/api/employer/routes';
import { Route } from 'next';
//________________________________________________________________

export function useIntroduction() {
  //Dependencies
  const { push: navigateTo } = useRouter();
  const pathname = usePathname();
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
// https://adilar.astronomia.ir/employer/introduction?post_token=wZKs1-KN&return_url=https%3A%2F%2Fdivar.ir%2Fmy-divar%2Fmy-posts
