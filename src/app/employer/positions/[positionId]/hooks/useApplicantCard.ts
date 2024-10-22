'use client';
//@3rd Party
import { useQueryClient } from '@tanstack/react-query';
import { TouchEvent, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
//______________________________________________________________________

//@Hooks
import { useSetApproval } from '@/services/api/submission/hooks';
//______________________________________________________________________

export function useApplicantCard() {
  const QC = useQueryClient();

  const [translateX, setTranslateX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<{
    clientX: number;
    clientY: number;
  }>({
    clientX: 0,
    clientY: 0,
  });
  const maxSwipeDistance = 80; // Maximum swipe distance in pixels

  const { mutate: setApprovalMutate } = useSetApproval();

  function onApprove(applicantId: string | undefined) {
    if (applicantId) {
      setApprovalMutate(
        { id: applicantId, isApprove: true },
        {
          onSuccess() {
            enqueueSnackbar('رزومه تایید شد', { variant: 'success' });
            QC.refetchQueries({ queryKey: ['applicantList'] });
            QC.refetchQueries({
              queryKey: ['get-submission', applicantId],
            });
            setTranslateX(0);
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

  function onReject(applicantId: string | undefined) {
    if (applicantId) {
      setApprovalMutate(
        { id: applicantId, isApprove: false },
        {
          onSuccess() {
            enqueueSnackbar('رزومه رد شد', { variant: 'info' });
            QC.refetchQueries({ queryKey: ['applicantList'] });
            QC.refetchQueries({
              queryKey: ['get-submission', applicantId],
            });
            setTranslateX(0);
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

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setIsSwiping(true);
    setTouchStart({
      clientX: event.touches[0]?.clientX,
      clientY: event.touches[0]?.clientY,
    });
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStart.clientX;
    const newTranslateX = Math.min(
      Math.max(deltaX, -maxSwipeDistance),
      maxSwipeDistance
    );
    setTranslateX(newTranslateX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(translateX) < 60) {
      setTranslateX(0);
    } else if (translateX > 0) {
      setTranslateX(80);
    } else {
      setTranslateX(-80);
    }
    setIsSwiping(false);
  };
  return {
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    onReject,
    onApprove,
    translateX,
  };
}
