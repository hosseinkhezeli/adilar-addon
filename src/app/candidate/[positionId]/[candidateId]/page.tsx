import { InputListWithUseForm } from 'ideep-design-system-2';
import React from 'react';
import { PositionForm } from './components/PositionForm';

type TProps = {
  params: { positionId: string; candidateId: string };
};

const Page = ({ params }: TProps) => {
  return (
    <>
      <PositionForm />
      {/* Candidate Page for position {params?.positionId} as {params.candidateId} */}
    </>
  );
};

export default Page;

const mockData = [
  {
    name: 'Full Name',
    text: 'John Doe',
    type: 'Text', // FieldType.Text
    defaultPriority: 1,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Phone Number',
    text: '+1-234-567-8901',
    type: 'PhoneNumber', // FieldType.PhoneNumber
    defaultPriority: 2,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Address',
    text: '123 Main St, Springfield, USA',
    type: 'MultiLineText', // FieldType.MultiLineText
    defaultPriority: 3,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Date of Birth',
    text: '1990-01-01',
    type: 'Date', // FieldType.Date
    defaultPriority: 4,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'National ID',
    text: 'AB1234567C',
    type: 'NationalCode', // FieldType.NationalCode
    defaultPriority: 5,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Gender',
    text: 'Male',
    type: 'Select', // FieldType.Select
    defaultPriority: 6,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Hobbies',
    text: 'Reading, Traveling, Cooking',
    type: 'MultiSelect', // FieldType.MultiSelect
    defaultPriority: 7,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Resume',
    text: 'resume.pdf',
    type: 'File', // FieldType.File
    defaultPriority: 8,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Age',
    text: '33',
    type: 'Number', // FieldType.Number
    defaultPriority: 9,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Email Address',
    text: 'john.doe@example.com',
    type: 'Text', // FieldType.Text
    defaultPriority: 10,
    category: 'Personal', // FieldCategory.Personal
  },
  {
    name: 'Emergency Contact',
    text: '+1-987-654-3210',
    type: 'PhoneNumber', // FieldType.PhoneNumber
    defaultPriority: 11,
    category: 'Personal', // FieldCategory.Personal
  },
];
