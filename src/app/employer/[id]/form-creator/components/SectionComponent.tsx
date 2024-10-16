'use client';
import React, { SyntheticEvent, useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { ItemComponent } from '@/app/employer/[id]/form-creator/components/ItemComponent';
import {
  IDynamicField,
  IFormSection,
  TTypeData,
} from '@/app/employer/[id]/form-creator/type';
import { MenuButton } from '@/app/components/MenuButton';
import BottomSheet from '@/app/components/BottomSheet';

interface ISectionComponent {
  title: string;
  data: IFormSection;
  objectKey: TTypeData;
  handleAddDynamicField({
    key,
    dynamicFieldData,
    index,
  }: {
    key: TTypeData;
    dynamicFieldData: IDynamicField;
    index: number;
  }): void;
  handleRemoveDynamicField({ key, id }: { key: TTypeData; id: string }): void;
  handleRequiredField({
    key,
    index,
    checked,
  }: {
    key: TTypeData;
    index: number;
    checked: boolean;
  }): void;
  isLoadingFormFields: boolean;
}

const SectionComponent = ({
  title,
  data,
  objectKey,
  handleAddDynamicField,
  handleRemoveDynamicField,
  handleRequiredField,
  isLoadingFormFields,
}: ISectionComponent) => {
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
        pb: 3,
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
      {isLoadingFormFields
        ? 'loading...'
        : data?.staticFields?.map((item) => (
            <ItemComponent
              withoutOptions
              key={item.title}
              title={item.title}
              placeholder={item.placeholder}
            />
          ))}
      {data.dynamicFields.map((item, index) => (
        <ItemComponent
          key={item.title}
          title={item.title}
          handleDelete={() => {
            handleRemoveDynamicField({ key: objectKey, id: item.id });
          }}
          isRequired={item.isRequired}
          handleIsRequired={() => {
            handleRequiredField({
              key: objectKey,
              index,
              checked: !item.isRequired,
            });
          }}
        />
      ))}
      <MenuButton
        isOpen={open}
        onClick={handleClick}
        sx={{
          alignSelf: 'start',
          backgroundColor: 'secondary.1',
          fontSize: '16px',
        }}
      >
        افزودن سطر جدید
      </MenuButton>
      <BottomSheet handleClose={handleClose} open={open} title={'سطر جدید'}>
        <Stack sx={{ overflowY: 'auto', maxHeight: '100%' }}>
          {isLoadingFormFields
            ? 'loading...'
            : data?.bottomSheetItems?.map((option, index) => (
                <Box
                  key={option.id}
                  sx={{
                    p: 4,
                    borderBottom: '1px solid',
                    borderColor: 'grey.1',
                  }}
                >
                  <FormControlLabel
                    checked={data.dynamicFields.some(
                      (item) => item.id === option.id
                    )}
                    control={<Checkbox />}
                    label={
                      <Typography variant="body3" color="text.primary">
                        {option.title}
                      </Typography>
                    }
                    onChange={(e: SyntheticEvent, checked) => {
                      if (checked) {
                        handleAddDynamicField({
                          key: objectKey,
                          dynamicFieldData: {
                            id: option.id,
                            type: option.type,
                            title: option.title,
                            isRequired: false,
                          },
                          index: index,
                        });
                      } else {
                        handleRemoveDynamicField({
                          key: objectKey,
                          id: option.id,
                        });
                      }
                    }}
                  />
                </Box>
              ))}
        </Stack>
      </BottomSheet>
    </Stack>
  );
};

export { SectionComponent };
