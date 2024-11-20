'use client';
//@3rd Party
import React, { CSSProperties, useMemo } from 'react';
//_______________________________________________________________

//@Mui
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/material';
//_______________________________________________________________

//@Assets
import SvgClose from 'ideep-design-system-2/icons/Add';
import { isDivarLink } from '@/utils/methods';
import { RETURN_URL } from '@/app/constant';
//_______________________________________________________________
import { Route } from 'next';

export function FormHeader() {
  const returnUrl = useMemo(() => {
    if (RETURN_URL && isDivarLink(RETURN_URL)) {
      return RETURN_URL;
    } else return '404_return_url';
  }, [RETURN_URL]);

  return (
    <Box sx={styles.header}>
      <Box sx={styles.container}>
        <Link
          href={
            // isDivarLink(RETURN_URL) ? RETURN_URL : ('404_return_url' as Route)
            `${returnUrl}` as Route
          }
          style={styles.navigateLink}
        >
          <SvgClose style={styles.svgClose} />
        </Link>

        <Typography variant="body3.medium">ارسال رزومه امن</Typography>
      </Box>
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
  container: {
    maxWidth: 560,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgClose: {
    transform: 'rotate(45deg)',
    width: '100%',
    height: '100%',
  } as CSSProperties,
  navigateLink: {
    position: 'absolute',
    right: 0,
    width: 34,
    height: 34,
    top: '0',
    bottom: '0',
    transform: 'translateY(50% ,50%)',
  } as CSSProperties,
};
