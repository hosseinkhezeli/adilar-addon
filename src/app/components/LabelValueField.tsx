import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
import { handleEmptyText } from '@/utils/methods';

export function LabelValue({
  fieldLabel,
  fieldValue,
  highlight,
  withoutColon = false,
  labelProps,
  valueProps,
}: {
  fieldLabel?: string | ReactNode | undefined;
  fieldValue?: string | ReactNode | undefined;
  highlight?: boolean;
  withoutColon?: boolean;
  labelProps?: TypographyProps;
  valueProps?: TypographyProps;
}) {
  return (
    <Typography
      component={typeof fieldLabel === 'string' ? 'p' : 'div'}
      variant={'caption3'}
      color={'text.12'}
      display={'flex'}
      {...labelProps}
    >
      {fieldLabel}
      {!withoutColon && ' : '}
      <Typography
        component={
          typeof fieldValue === 'string' || typeof fieldValue === 'number'
            ? 'span'
            : 'div'
        }
        variant={highlight ? 'caption2' : 'caption3'}
        {...(highlight && {
          color: 'secondary.main',
        })}
        mx={'4px'}
        {...valueProps}
      >
        {typeof fieldValue === 'string'
          ? handleEmptyText(fieldValue)
          : fieldValue}
      </Typography>
    </Typography>
  );
}
