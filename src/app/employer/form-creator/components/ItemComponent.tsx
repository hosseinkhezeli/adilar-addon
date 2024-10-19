import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CustomSwitch } from '@/app/components/CustomSwitch';
import { DeleteButton } from '@/app/components/DeleteButton';

interface IItemComponent {
  title: string;
  placeholder?: string;
  withoutOptions?: boolean;
  handleDelete?(): void;
  isRequired?: boolean;
  handleIsRequired?(): void;
}

const ItemComponent = ({
  placeholder = 'اختیاری',
  title = '',
  withoutOptions,
  isRequired,
  handleDelete,
  handleIsRequired,
}: IItemComponent) => {
  return (
    <Stack>
      <Typography variant="body3" color="grey.8">
        {title}
      </Typography>
      <Stack direction="row" gap={4} alignItems="center">
        <Box
          sx={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            flexBasis: '0%',
            flexGrow: 1,
            px: 2,
            borderRadius: 2.5,
            border: '1px solid',
            borderColor: 'grey.2',
            backgroundColor: 'background.1',
          }}
        >
          <Typography variant="body3" color="grey.4">
            {isRequired ? 'اجباری' : placeholder}
          </Typography>
        </Box>
        {!withoutOptions && (
          <Stack direction="row" gap={3}>
            <CustomSwitch
              label={<Typography variant="body3">اجباری</Typography>}
              formControlLableProps={{
                checked: isRequired,
                onChange() {
                  handleIsRequired?.();
                },
              }}
            />
            <DeleteButton
              iconButtonProps={{
                onClick: handleDelete,
              }}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export { ItemComponent };
