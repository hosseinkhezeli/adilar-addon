import {} from '@/services/api/advertisement/services';
import { getSubmission } from '@/services/api/submission/services';
import useUserStore from '@/store/user/userSlice';
import { useQuery } from '@tanstack/react-query';

export const useGetSubmission = ({ id }: { id: number | string }) => {
  const { token } = useUserStore();
  return useQuery({
    queryKey: ['get-submission', id],
    queryFn: () => getSubmission({ id }),
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(token),
  });
};
