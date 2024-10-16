import { getPositionList } from '@/services/api/advertisement/services';
import useUserStore from '@/store/user/userSlice';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetPositionList = () => {
  const { token } = useUserStore();
  return useInfiniteQuery({
    queryKey: ['positionList'],
    queryFn: getPositionList,
    initialPageParam: 1,
    getNextPageParam: (lastPageData, _, lastPageParam) => {
      return lastPageData?.advertisements?.length < 11
        ? null
        : lastPageParam + 1;
    },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(token),
  });
};
