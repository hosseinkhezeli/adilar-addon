import { Link, Typography } from '@mui/material';

import { Box } from '@mui/material';
import SvgAdd from 'ideep-design-system-2/icons/Add';

export function FormHeader() {
  return (
    <Box sx={styles.header}>
      <Link
        href={'/'}
        style={{
          position: 'absolute',
          right: 0,
          top: -4,
          width: 34,
          height: 34,
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
    position: 'relative',
  },
};
