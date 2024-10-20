//@3rd Party
import React from 'react';
//_________________________________________________________

//@Mui
import { Button, Stack } from '@mui/material';
//_________________________________________________________

//@Types
import { TApplicantState } from '@/types/common-types';
//_________________________________________________________

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
    </Stack>
  );
};

export { HandlerButtons };
