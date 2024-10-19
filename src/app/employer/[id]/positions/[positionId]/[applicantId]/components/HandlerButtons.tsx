import React from 'react';
import { Button, Stack } from '@mui/material';

interface IHandlerButtons {
  onReject(id: string | number | null | undefined): void;
  onApprove(): void;
  isApprovalLoading: boolean;
  nextId: string | number | null | undefined;
}

const HandlerButtons = ({
  onApprove,
  onReject,
  isApprovalLoading,
  nextId,
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
        onClick={() => onReject(nextId)}
        sx={{
          flexBasis: '0%',
          flexGrow: 1,
          backgroundColor: 'transparent',
        }}
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
      >
        تائید
      </Button>
    </Stack>
  );
};

export { HandlerButtons };
