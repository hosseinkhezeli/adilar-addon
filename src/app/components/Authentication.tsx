'use client';
import React from 'react';
import { useEffect } from 'react';
import { getCookie } from '@/utils/methods';
import useUserStore from '@/store/user/userSlice';

export function Authentication() {
  const { setToken, loading, token, initialize } = useUserStore();
  useEffect(() => {
    if (!token) {
      initialize();
      if (typeof window !== 'undefined') {
        const cookieToken = getCookie('auth_token');
        if (!loading) {
          setToken(cookieToken);
        }
      }
    }
  }, [loading]);
  return <></>;
}
