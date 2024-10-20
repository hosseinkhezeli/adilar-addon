'use client';

import { useMockLogin } from '@/services/api/auth/hooks';
import useUserStore from '@/store/user/userSlice';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const { mutate: login } = useMockLogin();
  const searchParams = useSearchParams();
  const jwt = searchParams.get('token');
  const { setToken, initialize, token, loading, reset } = useUserStore();

  useEffect(() => {
    initialize();
    if (!jwt && !token && !loading) {
      login(undefined, {
        onSuccess: (data) => {
          setToken(data.token);
        },
      });
    } else if (jwt) {
      setToken(jwt);
    }
  }, [loading]);
  return <>{children}</>;
}
