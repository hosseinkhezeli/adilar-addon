import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export type TApplicantCard = {
  file?: File | null;
  candidateId: string;
  candidate: {
    fistName: string;
    lastName: string;
  };
  createdAt: string | Date;
  onClick?(): void;
};

export function useApplicantList() {
  const { push: navigateTo } = useRouter();
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState<string>();
  function handleNavigate() {
    navigateTo(`${pathName}/3`);
  }

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  return { applicantMock, searchValue, handleSearch, handleNavigate };
}

const applicantMock: TApplicantCard[] = [
  {
    file: null,
    candidateId: '10001',
    candidate: {
      fistName: 'علی',
      lastName: 'احمدی',
    },
    createdAt: '2024-09-15T10:00:00Z',
  },
  {
    file: null,
    candidateId: '10002',
    candidate: {
      fistName: 'مریم',
      lastName: 'محمدی',
    },
    createdAt: '2024-09-17T12:30:00Z',
  },
  {
    file: null,
    candidateId: '10003',
    candidate: {
      fistName: 'سعید',
      lastName: 'کوهی',
    },
    createdAt: '2024-09-20T09:15:00Z',
  },
  {
    file: null,
    candidateId: '10004',
    candidate: {
      fistName: 'فاطمه',
      lastName: 'رضایی',
    },
    createdAt: '2024-09-22T14:45:00Z',
  },
  {
    file: null,
    candidateId: '10005',
    candidate: {
      fistName: 'حمید',
      lastName: 'احمدی',
    },
    createdAt: '2024-09-25T16:00:00Z',
  },
  {
    file: null,
    candidateId: '10006',
    candidate: {
      fistName: 'نگار',
      lastName: 'کریمی',
    },
    createdAt: '2024-09-28T11:30:00Z',
  },
  {
    file: null,
    candidateId: '10007',
    candidate: {
      fistName: 'امیر',
      lastName: 'حسینی',
    },
    createdAt: '2024-10-01T08:20:00Z',
  },
  {
    file: null,
    candidateId: '10008',
    candidate: {
      fistName: 'شهرزاد',
      lastName: 'زاهدی',
    },
    createdAt: '2024-10-03T13:10:00Z',
  },
  {
    file: null,
    candidateId: '10009',
    candidate: {
      fistName: 'رضا',
      lastName: 'سلیمانی',
    },
    createdAt: '2024-10-05T15:25:00Z',
  },
  {
    file: null,
    candidateId: '10010',
    candidate: {
      fistName: 'سارا',
      lastName: 'نیکوکار',
    },
    createdAt: '2024-10-06T17:40:00Z',
  },
];
