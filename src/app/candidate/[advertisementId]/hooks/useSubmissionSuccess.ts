import { RETURN_URL } from '@/app/constant';
import { isDivarLink } from '@/utils/methods';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export function useSubmissionSuccess() {
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const [isNavigating, startTransition] = useTransition();
  const onClickReturn = () => {
    startTransition(() => {
      if (isDivarLink(RETURN_URL)) {
        navigateTo(RETURN_URL);
      }
    });
  };
  return { isNavigating, onClickReturn };
}
