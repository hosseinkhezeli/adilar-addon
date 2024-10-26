//@3rd Party
import { Route } from 'next';
import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
//_______________________________________________________________

export function useLoginCandidate() {
  //Dependencies
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

  //Handlers
  const handleLogin = () => {
    startTransition(() => {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    });
  };

  return { handleLogin, isNavigating };
}
