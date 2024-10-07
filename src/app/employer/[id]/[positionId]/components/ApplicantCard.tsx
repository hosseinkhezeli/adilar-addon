import { Card, CardColumn } from '@/app/components/Card';
import { LabelValue } from '@/app/components/LabelValueField';
import React from 'react';
import { dateToShamsi, fullNameDisplay } from '@/utils/methods';
import { TApplicantCard } from '@/app/employer/[id]/[positionId]/hooks/useApplicantList';
import { useTheme } from '@mui/material';
import Image from 'next/image';
import SvgPdf from '@assets/images/pdf-svg.svg';

export function ApplicantCard(applicantInfo: TApplicantCard) {
  const { typography } = useTheme();
  return (
    <Card sx={{ justifyContent: 'space-between' }}>
      <CardColumn sx={{ flexBasis: 'unset' }}>
        <LabelValue
          withoutColon
          fieldLabel={
            <Image src={SvgPdf} alt={'pdf icon'} width={32} height={32} />
          }
          fieldValue={fullNameDisplay(
            applicantInfo?.candidate?.fistName,
            applicantInfo?.candidate?.lastName
          )}
          labelProps={{ alignItems: 'center', gap: 2 }}
          valueProps={{ sx: { ...typography['body3.medium'] } }}
        />
      </CardColumn>
      <CardColumn sx={{ flexBasis: 'unset' }}>
        <LabelValue
          fieldLabel={'تاریخ ارسال'}
          fieldValue={dateToShamsi(applicantInfo?.createdAt)}
        />
      </CardColumn>
    </Card>
  );
}
