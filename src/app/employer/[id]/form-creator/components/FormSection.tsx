'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { SectionComponent } from '@/app/employer/[id]/form-creator/components/SectionComponent';
import {
  IBottomSheetItem,
  IDynamicField,
  TAllData,
  TTypeData,
} from '@/app/employer/[id]/form-creator/type';
import { baseData } from '@/app/employer/[id]/form-creator/constant';

const baseInfoBottomSheetItems: IBottomSheetItem[] = [
  {
    id: 1,
    type: 'NationalCode',
    title: 'کد ملی',
    checked: false,
  },
  {
    id: 2,
    type: 'Date',
    title: 'تاریخ تولد',
    checked: false,
  },
];

const FormSection = () => {
  const [allData, setAllData] = useState<TAllData>(() => ({
    ...baseData,
    baseInfo: {
      ...baseData.baseInfo,
      bottomSheetItems: baseInfoBottomSheetItems,
    },
    // education: {
    //   ...baseData.education,
    //   bottomSheetItems: baseInfoBottomSheetItems,
    // },
  }));

  function handleAddDynamicField({
    key,
    dynamicFieldData,
  }: {
    key: TTypeData;
    dynamicFieldData: IDynamicField;
  }) {
    const newData = { ...allData };
    newData[key].dynamicFields = [
      ...newData[key].dynamicFields,
      dynamicFieldData,
    ];

    setAllData(newData);
  }

  function handleRemoveDynamicField({
    key,
    id,
  }: {
    key: TTypeData;
    id: number;
  }) {
    const newData = { ...allData };
    const newDynamicFields = newData[key].dynamicFields.filter(
      (item) => item.id != id
    );
    newData[key].dynamicFields = [...newDynamicFields];
    setAllData(newData);
  }

  function handleRequiredField({
    key,
    index,
    checked,
  }: {
    key: TTypeData;
    index: number;
    checked: boolean;
  }) {
    const newData = { ...allData };
    newData[key].dynamicFields[index].isRequired = checked;
    setAllData(newData);
  }

  return (
    <>
      <Typography
        variant="body3.medium"
        color="text.16"
        py={2}
        borderBottom="1px solid"
        borderColor="text.8"
        width="100%"
        textAlign="center"
      >
        فرم ساز
      </Typography>
      <Box
        width={'100%'}
        display={'flex'}
        flexDirection="column"
        flexGrow={1}
        px={4}
        py={6}
        gap={10}
        overflow="auto"
        bgcolor="background.3"
      >
        {Object.keys(allData).map((key) => (
          <SectionComponent
            key={key}
            title={allData[key as TTypeData].title}
            data={allData[key as TTypeData]}
            objectKey={key as TTypeData}
            handleRemoveDynamicField={handleRemoveDynamicField}
            handleAddDynamicField={handleAddDynamicField}
            handleRequiredField={handleRequiredField}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          mx: 4,
        }}
      >
        ثبت
      </Button>
    </>
  );
};

export { FormSection };
