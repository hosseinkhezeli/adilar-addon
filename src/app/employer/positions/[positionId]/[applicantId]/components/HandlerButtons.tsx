import React from 'react';
import { Button, Stack } from '@mui/material';
import { TApplicantState } from '@/types/common-types';

interface IHandlerButtons {
  onReject(): void;
  onApprove(): void;
  isApprovalLoading: boolean;
  applicantState: TApplicantState;
}

const HandlerButtons = ({
  onApprove,
  onReject,
  isApprovalLoading,
  applicantState,
}: IHandlerButtons) => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: 2,
      }}
    >
      <Button
        color="error"
        onClick={onReject}
        sx={{
          flexBasis: '0%',
          flexGrow: 1,
          backgroundColor: 'transparent',
        }}
        isLoading={isApprovalLoading}
        {...(applicantState == 'Rejected' && { disabled: true })}
      >
        رد کردن
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{
          flexBasis: '0%',
          flexGrow: 1,
          color: 'common.white',
        }}
        onClick={onApprove}
        isLoading={isApprovalLoading}
        {...(applicantState == 'Accepted' && { disabled: true })}
      >
        تائید
      </Button>
    </Stack>
  );
};

export { HandlerButtons };
