import { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export function useSubmissionSuccess() {
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const [isNavigating, startTransition] = useTransition();
  const onClickReturn = () => {
    startTransition(() => {
      navigateTo(`https://divar.ir/v/${postToken}` as Route);
    });
  };
  return { isNavigating, onClickReturn };
}
