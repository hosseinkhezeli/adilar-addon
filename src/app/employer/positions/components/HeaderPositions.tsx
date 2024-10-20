'use client';
import React, { ReactNode } from 'react';
import { SearchInput } from '@/app/components/SearchInput';
import { IconButton, Stack, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import SvgArrowRight1 from 'ideep-design-system-2/icons/ArrowRight1';
import SvgAdd from 'ideep-design-system-2/icons/Add';

interface IHeaderPositions {
  title: string;
  value?: string;
  handleSearch?(value: string): void;
  children?: ReactNode;
}
const HeaderPositions = ({
  title,
  value,
  handleSearch,
  children,
}: IHeaderPositions) => {
  const { push } = useRouter();
  const params = useParams();
  return (
    <Stack
      py={3}
      bgcolor={params?.applicantId ? 'common.white' : 'background.3'}
    >
      <Stack direction="row" position="relative" mb={handleSearch ? 0 : 2}>
        {params?.positionId || params?.applicantId ? (
          <IconButton
            onClick={() => {
              if (params?.applicantId) {
                push(`/employer/positions/${params?.positionId}`);
              } else {
                push(`/employer/positions`);
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
        ) : (
          <IconButton
            onClick={() => {}}
            sx={{
              position: 'absolute',
              left: 16,
              stroke: (theme) => theme.palette.primary.main,
            }}
          >
            <SvgAdd
              primarycolor="inherit"
              style={{
                transform: 'rotate(45deg)',
              }}
            />
          </IconButton>
        )}
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
      {children}
    </Stack>
  );
};

export { HeaderPositions };
