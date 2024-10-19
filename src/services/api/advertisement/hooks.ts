import {
  getApplicantList,
  getPositionList,
} from '@/services/api/advertisement/services';
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

export const useGetApplicantList = ({
  state,
  advertisementId,
}: {
  advertisementId: string;
  state: string;
}) => {
  const { token } = useUserStore();
  return useInfiniteQuery({
    queryKey: ['applicantList', state, advertisementId],
    queryFn: ({ pageParam }) => getApplicantList({ ...pageParam }),
    initialPageParam: {
      pageNumber: 1,
      state,
      advertisementId,
    },
    getNextPageParam: (lastPageData, __, lastPageParam) =>
      lastPageData?.submissions?.length < 11
        ? null
        : { ...lastPageParam, pageNumber: lastPageParam.pageNumber + 1 },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(token),
  });
};
