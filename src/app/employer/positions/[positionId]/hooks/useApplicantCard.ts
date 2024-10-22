'use client';
//@3rd Party
import { useQueryClient } from '@tanstack/react-query';
import { TouchEvent, useRef, useState } from 'react';
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
  const cardPosition = useRef<'reject' | 'approve' | 'center'>('center');

  const startTouchAfterDistance = useRef<number>(10);
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
    const deltaY = touch.clientY - touchStart.clientY;

    if (
      Math.abs(deltaX) > startTouchAfterDistance.current &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      if (cardPosition.current === 'center') {
        const newTranslateX = Math.min(
          Math.max(deltaX, -maxSwipeDistance),
          maxSwipeDistance
        );
        setTranslateX(newTranslateX);
      } else if (cardPosition.current === 'reject') {
        setTranslateX(0);
      } else if (cardPosition.current === 'approve') {
        setTranslateX(0);
      }
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(translateX) < 60 || cardPosition.current !== 'center') {
      setTranslateX(0);
      cardPosition.current = 'center';
    } else if (translateX > 0) {
      setTranslateX(80);
      cardPosition.current = 'reject';
    } else {
      setTranslateX(-80);
      cardPosition.current = 'approve';
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
