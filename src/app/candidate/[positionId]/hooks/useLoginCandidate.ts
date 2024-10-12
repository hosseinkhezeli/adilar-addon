import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

type TUseLoginCandidateProps = {
  positionId: string;
};

export function useLoginCandidate({ positionId }: TUseLoginCandidateProps) {
  const { push: navigateTo } = useRouter();
  const [isNavigating, startTransition] = useTransition();
  const handleLogin = (id: string) => {
    startTransition(() => {
      navigateTo(`${positionId}/${id}`);
    });
  };

  return { handleLogin, isNavigating };
}
