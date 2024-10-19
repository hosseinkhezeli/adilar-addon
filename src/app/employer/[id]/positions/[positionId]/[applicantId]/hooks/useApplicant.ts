import { useGetSubmission } from '@/services/api/submission/hooks';
import { TCategorySection } from '@/services/api/submission/types';
import { Route } from 'next';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { TouchEvent, useEffect, useRef, useState } from 'react';

export const categoryTitle: {
  [key in TCategorySection]: string;
} = {
  Personal: 'اطلاعات شخصی',
};

export function useApplicant() {
  const params = useParams<{ applicantId: string }>();
  const router = useRouter();
  const pathName = usePathname();

  const [statusModal, setStatusModal] = useState<boolean>(true);

  const elementRef = useRef<HTMLDivElement>();
  const [startTouchPosition, setStartTouchPosition] = useState<{
    clientX: number;
    clientY: number;
  } | null>();

  const startTouchAfterDistance = useRef<number>(10);
  const screenWidth = useRef<number>(0);

  const { data, isLoading } = useGetSubmission({ id: params.applicantId });

  function handleCloseModal() {
    setStatusModal(false);
  }

  function customPush(id: string | number | null) {
    if (!id) return;
    const helper = pathName.split('/').slice(1, -1);

    router.push(`/${helper.join('/')}/${id}` as Route);
  }

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    if (e.touches.length > 1) return;
    const touch = e.touches[0];
    setStartTouchPosition({
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
  }

  function onTouchMove(e: TouchEvent<HTMLDivElement>) {
    if (e.touches.length > 1) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - Number(startTouchPosition?.clientX);
    const deltaY = touch.clientY - Number(startTouchPosition?.clientY);
    if (
      Math.abs(deltaX) > startTouchAfterDistance.current &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      const amount =
        deltaX > 0
          ? deltaX - startTouchAfterDistance.current
          : deltaX + startTouchAfterDistance.current;
      elementRef.current!.style.transform = `translateX(${amount}px)`;
      elementRef.current!.style.opacity = `${1 - (Math.abs(deltaX) / screenWidth.current) * 1.5}`;
    }
  }

  function onTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const touch = e.changedTouches[0];

    const deltaX = touch.clientX - Number(startTouchPosition?.clientX);
    const deltaY = touch.clientY - Number(startTouchPosition?.clientY);

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0 && Math.abs(deltaX) - 10 > screenWidth.current / 2) {
        if (data?.previousSubmissionId) {
          customPush(data.previousSubmissionId);
        } else {
          elementRef.current!.style.opacity = `1`;
          elementRef.current!.style.transform = `translateX(0px)`;
        }
      } else if (
        deltaX < 0 &&
        Math.abs(deltaX) - 10 > screenWidth.current / 2
      ) {
        if (data?.nextSubmissionId) {
          customPush(data.nextSubmissionId);
        } else {
          elementRef.current!.style.transform = `translateX(0px)`;
          elementRef.current!.style.opacity = `1`;
        }
      } else {
        elementRef.current!.style.transform = `translateX(0px)`;
        elementRef.current!.style.opacity = `1`;
      }
    } else {
      elementRef.current!.style.transform = `translateX(0px)`;
      elementRef.current!.style.opacity = `1`;
    }
    setStartTouchPosition(null);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      screenWidth.current = window.innerWidth;
    }
  }, []);

  return {
    elementRef,
    isLoading,
    data,
    statusModal,
    customPush,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    handleCloseModal,
  };
}
