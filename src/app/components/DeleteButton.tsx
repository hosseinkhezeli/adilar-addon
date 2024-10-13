import React from 'react';
import { IconButton } from '@mui/material';
import SvgTrash from 'ideep-design-system-2/icons/Trash';

const DeleteButton = () => {
  return (
    <IconButton
      color="error"
      sx={{
        width: 24,
        height: 24,
        borderRadius: '100%',
        filter: 'drop-shadow(0px 2.182px 7.273px rgba(243, 29, 81, 0.30))',
        '& path': {
          strokeWidth: 2,
        },
      }}
    >
      <SvgTrash primarycolor="white" width={16} height={16} />
    </IconButton>
  );
};

export { DeleteButton };
