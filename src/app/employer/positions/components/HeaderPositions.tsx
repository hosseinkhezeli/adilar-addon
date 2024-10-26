'use client';
//@3rd Party
import React, { ReactNode } from 'react';
//__________________________________________________________

//@Mui
import { IconButton, Stack, styled, Typography } from '@mui/material';
//__________________________________________________________

//@Components
import { SearchInput } from '@/app/components/SearchInput';
import { useHeaderPosition } from '@/app/employer/positions/hooks/useHeaderPosition';
//__________________________________________________________

//@Assets
import SvgArrowRight1 from 'ideep-design-system-2/icons/ArrowRight1';
import SvgAdd from 'ideep-design-system-2/icons/Add';
//__________________________________________________________

//@Types
interface IHeaderPositions {
  title: string;
  value?: string;
  handleSearch?(value: string): void;
  children?: ReactNode;
}
//__________________________________________________________

const HeaderPositions = ({
  title,
  value,
  handleSearch,
  children,
}: IHeaderPositions) => {
  const {
    handleNavigation,
    applicantId,
    positionId,
    handleNavigateToDivar,
    isNavigating,
  } = useHeaderPosition();

  return (
    <Container
      sx={{ backgroundColor: applicantId ? 'common.white' : 'background.3' }}
    >
      <HeaderSection sx={{ marginBottom: handleSearch ? 0 : 2 }}>
        {positionId || applicantId ? (
          //Back to prev page
          <BackButton onClick={handleNavigation} disabled={isNavigating}>
            <SvgArrowRight1 primarycolor="inherit" strokeWidth={2} />
          </BackButton>
        ) : (
          //Back to divar
          <BackButton disabled={isNavigating} onClick={handleNavigateToDivar}>
            <SvgAdd
              primarycolor="inherit"
              style={{
                transform: 'rotate(45deg) scale(1.5)',
                width: 24,
                height: 24,
              }}
            />
          </BackButton>
        )}
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderSection>
      {handleSearch ? (
        <SearchInput
          placeholder="جستجو..."
          value={value || ''}
          onChange={(e) => handleSearch(e.target.value)}
          sx={SearchInputStyle}
        />
      ) : null}
      {children}
    </Container>
  );
};

export { HeaderPositions };

const Container = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

const HeaderSection = styled(Stack)(() => ({
  flexDirection: 'row',
  position: 'relative',
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: 16,
  stroke: theme.palette.primary.main,
  path: {
    strokeWidth: 1.8,
  },
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  flexGrow: 1,
  color: theme.palette.text[16],
  ...theme.typography['body3.medium'],
}));

const SearchInputStyle = {
  '& .MuiInputBase-root': {
    boxShadow: '0px 5px 16px 0px rgba(106, 118, 137, 0.10)',
    backgroundColor: 'common.white',
    borderRadius: 50,
  },
  'input::placeholder': {
    color: 'grey.15',
  },
};
