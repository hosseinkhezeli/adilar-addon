'use client';
import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BottomSheet from './BottomSheet';

export function AdilarDatePicker() {
  const title = 'تاریخ تولد';
  const [open, setOpen] = useState<boolean>(false);
  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <TextField
        placeholder="--/--/----"
        // onClick={handleToggleOpen}
        onTouchEndCapture={(e) => {
          e.preventDefault();
          handleToggleOpen();
        }}
      />
      <BottomSheet open={open} handleClose={handleToggleOpen} title={title}>
        <Typography>BOTTOM SHEET</Typography>
      </BottomSheet>
    </>
  );
}
