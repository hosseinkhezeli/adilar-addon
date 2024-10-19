import { Card, CardColumn, UnreadBadge } from '@/app/components/Card';
import { LabelValue } from '@/app/components/LabelValueField';
import React, { useState, TouchEvent } from 'react';
import { dateToShamsi, fullNameDisplay } from '@/utils/methods';
import { Box, IconButton, useTheme } from '@mui/material';
import { TApplicantCard } from '@/app/employer/[id]/positions/[positionId]/hooks/useApplicantList';
import SvgTickCircle from 'ideep-design-system-2/icons/TickCircle';
import SvgCloseCircle from 'ideep-design-system-2/icons/CloseCircle';

export function ApplicantCard(applicantInfo: TApplicantCard) {
  const { typography, palette } = useTheme();
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

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={applicantInfo?.onClick}
      style={{
        display: 'inline-block',
        position: 'relative',
        transition: 'transform 0.3s ease',
        width: '100%',
      }}
    >
      <Box
        width="100vw"
        height={'100%'}
        position={'absolute'}
        top={0}
        left={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          py: '1px',
        }}
      >
        <Box
          bgcolor={'success.3'}
          flexBasis={'50%'}
          height={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'start'}
          px={'8%'}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setTranslateX(0);
            }}
            sx={{
              transform: `scaleX(${Math.abs(translateX * 1.25)}%)`,
              transition: '0.3s ease transform',
            }}
          >
            <SvgTickCircle primarycolor={palette.text.secondary} />
          </IconButton>
        </Box>
        <Box
          bgcolor={'error.3'}
          flexBasis={'50%'}
          height={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'end'}
          px={'8%'}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setTranslateX(0);
            }}
            sx={{
              transform: `scaleX(${Math.abs(translateX * 1.25)}%)`,
              transition: '0.3s ease transform',
            }}
          >
            <SvgCloseCircle primarycolor={palette.text.secondary} />
          </IconButton>
        </Box>
      </Box>
      <Card
        disableTouchRipple={true}
        disableRipple={true}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: translateX !== 0 ? 2 : 0,
          transition: '0.3s ease all',
          transform: `translateX(${-translateX}px)`,
          height: '56px',
          minHeight: 'unset',
          backgroundColor: applicantInfo?.isReviewed
            ? 'grey.3'
            : 'common.white',
        }}
      >
        <CardColumn sx={{ flexBasis: 'unset' }}>
          <LabelValue
            withoutColon
            // fieldLabel={
            //   <Image src={SvgPdf} alt={'pdf icon'} width={32} height={32} />
            // }
            fieldValue={fullNameDisplay(
              applicantInfo?.candidate?.fistName,
              applicantInfo?.candidate?.lastName
            )}
            labelProps={{ alignItems: 'center', gap: 2 }}
            valueProps={{ sx: { ...typography['body3.medium'] } }}
          />
        </CardColumn>
        <CardColumn sx={{ flexBasis: 'unset', position: 'relative' }}>
          {applicantInfo.isReviewed ? null : (
            <UnreadBadge sx={{ backgroundColor: 'info.3' }} />
          )}
          <LabelValue
            labelProps={{
              sx: {
                pr: 6,
              },
            }}
            fieldLabel={'تاریخ ارسال'}
            fieldValue={dateToShamsi(applicantInfo?.createdAt)}
          />
        </CardColumn>
      </Card>
    </div>
  );
}
