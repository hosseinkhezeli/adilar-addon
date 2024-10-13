import { TAllData } from '@/app/employer/[id]/form-creator/type';

export const baseData: TAllData = {
  baseInfo: {
    title: 'اطلاعات شخصی',
    bottomSheetItems: [],
    staticFields: [
      {
        title: 'نام',
        placeholder: 'اجباری',
      },
      {
        title: 'نام خانوادگی',
        placeholder: 'اجباری',
      },
      {
        title: 'شماره موبایل',
        placeholder: 'اجباری',
      },
    ],
    dynamicFields: [],
  },
  // education: {
  //   title: 'تحصیلات',
  //   bottomSheetItems: [],
  //   staticFields: [
  //     // {
  //     //   title: 'نام',
  //     //   placeholder: 'اجباری',
  //     // },
  //     // {
  //     //   title: 'نام خانوادگی',
  //     //   placeholder: 'اجباری',
  //     // },
  //   ],
  //   dynamicFields: [],
  // },
};
