'use client';

import { useMockLogin } from '@/services/api/auth/hooks';
import useUserStore from '@/store/user/userSlice';
import { useEffect } from 'react';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const { mutate: login } = useMockLogin();
  const { setToken, initialize, token, loading, reset } = useUserStore();

  useEffect(() => {
    initialize();
    if (!token && !loading) {
      login(undefined, {
        onSuccess: (data) => {
          setToken(data.token);
        },
      });
    }
    return () => {
      reset();
    };
  }, [loading]);
  return <>{children}</>;
}
