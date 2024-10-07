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
  handleClose: () => void;
}

const BottomSheet = ({
  children,
  handleClose,
  open,
  sx,
  title,
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
      <DialogHeader>
        <Typography variant={'body3.medium'}>{title}</Typography>
        <IconButton aria-label="close" size="small" onClick={handleClose}>
          <SvgAdd style={{ transform: 'rotate(45deg)' }} />
        </IconButton>
      </DialogHeader>

      {children}
    </Dialog>
  );
};

export default BottomSheet;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
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
    transform: 'translateY(40%)',
    padding: 0,
    maxWidth: 760,
  },
};
const DialogHeader = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 12,
});
