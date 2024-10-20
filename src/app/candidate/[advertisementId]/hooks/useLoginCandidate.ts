//@3rd Party
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Route } from 'next';
import { useTransition } from 'react';
//_______________________________________________________________

//@Types

//_______________________________________________________________

export function useLoginCandidate() {
  const { push: navigateTo } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const nextState = 'logged-in';
  const newSearchParams = new URLSearchParams({
    post_token: postToken || '404_post_token',
    state: nextState,
  });
  const [isNavigating, startTransition] = useTransition();

  const handleLogin = () => {
    startTransition(() => {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    });
  };

  return { handleLogin, isNavigating };
}
