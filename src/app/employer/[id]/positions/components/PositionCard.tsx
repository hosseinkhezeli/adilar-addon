import React from 'react';
import { Badge, Typography } from '@mui/material';
import { IPositionCard } from '@/app/employer/[id]/positions/hooks/usePositionList';
import { LabelValue } from '@/app/components/LabelValueField';
import { dateToShamsi, truncateString } from '@/utils/methods';
import { Card, CardColumn, SubtitleText } from '@/app/components/Card';

type TPositionCardProps = {
  positionInfo: IPositionCard | undefined;
  onClick?: (id: string | undefined) => void;
};

export function PositionCard(props: TPositionCardProps) {
  return (
    <Card onClick={() => props?.onClick?.(props?.positionInfo?.id)}>
      <CardColumn>
        <Typography variant={'body3.medium'}>
          {truncateString(props?.positionInfo?.title || '', 15)}
        </Typography>
        <LabelValue
          fieldLabel={'تاریخ ساخت'}
          fieldValue={dateToShamsi(props?.positionInfo?.createdAt)}
        />
      </CardColumn>
      <CardColumn>
        <Typography variant={'caption1'} color={'text.14'}>
          {props?.positionInfo?.location?.title}
        </Typography>
        <LabelValue
          fieldLabel={'تعداد کل کارجویان'}
          fieldValue={props?.positionInfo?.candidates?.count}
        />
      </CardColumn>
      <CardColumn>
        <Badge
          badgeContent={
            Number(props?.positionInfo?.unreadCount) > 100
              ? '+99'
              : props?.positionInfo?.unreadCount
          }
          color="info"
          sx={{
            width: '90%',
            '.MuiBadge-badge': { color: 'text.secondary', width: 20 },
          }}
        >
          <SubtitleText sx={{ visibility: 'hidden', pr: 8 }}>
            badge
          </SubtitleText>
        </Badge>
        <LabelValue
          fieldLabel={'آخرین کارجو'}
          fieldValue={generateDayName(
            props?.positionInfo?.lastCandidateSubmission
          )}
        />
      </CardColumn>
    </Card>
  );
}

function generateDayName(date: Date | string | null | undefined) {
  if (!date) return '-';
  let dateValue = '';
  const lastDay = new Date(date).getDate();
  const today = new Date().getDate();
  switch (lastDay) {
    case today:
      dateValue = 'امروز';
      break;
    case today - 1:
      dateValue = 'دیروز';
      break;
    default:
      return dateToShamsi(date);
  }

  return dateValue;
}
