import React from 'react';
import { Badge, Box, Button, styled, Typography } from '@mui/material';
import { IPositionCard } from '@/app/employer/[id]/hooks/usePositionList';
import { LabelValue } from '@/app/components/LabelValueField';
import { dateToShamsi } from '@/utils/methods';

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
          sx={{ '.MuiBadge-badge': { color: 'text.secondary' } }}
        >
          <SubtitleText sx={{ visibility: 'hidden' }}>badge</SubtitleText>
        </Badge>
        <LabelValue
          fieldLabel={'آخرین کارجو'}
          fieldValue={dateToShamsi(positionInfo?.lastCandidateSubmission)}
        />
      </CardColumn>
    </Card>
  );
}

const Card = styled(Button)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '16px 12px',
  minHeight: '73px',
  gap: 2,
  backgroundColor: theme.palette.background.default,
  border: 'none',
  textTransform: 'none',
}));
const CardColumn = styled(Box)({
  flexBasis: '33.3%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const SubtitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption3,
  fontWeight: 300,
  color: theme.palette.text[14],
}));
