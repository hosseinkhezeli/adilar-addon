'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
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
    baseInfo: {
      ...baseData.baseInfo,
      bottomSheetItems: baseInfoBottomSheetItems,
    },
    education: baseData.education,
  }));

  //   function handleAddDynamicField({
  //     key,
  //     dynamicFieldData,
  //   }: {
  //     key: TTypeData;
  //     dynamicFieldData: IDynamicField;
  //   }) {
  //     setAllData((prevData) => {
  //       const newData = { ...prevData };
  //       newData[key].dynamicFields.push(dynamicFieldData);
  //       return newData;
  //     });
  //   }

  //   function handleRemoveDynamicField({
  //     key,
  //     id,
  //   }: {
  //     key: TTypeData;
  //     id: number;
  //   }) {
  //     setAllData((prevData) => {
  //       const newData = { ...prevData };
  //       const newDynamicFields = newData[key].dynamicFields.filter(
  //         (item) => item.id != id
  //       );
  //       newData[key].dynamicFields = [...newDynamicFields];

  //       return newData;
  //     });
  //   }

  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection="column"
      px={4}
      pt={6}
      gap={10}
    >
      {Object.keys(allData).map((key) => (
        <SectionComponent
          key={key}
          title={allData[key as TTypeData].title}
          data={allData[key as TTypeData]}
          //   handleRemoveDynamicField={handleRemoveDynamicField}
          //   handleAddDynamicField={handleAddDynamicField}
        />
      ))}
    </Box>
  );
};

export { FormSection };
