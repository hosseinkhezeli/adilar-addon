import {
  useGetAdByDivarPostToken,
  useGetFormFields,
  useSubmitAdForm,
} from '@/services/api/employer/hooks';
import { useMemo, useState, useEffect } from 'react';
import { baseData } from '../constant';
import { TAllData, TTypeData, IDynamicField } from '../type';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { TAdFormDto } from '@/services/api/employer/types';
import { enqueueSnackbar } from 'notistack';

const PRIORITY_START_POINT = 4;

type TForm = TAdFormDto;

export function useFormSection() {
  //Dependencies
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const { mutateAsync: submitAdForm, isPending: isSubmittingAdForm } =
    useSubmitAdForm();
  const { data: adData, isLoading: isLoadingAdData } =
    useGetAdByDivarPostToken(postToken);

  const form = useForm<TForm>({
    defaultValues: {
      isResumeUploadingRequired: false,
      name: '',
      addFormFieldsDto: [],
    },
  });

  const {
    fields,
    append: addField,
    remove: removeField,
    update: updateField,
  } = useFieldArray({
    control: form.control,
    name: 'addFormFieldsDto',
    keyName: '_id',
  });

  const { data: formFields, isLoading: isLoadingFormFields } =
    useGetFormFields();

  const baseInfoBottomSheetItems = useMemo(() => {
    return formFields?.map((item) => ({
      id: item.id,
      type: item.type,
      title: item.name,
      checked: item?.isRequiredByDefault,
    }));
  }, [formFields?.length, isLoadingFormFields]);

  const [allData, setAllData] = useState<TAllData>(() => ({
    ...baseData,
    baseInfo: {
      ...baseData.baseInfo,
      bottomSheetItems: [],
    },
  }));

  // Handlers

  useEffect(() => {
    if (adData) {
      form.setValue('name', adData.title);
    }
  }, [adData, isLoadingAdData]);

  useEffect(() => {
    if (baseInfoBottomSheetItems && baseInfoBottomSheetItems.length > 0) {
      const nonRequiredByDefaultFields = baseInfoBottomSheetItems.filter(
        (item) => !item.checked
      );
      const requiredByDefaultFields = baseInfoBottomSheetItems
        .filter((item) => item.checked)
        .map((item) => ({
          ...item,
          placeholder: 'اجباری',
        }));
      setAllData((prevData) => ({
        ...prevData,
        baseInfo: {
          ...prevData.baseInfo,
          staticFields: requiredByDefaultFields || [],
          bottomSheetItems: nonRequiredByDefaultFields || [],
        },
      }));
      requiredByDefaultFields?.forEach((item, idx) => {
        addField({
          isRequired: item?.checked,
          priority: idx + 1,
          fieldId: item?.id,
        });
      });
    }
  }, [baseInfoBottomSheetItems, isLoadingFormFields]);

  function handleAddDynamicField({
    key,
    dynamicFieldData,
    index,
  }: {
    key: TTypeData;
    dynamicFieldData: IDynamicField;
    index: number;
  }) {
    const newData = { ...allData };
    newData[key].dynamicFields = [
      ...newData[key].dynamicFields,
      dynamicFieldData,
    ];
    addField({
      isRequired: dynamicFieldData?.isRequired,
      priority: index + 4,
      fieldId: dynamicFieldData?.id,
    });
    setAllData(newData);
  }

  function handleRemoveDynamicField({
    key,
    id,
  }: {
    key: TTypeData;
    id: string;
  }) {
    const newData = { ...allData };
    const newDynamicFields = newData[key].dynamicFields.filter(
      (item) => item.id != id
    );
    const fieldIndex = fields?.findIndex((item) => item.fieldId === id);
    if (fieldIndex) {
      removeField(fieldIndex);
    }
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
    updateField(index + 3, {
      isRequired: newData[key].dynamicFields[index]?.isRequired,
      priority: index + 4,
      fieldId: newData[key].dynamicFields[index]?.id,
    });
  }
  const handleSubmitForm = (data: TAdFormDto) => {
    console.log('HandleSubmitForm');
    submitAdForm(data, {
      onSuccess: () => {
        enqueueSnackbar({
          message: 'فرم با موفقیت ساخته شد',
          variant: 'success',
        });
        console.log('HandleSubmitForm onSuccess');
      },
      onError: () => {
        enqueueSnackbar({
          message: 'خطایی در ساخت فرم رخ داده است',
          variant: 'error',
        });
        console.log('HandleSubmitForm onError');
      },
      onSettled: () => {
        console.log('HandleSubmitForm onSettled');
      },
    });
  };

  return {
    formFields,
    isLoadingFormFields,
    allData,
    handleAddDynamicField,
    handleRemoveDynamicField,
    handleRequiredField,
    PRIORITY_START_POINT,
    form,
    handleSubmitForm,
    isSubmittingAdForm,
  };
}