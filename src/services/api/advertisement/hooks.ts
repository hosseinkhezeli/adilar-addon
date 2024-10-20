import {
  getApplicantList,
  getPositionList,
} from '@/services/api/advertisement/services';
import useUserStore from '@/store/user/userSlice';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetPositionList = ({ textSearch }: { textSearch: string }) => {
  const { token } = useUserStore();
  return useInfiniteQuery({
    queryKey: ['positionList', textSearch],
    queryFn: ({ pageParam }) => getPositionList({ ...pageParam }),
    initialPageParam: {
      pageNumber: 1,
      textSearch,
    },
    getNextPageParam: (lastPageData, _, lastPageParam) => {
      return lastPageData?.advertisements?.length < 11
        ? null
        : { ...lastPageParam, pageNumber: lastPageParam.pageNumber + 1 };
    },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(token),
  });
};

export const useGetApplicantList = ({
  state,
  advertisementId,
  textSearch,
}: {
  advertisementId: string;
  state: string;
  textSearch: string;
}) => {
  const { token } = useUserStore();
  return useInfiniteQuery({
    queryKey: ['applicantList', state, advertisementId],
    queryFn: ({ pageParam }) => getApplicantList({ ...pageParam }),
    initialPageParam: {
      pageNumber: 1,
      state,
      advertisementId,
      textSearch,
    },
    getNextPageParam: (lastPageData, __, lastPageParam) =>
      lastPageData?.submissions?.length < 11
        ? null
        : { ...lastPageParam, pageNumber: lastPageParam.pageNumber + 1 },
    staleTime: 1000 * 60 * 60,
    enabled: Boolean(token),
  });
};
