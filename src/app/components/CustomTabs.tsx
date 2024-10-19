import React, { ReactNode, SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';

interface ICustomTabs {
  onChange?(e: SyntheticEvent, newValue: number): void;
  tabs: { label: ReactNode; icon?: ReactNode }[];
}
const CustomTabs = ({ onChange, tabs }: ICustomTabs) => {
  const [value, setValue] = useState<number>(0);

  function handleChangeTab(e: SyntheticEvent, newValue: number) {
    onChange?.(e, newValue);
    setValue(newValue);
  }

  return (
    <Tabs
      value={value}
      sx={{
        border: 'none',
        borderRadius: '50px',
        backgroundColor: 'secondary.1',
        height: 44,
        minHeight: 'unset',
        p: 2,
        '& .MuiTabs-flexContainer': {
          justifyContent: 'space-between',
        },
        '& .MuiButtonBase-root': {
          minHeight: 'unset',
          height: '100%',
          borderRadius: '50px',
          color: 'grey.15',
          zIndex: 9,
          '&.Mui-selected': {
            color: 'common.white',
            '& > *': {
              color: 'common.white',
            },
          },
        },
      }}
      variant="fullWidth"
      onChange={handleChangeTab}
      TabIndicatorProps={{
        sx: {
          height: '100%',
          borderRadius: '50px',
          backgroundColor: 'secondary.main',
        },
      }}
    >
      {tabs.map((item, index) => (
        <Tab key={index} label={item.label} value={index} />
      ))}
    </Tabs>
  );
};

export { CustomTabs };
