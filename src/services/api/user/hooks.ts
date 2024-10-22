import { useMutation, useQuery } from '@tanstack/react-query';
import { getUser, setViewedTutorial } from '@/services/api/user/services';
import useUserStore from '@/store/user/userSlice';

export const useGetUser = () => {
  const { token } = useUserStore();
  return useQuery({
    queryKey: ['get-user'],
    queryFn: getUser,
    enabled: Boolean(token),
    staleTime: 1000 * 60 * 60,
  });
};

export const useSetViewedTutorial = () => {
  return useMutation({
    mutationKey: ['viewed-tutorial'],
    mutationFn: setViewedTutorial,
  });
};
