//@3rd Party
import React from 'react';
//______________________________________________________________________

//@Mui
import { Box, IconButton, useTheme } from '@mui/material';
//______________________________________________________________________

//@Hooks & Components
import { Card, CardColumn, UnreadBadge } from '@/app/components/Card';
import { LabelValue } from '@/app/components/LabelValueField';
import { dateToShamsi, fullNameDisplay } from '@/utils/methods';
//______________________________________________________________________

//@Assets
import SvgTickCircle from 'ideep-design-system-2/icons/TickCircle';
import SvgCloseCircle from 'ideep-design-system-2/icons/CloseCircle';
//______________________________________________________________________

//@Types
import { TApplicantCard } from '@/app/employer/positions/[positionId]/hooks/useApplicantList';
import { useApplicantCard } from '@/app/employer/positions/[positionId]/hooks/useApplicantCard';
interface IApplicantCard {
  applicantInfo: TApplicantCard;
}
//______________________________________________________________________

export function ApplicantCard({ applicantInfo }: IApplicantCard) {
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    onReject,
    onApprove,
    translateX,
  } = useApplicantCard();
  const { typography, palette } = useTheme();
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
              onApprove(applicantInfo?.id);
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
              onReject(applicantInfo?.id);
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
