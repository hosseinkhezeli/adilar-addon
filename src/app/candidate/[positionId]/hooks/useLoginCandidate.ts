import { routes } from '@/services/api/employer/routes';
import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

type TUseLoginCandidateProps = {
  positionId: string;
};

export function useLoginCandidate({ positionId }: TUseLoginCandidateProps) {
  const { push: navigateTo } = useRouter();
  const pathname = usePathname();
  const nextState = 'logged-in';

  const [isNavigating, startTransition] = useTransition();
  const handleLogin = (id: string) => {
    startTransition(() => {
      const params = new URLSearchParams({ state: nextState });
      navigateTo(`${pathname}?${params.toString()}` as Route);
    });
  };

  return { handleLogin, isNavigating };
}
