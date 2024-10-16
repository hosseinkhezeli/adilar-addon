import { CustomSwitch } from '@/app/components/CustomSwitch';
import { Checkbox, Stack, Typography } from '@mui/material';

import { Box } from '@mui/material';

type TResumeItemComponentProps = {
  isChecked: boolean;
  onChange: () => void;
};

export function ResumeItemComponent({
  isChecked,
  onChange,
}: TResumeItemComponentProps) {
  return (
    <Stack
      direction="row"
      gap={4}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: '1px solid',
        borderColor: 'text.8',
        borderRadius: 2.5,
        p: 2,
      }}
    >
      <Box>
        <Checkbox
          checked
          disabled
          sx={{
            pointerEvents: 'none',
            opacity: 0.5,
            filter: 'grayscale(1)',
          }}
        />
        <Typography variant="body3" color="grey.8">
          بارگذاری فایل رزومه
        </Typography>
      </Box>
      <CustomSwitch
        label={'اجباری'}
        formControlLableProps={{
          checked: isChecked,
          onChange() {
            onChange();
          },
        }}
      />
    </Stack>
  );
}
