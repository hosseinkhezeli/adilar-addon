'use client';
import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { ItemComponent } from '@/app/employer/[id]/form-creator/components/ItemComponent';
import { IFormSection } from '@/app/employer/[id]/form-creator/type';
import { MenuButton } from '@/app/components/MenuButton';
import BottomSheet from '@/app/components/BottomSheet';

interface ISectionComponent {
  title: string;
  data: IFormSection;
}
const SectionComponent = ({ title, data }: ISectionComponent) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      sx={{
        px: 2,
        border: '1px solid',
        borderColor: 'text.8',
        borderRadius: 2,
        gap: 4,
      }}
    >
      <Typography
        variant="body3.medium"
        color="text.main"
        sx={{
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'text.8',
        }}
      >
        {title}
      </Typography>
      {data.staticFields.map((item) => (
        <ItemComponent
          withoutOptions
          key={item.title}
          title={item.title}
          placeholder={item.placeholder}
        />
      ))}
      <MenuButton
        isOpen={open}
        onClick={handleClick}
        sx={{ alignSelf: 'start' }}
      >
        افزودن سطر جدید
      </MenuButton>
      <BottomSheet handleClose={handleClose} open={open} title={'سطر جدید'}>
        {data.bottomSheetItems.map((option) => (
          <Box
            key={option.id}
            sx={{
              p: 4,
              borderBottom: '1px solid',
              borderColor: 'grey.1',
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body3" color="text.primary">
                  {option.title}
                </Typography>
              }
            />
          </Box>
        ))}
      </BottomSheet>
    </Stack>
  );
};

export { SectionComponent };
