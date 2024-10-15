'use client';
import React from 'react';
import { SearchInput } from '@/app/components/SearchInput';
import { IconButton, Stack, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import SvgArrowRight1 from 'ideep-design-system-2/icons/ArrowRight1';

interface IHeaderPositions {
  title: string;
  value?: string;
  handleSearch?(value: string): void;
}
const HeaderPositions = ({ title, value, handleSearch }: IHeaderPositions) => {
  const { push } = useRouter();
  const params = useParams();
  return (
    <Stack py={3} bgcolor={params?.resumeId ? 'common.white' : 'background.3'}>
      <Stack direction="row" position="relative" mb={handleSearch ? 0 : 2}>
        {params?.positionId || params?.resumeId ? (
          <IconButton
            onClick={() => {
              if (params?.resumeId) {
                push(`/employer/${params?.id}/positions/${params?.resumeId}`);
              } else {
                push(`/employer/${params?.id}/positions`);
              }
            }}
            sx={{
              position: 'absolute',
              left: 16,
              stroke: (theme) => theme.palette.primary.main,
            }}
          >
            <SvgArrowRight1 primarycolor="inherit" strokeWidth={2} />
          </IconButton>
        ) : null}
        <Typography
          variant="body3.medium"
          color="text.16"
          sx={{
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
      </Stack>
      {handleSearch ? (
        <SearchInput
          placeholder="جستجو..."
          value={value || ''}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            '& .MuiInputBase-root': {
              boxShadow: '0px 5px 16px 0px rgba(106, 118, 137, 0.10)',
              backgroundColor: 'common.white',
              borderRadius: 50,
            },
            'input::placeholder': {
              color: 'grey.15',
            },
          }}
        />
      ) : null}
    </Stack>
  );
};

export { HeaderPositions };
