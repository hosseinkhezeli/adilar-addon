//@3rd Party
import { usePathname, useRouter } from 'next/navigation';
import { Route } from 'next';
import { useTransition } from 'react';
//_______________________________________________________________

//@Types
type TUseLoginCandidateProps = {
  positionId: string;
};
//_______________________________________________________________

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
