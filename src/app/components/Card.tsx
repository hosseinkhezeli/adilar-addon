import { Box, Button, styled, Typography } from '@mui/material';

export const Card = styled(Button)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '16px 12px',
  minHeight: '73px',
  gap: 2,
  backgroundColor: theme.palette.background.default,
  border: 'none',
  textTransform: 'none',
}));
export const CardColumn = styled(Box)({
  flexBasis: '33.3%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const SubtitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption3,
  fontWeight: 300,
  color: theme.palette.text[14],
}));

export const CardList = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
});
