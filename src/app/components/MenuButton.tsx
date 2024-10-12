import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import SvgAdd from 'ideep-design-system-2/icons/Add';

interface IMenuButtonProps extends ButtonProps {
  isOpen?: boolean;
}

export function MenuButton({
  children,
  sx,
  isOpen,
  ...buttonProps
}: IMenuButtonProps) {
  return (
    <Button
      variant={'contained'}
      color={'secondary'}
      startIcon={<SvgAdd primarycolor={'inherit'} />}
      {...buttonProps}
      sx={[
        style,
        isOpen
          ? {
              backgroundColor: (theme) => theme.palette.secondary[1],
            }
          : {},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  );
}

const style: ButtonProps['sx'] = {
  borderRadius: '999px',
  maxHeight: '38px !important',
  minHeight: '38px !important',
  stroke: (theme) => theme.palette.text.secondary,
};
