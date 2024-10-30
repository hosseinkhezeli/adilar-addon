import React from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {
  Box,
  Dialog,
  DialogProps,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import SvgAdd from 'ideep-design-system-2/icons/Add';

interface IBottomSheet extends DialogProps {
  children?: React.ReactNode;
  handleClose: (
    event?: object | undefined,
    reason?: string | undefined
  ) => void;
  withoutCloseButton?: boolean;
}

const BottomSheet = ({
  children,
  handleClose,
  open,
  sx,
  title,
  withoutCloseButton,
  ...dialogProps
}: IBottomSheet) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      sx={[style, ...(Array.isArray(sx) ? sx : [sx])]}
      {...dialogProps}
    >
      <DialogHeader
        sx={{
          borderBottom: '1px solid',
          borderColor: 'grey.1',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Typography variant={'body3.bold'}>{title}</Typography>

        {!withoutCloseButton && (
          <IconButton aria-label="close" size="small" onClick={handleClose}>
            <SvgAdd style={{ transform: 'rotate(45deg)' }} />
          </IconButton>
        )}
      </DialogHeader>

      {children}
    </Dialog>
  );
};

export default BottomSheet;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      style={{ transitionDuration: '0.4s' }}
    />
  );
});

const style: DialogProps['sx'] = {
  '.MuiDialog-paper': {
    minWidth: '0px',
    maxHeight: '80%',
    minHeight: '60%',
    height: 'max-content',
    padding: 0,
    maxWidth: 560,
    position: 'absolute',
    bottom: -16,
  },
};
const DialogHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 12,
});
