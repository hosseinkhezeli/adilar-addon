'use client';
//@3rd Party
import { Route } from 'next';
import { useTransition } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
//__________________________________________________________________

export function useHeaderPosition() {
  const { push: navigateTo } = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [isNavigating, startTransition] = useTransition();

  const applicantId = params?.applicantId;
  const positionId = params?.positionId;
  const postToken = searchParams?.get('post_token');

  const handleNavigation = () => {
    startTransition(() => {
      if (params?.applicantId) {
        navigateTo(`/employer/positions/${params?.positionId}`);
      } else {
        navigateTo(`/employer/positions`);
      }
    });
  };

  const handleNavigateToDivar = () => {
    startTransition(() => {
      navigateTo(`https://divar.ir/v/${postToken}` as Route);
    });
  };
  return {
    handleNavigation,
    applicantId,
    positionId,
    handleNavigateToDivar,
    isNavigating,
  };
}
