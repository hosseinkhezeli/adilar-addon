//@3rd Party
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
//_________________________________________________________

//@Hooks

import {
  useGetSubmission,
  useSetApproval,
  useSetIsReviewed,
} from '@/services/api/submission/hooks';
import useAdvertisementStore from '@/store/advertisement/advertisementSlice';
import useUserStore from '@/store/user/userSlice';
import { useSwipeApplicant } from '@/app/employer/positions/[positionId]/[applicantId]/hooks/useSwipeApplicant';
import { useSetViewedTutorial } from '@/services/api/user/hooks';
//_________________________________________________________

//@Types
import { Route } from 'next';
//_________________________________________________________

export function useApplicant() {
  const QC = useQueryClient();
  const { setTutorialStatus } = useUserStore();

  const { advertisement } = useAdvertisementStore();
  const { user } = useUserStore();

  const params = useParams<{ applicantId: string }>();
  const router = useRouter();
  const pathName = usePathname();

  const [statusModal, setStatusModal] = useState<boolean>(false);

  const { data, isLoading } = useGetSubmission({ id: params.applicantId });

  const { elementRef, onTouchEnd, onTouchMove, onTouchStart } =
    useSwipeApplicant({
      previousSubmissionId: data?.previousSubmissionId,
      nextSubmissionId: data?.nextSubmissionId,
      customPush,
    });

  const { mutate: handleSetViewedTutorialMutate } = useSetViewedTutorial();

  const { mutate: setIsReviewedMutate } = useSetIsReviewed();
  const { mutate: setApprovalMutate, isPending: isApprovalLoading } =
    useSetApproval();

  function handleCloseModal() {
    handleSetViewedTutorialMutate(
      { viewedSubmissionTutorial: true },
      {
        onSuccess() {
          setStatusModal(false);
          QC.refetchQueries({ queryKey: ['get-user'] });
          setTutorialStatus({
            completedAdvertisementPageTutorial: false,
            completedSubmissionPageTutorial: true,
          });
        },
        onError() {
          setStatusModal(false);
        },
      }
    );
  }

  function customPush(id: string | number | null) {
    if (!id) return;
    const helper = pathName.split('/').slice(1, -1);

    router.push(`/${helper.join('/')}/${id}` as Route);
  }

  function onApprove() {
    if (data) {
      setApprovalMutate(
        { id: data.id, isApprove: true },
        {
          onSuccess() {
            enqueueSnackbar('رزومه تایید شد', { variant: 'success' });
            QC.refetchQueries({ queryKey: ['applicantList'] });
            QC.refetchQueries({
              queryKey: ['get-submission', params.applicantId],
            });
          },
          onError() {
            enqueueSnackbar('ثبت ناموفق، اروری رخ داده است', {
              variant: 'error',
            });
          },
        }
      );
    }
  }

  function onReject() {
    if (data) {
      setApprovalMutate(
        { id: data.id, isApprove: false },
        {
          onSuccess() {
            enqueueSnackbar('رزومه رد شد', { variant: 'info' });
            QC.refetchQueries({ queryKey: ['applicantList'] });
            QC.refetchQueries({
              queryKey: ['get-submission', params.applicantId],
            });
            customPush(data.nextSubmissionId);
          },
          onError() {
            enqueueSnackbar('ثبت ناموفق، اروری رخ داده است', {
              variant: 'error',
            });
          },
        }
      );
    }
  }

  const handleApplicant = {
    onApprove,
    onReject,
  };

  useEffect(() => {
    if (data && !data.isReviewed) {
      setIsReviewedMutate(
        { id: data.id },
        {
          onSuccess: () => {
            QC.refetchQueries({ queryKey: ['applicantList'] });
            QC.refetchQueries({ queryKey: ['positionList'] });
            QC.refetchQueries({
              queryKey: ['get-submission', params.applicantId],
            });
          },
        }
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (!user?.completedSubmissionPageTutorial) {
      setStatusModal(true);
    }
  }, [user?.completedSubmissionPageTutorial]);

  return {
    elementRef,
    isLoading,
    data,
    statusModal,
    isApprovalLoading,
    handleApplicant,
    advertisement,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    handleCloseModal,
  };
}
