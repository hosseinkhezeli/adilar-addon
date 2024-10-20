//@3rd Party
import React from 'react';
//_______________________________________________________________

//@Mui
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/material';
//_______________________________________________________________

//@Assets
import SvgAdd from 'ideep-design-system-2/icons/Add';
//_______________________________________________________________

//@Types
type TFormHeader = {
  postToken: string | null;
};

export function FormHeader({ postToken }: TFormHeader) {
  return (
    <Box sx={styles.header}>
      <Link
        href={`https://divar.ir/v/${postToken}`}
        style={{
          position: 'absolute',
          right: 34,
          top: -4,
          width: 34,
          height: 34,
          transform: 'translate(50% ,50%)',
        }}
      >
        <SvgAdd
          style={{
            transform: 'rotate(45deg)',
            width: '100%',
            height: '100%',
          }}
        />
      </Link>
      <Typography variant="body3.medium">ارسال رزومه امن</Typography>
    </Box>
  );
}
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    position: 'sticky',
    top: 0,
    backgroundColor: 'background.default',
    zIndex: 1000,
    padding: 4,
    borderBottom: '1px solid',
    borderColor: 'grey.1',
  },
};
