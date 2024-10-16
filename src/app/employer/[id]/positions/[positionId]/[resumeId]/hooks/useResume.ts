import { useGetResumeData } from '@/services/api/employer/hooks';
import { Route } from 'next';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { TouchEvent, useEffect, useRef, useState } from 'react';

export function useResume() {
  const params = useParams<{ resumeId: string }>();
  const router = useRouter();
  const pathName = usePathname();

  const elementRef = useRef<HTMLDivElement>();
  const [startTouchPosition, setStartTouchPosition] = useState<{
    clientX: number;
    clientY: number;
  } | null>();

  const startTouchAfterDistance = useRef<number>(10);
  const screenWidth = useRef<number>(0);

  const { data, isLoading } = useGetResumeData({ id: params.resumeId });

  function customPush(id: string | number) {
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
        if (data?.id - 1 > 0) {
          customPush(data?.id - 1);
        } else {
          elementRef.current!.style.opacity = `1`;
          elementRef.current!.style.transform = `translateX(0px)`;
        }
      } else if (
        deltaX < 0 &&
        Math.abs(deltaX) - 10 > screenWidth.current / 2
      ) {
        if (data?.id + 1) {
          customPush(data?.id + 1);
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
    customPush,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}