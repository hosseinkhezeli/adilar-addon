import React from 'react';
import { Badge, Typography } from '@mui/material';
import { IPositionCard } from '@/app/employer/[id]/positions/hooks/usePositionList';
import { LabelValue } from '@/app/components/LabelValueField';
import { dateToShamsi } from '@/utils/methods';
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
          {props?.positionInfo?.title}
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
          badgeContent={props?.positionInfo?.unreadCount}
          color="info"
          sx={{ width: '90%', '.MuiBadge-badge': { color: 'text.secondary' } }}
        >
          <SubtitleText sx={{ visibility: 'hidden', pr: 8 }}>
            badge
          </SubtitleText>
        </Badge>
        <LabelValue
          fieldLabel={'آخرین کارجو'}
          fieldValue={dateToShamsi(
            props?.positionInfo?.lastCandidateSubmission
          )}
        />
      </CardColumn>
    </Card>
  );
}
