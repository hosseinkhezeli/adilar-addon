import { isDivarLink } from '@/utils/methods';
import { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

import SvgSuccess from '@/assets/images/success.svg';
import SvgError from '@/assets/images/error.svg';
import SvgPending from '@/assets/images/pending.svg';

const resultDictionary: {
  [key: string]: {
    image: typeof SvgPending;
    color: string;
    title: string;
  };
} = {
  Pending: {
    image: SvgPending,
    color: '#545454',
    title: 'قبلا برای این موقعیت شغلی رزومه ارسال کرده اید',
  },
  Rejected: {
    image: SvgError,
    color: 'error.main',
    title: 'متاسفانه رزومه‌ی شما مورد پذیرش واقع نشد.',
  },
  Accepted: {
    image: SvgSuccess,
    color: 'success.main',
    title: 'تبریک! رزومه‌ی شما برای این موقعیت شغلی مورد پذیرش قرار گرفت.',
  },
};

export function useSubmissionResult() {
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();
  const postToken = searchParams.get('post_token');
  const submission_state = searchParams.get('submission_state');
  const [isNavigating, startTransition] = useTransition();
  const onClickReturn = () => {
    startTransition(() => {
      if (isDivarLink(`https://divar.ir/v/${postToken}`)) {
        navigateTo(`https://divar.ir/v/${postToken}` as Route);
      }
    });
  };
  return {
    isNavigating,
    onClickReturn,
    submission_state_property: resultDictionary[submission_state || ''],
  };
}
