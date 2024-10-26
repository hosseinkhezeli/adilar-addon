'use client';
import { Route } from 'next';
//@3rd Party
import { useParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';
//__________________________________________________________________

export function useHeaderPosition() {
  const { push: navigateTo } = useRouter();
  const params = useParams();
  const [isNavigating, startTransition] = useTransition();

  const applicantId = params?.applicantId;
  const positionId = params?.positionId;

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
      navigateTo(`https://divar.ir/` as Route);
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
