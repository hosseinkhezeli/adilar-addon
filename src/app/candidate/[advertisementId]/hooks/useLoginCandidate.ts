//@3rd Party
import { Route } from 'next';
import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
//_______________________________________________________________

//@Constants
const TIMEOUT_DURATION = 3000;
//________________________________________________________________

//@types
interface IUseLoginCandidate {
  phoneNumber?: string;
}
export function useLoginCandidate({ phoneNumber }: IUseLoginCandidate) {
  //Dependencies
  const [open, setOpen] = useState(false);
  const { push: navigateTo } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const nextState = 'logged-in';
  const newSearchParams = new URLSearchParams({
    phone_number: phoneNumber || 'invalid phoneNumber',
    post_token: postToken || '404_post_token',
    state: nextState,
  });
  const [isNavigating, startTransition] = useTransition();

  //Handlers
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), TIMEOUT_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e?: object, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleLogin = () => {
    startTransition(() => {
      navigateTo(`${pathname}?${newSearchParams.toString()}` as Route);
    });
  };

  return { handleLogin, isNavigating, open, handleClose };
}
