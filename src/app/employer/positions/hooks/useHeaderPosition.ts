'use client';
//@3rd Party
import { useTransition } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { RETURN_URL } from '@/app/constant';
import { isDivarLink } from '@/utils/methods';
import { Route } from 'next';
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
    if (isDivarLink(RETURN_URL)) {
      startTransition(() => {
        navigateTo(RETURN_URL as Route);
      });
    }
  };
  return {
    handleNavigation,
    applicantId,
    positionId,
    handleNavigateToDivar,
    isNavigating,
  };
}
