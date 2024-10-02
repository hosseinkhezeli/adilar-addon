import React from 'react';
import { Badge, Typography } from '@mui/material';
import { IPositionCard } from '@/app/employer/[id]/hooks/usePositionList';
import { LabelValue } from '@/app/components/LabelValueField';
import { dateToShamsi } from '@/utils/methods';
import { Card, CardColumn, SubtitleText } from '@/app/components/Card';

export function PositionCard(positionInfo: IPositionCard | undefined) {
  return (
    <Card>
      <CardColumn>
        <Typography variant={'body3.medium'}>{positionInfo?.title}</Typography>
        <LabelValue
          fieldLabel={'تاریخ ساخت'}
          fieldValue={dateToShamsi(positionInfo?.createdAt)}
        />
      </CardColumn>
      <CardColumn>
        <Typography variant={'caption1'} color={'text.14'}>
          {positionInfo?.location?.title}
        </Typography>
        <LabelValue
          fieldLabel={'تعداد کل کارجویان'}
          fieldValue={positionInfo?.candidates?.count}
        />
      </CardColumn>
      <CardColumn>
        <Badge
          badgeContent={positionInfo?.unreadCount}
          color="info"
          sx={{ width: '90%', '.MuiBadge-badge': { color: 'text.secondary' } }}
        >
          <SubtitleText sx={{ visibility: 'hidden', pr: 8 }}>
            badge
          </SubtitleText>
        </Badge>
        <LabelValue
          fieldLabel={'آخرین کارجو'}
          fieldValue={dateToShamsi(positionInfo?.lastCandidateSubmission)}
        />
      </CardColumn>
    </Card>
  );
}
