//@3rd Party
import React from 'react';
//_____________________________________________________________________

//@Mui
import { Badge, Typography } from '@mui/material';
//_____________________________________________________________________

//@Components
import { LabelValue } from '@/app/components/LabelValueField';
import { Card, CardColumn, SubtitleText } from '@/app/components/Card';
//_____________________________________________________________________

//@Utils
import { dateToShamsi, generateDayName, truncateString } from '@/utils/methods';
//_____________________________________________________________________

//@Types
import { IPositionCard } from '@/app/employer/positions/hooks/usePositionList';
type TPositionCardProps = {
  positionInfo: IPositionCard | undefined;
  onClick?: (id: string | undefined) => void;
};
//_____________________________________________________________________

export function PositionCard(props: TPositionCardProps) {
  return (
    <Card onClick={() => props?.onClick?.(props?.positionInfo?.id)}>
      <CardColumn>
        <Typography variant={'body3.medium'}>
          {truncateString(props?.positionInfo?.title, 15)}
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
            '.MuiBadge-badge': {
              color: 'text.secondary',
              width: 20,
              top: 'calc(100% + 5px)',
            },
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
