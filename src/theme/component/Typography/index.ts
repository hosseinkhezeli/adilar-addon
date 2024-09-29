import React from 'react';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    'body1.medium': React.CSSProperties;
    'body2.medium': React.CSSProperties;
    'body3.medium': React.CSSProperties;
    'body1.bold': React.CSSProperties;
    'body2.bold': React.CSSProperties;
    'body3.bold': React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    'caption1.bold': React.CSSProperties;
    'caption2.bold': React.CSSProperties;
    'caption3.bold': React.CSSProperties;
    'caption4.bold': React.CSSProperties;
    'caption1.medium': React.CSSProperties;
    'caption2.medium': React.CSSProperties;
    'caption3.medium': React.CSSProperties;
    'caption4.medium'?: React.CSSProperties;
    'caption1.semiBold'?: React.CSSProperties;
    'caption2.semiBold'?: React.CSSProperties;
    'caption3.semiBold'?: React.CSSProperties;
    'caption4.semiBold'?: React.CSSProperties;
    'body1.semiBold'?: React.CSSProperties;
    'body2.semiBold'?: React.CSSProperties;
    'body3.semiBold'?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    'body1.medium'?: React.CSSProperties;
    'body2.medium'?: React.CSSProperties;
    'body3.medium'?: React.CSSProperties;
    'body1.semiBold'?: React.CSSProperties;
    'body2.semiBold'?: React.CSSProperties;
    'body3.semiBold'?: React.CSSProperties;
    'body1.bold'?: React.CSSProperties;
    'body2.bold'?: React.CSSProperties;
    'body3.bold'?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    caption4?: React.CSSProperties;
    'caption1.semiBold'?: React.CSSProperties;
    'caption2.semiBold'?: React.CSSProperties;
    'caption3.semiBold'?: React.CSSProperties;
    'caption4.semiBold'?: React.CSSProperties;
    'caption1.bold'?: React.CSSProperties;
    'caption2.bold'?: React.CSSProperties;
    'caption3.bold'?: React.CSSProperties;
    'caption4.bold'?: React.CSSProperties;
    'caption1.medium'?: React.CSSProperties;
    'caption2.medium'?: React.CSSProperties;
    'caption3.medium'?: React.CSSProperties;
    'caption4.medium'?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    lime: true;
  }

  interface TypographyPropsVariantOverrides {
    title: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
    button: false;
    caption: false;
    body1: true;
    body2: true;
    body3: true;
    'body1.medium': true;
    'body2.medium': true;
    'body3.medium': true;
    'body1.bold': true;
    'body2.bold': true;
    'body3.bold': true;
    'body1.semiBold': true;
    'body2.semiBold': true;
    'body3.semiBold': true;
    caption1: true;
    caption2: true;
    caption3: true;
    caption4: true;
    'caption1.semiBold': true;
    'caption2.semiBold': true;
    'caption3.semiBold': true;
    'caption4.semiBold': true;
    'caption1.bold': true;
    'caption2.bold': true;
    'caption3.bold': true;
    'caption4.bold': true;
    'caption1.medium': true;
    'caption2.medium': true;
    'caption3.medium': true;
    'caption4.medium': true;
  }
}

export const typography = {
  fontFamily: 'inherit',

  h1: {
    fontWeight: 700,
    fontSize: 'clamp(34px,6.8vw,46px)',
    lineHeight: 'clamp(58px,11vw,75px)',
  },

  h2: {
    fontWeight: 700,
    fontSize: 'clamp(32px,6.8vw,41px)',
    lineHeight: 'clamp(52px,11vw,67px)',
  },

  h3: {
    fontWeight: 700,
    fontSize: 'clamp(28px,5.3vw,36px)',
    lineHeight: 'clamp(45px,10vw,58px)',
  },

  h4: {
    fontWeight: 700,
    fontSize: 'clamp(25px,4.8vw,32px)',
    lineHeight: 'clamp(40px,7.9vw,52px)',
  },

  h5: {
    fontWeight: 700,
    fontSize: 'clamp(22px,4.3vw,29px)',
    lineHeight: 'clamp(35px,7vw,47px)',
  },

  h6: {
    fontWeight: 700,
    fontSize: 'clamp(20px,3.8vw,26px)',
    lineHeight: 'clamp(32px,6.2vw,42px)',
  },

  body1: {
    fontWeight: 400,
    fontSize: 'clamp(18px,3.3vw,22px)',
    lineHeight: 'clamp(31px,5.7vw,37px)',
  },

  'body1.medium': {
    fontWeight: 500,
    fontSize: 'clamp(18px,3.3vw,22px)',
    lineHeight: 'clamp(31px,5.7vw,37px)',
  },

  'body1.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(18px,3.3vw,22px)',
    lineHeight: 'clamp(31px,5.7vw,37px)',
  },
  'body1.bold': {
    fontWeight: 700,
    fontSize: 'clamp(18px,3.3vw,22px)',
    lineHeight: 'clamp(31px,5.7vw,37px)',
  },

  body2: {
    fontWeight: 400,
    fontSize: 'clamp(16px,3vw,20px)',
    lineHeight: 'clamp(28px,5.3vw,34px)',
  },

  'body2.medium': {
    fontWeight: 500,
    fontSize: 'clamp(16px,3vw,20px)',
    lineHeight: 'clamp(28px,5.3vw,34px)',
  },
  'body2.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(16px,3vw,20px)',
    lineHeight: 'clamp(28px,5.3vw,34px)',
  },

  'body2.bold': {
    fontWeight: 700,
    fontSize: 'clamp(16px,3vw,20px)',
    lineHeight: 'clamp(28px,5.3vw,34px)',
  },

  body3: {
    fontWeight: 400,
    fontSize: 'clamp(14px,2.7vw,18px)',
    lineHeight: 'clamp(28px,4.9vw,31px)',
  },

  'body3.medium': {
    fontWeight: 500,
    fontSize: 'clamp(14px,2.7vw,18px)',
    lineHeight: 'clamp(28px,4.9vw,31px)',
  },

  'body3.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(14px,2.7vw,18px)',
    lineHeight: 'clamp(28px,4.9vw,31px)',
  },
  'body3.bold': {
    fontWeight: 700,
    fontSize: 'clamp(14px,2.7vw,18px)',
    lineHeight: 'clamp(28px,4.9vw,31px)',
  },

  caption1: {
    fontWeight: 500,
    fontSize: 'clamp(10px,1.85vw,11px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },

  'caption1.medium': {
    fontWeight: 500,
    fontSize: 'clamp(12px,2.35vw,16px)',
    lineHeight: 'clamp(28px,4.5vw,31px)',
  },

  'caption1.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(12px,2.35vw,16px)',
    lineHeight: 'clamp(28px,4.5vw,31px)',
  },
  'caption1.bold': {
    fontWeight: 700,
    fontSize: 'clamp(12px,2.35vw,16px)',
    lineHeight: 'clamp(28px,4.5vw,31px)',
  },

  caption2: {
    fontWeight: 400,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
  },

  'caption2.medium': {
    fontWeight: 500,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
  },
  'caption2.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
  },
  'caption2.bold': {
    fontWeight: 700,
    fontSize: 'clamp(11px,2.2vw,14px)',
    lineHeight: 'clamp(20px,3.85vw,24px)',
  },

  caption3: {
    fontWeight: 400,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },

  'caption3.medium': {
    fontWeight: 500,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },
  'caption3.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },

  'caption3.bold': {
    fontWeight: 700,
    fontSize: 'clamp(10px,1.85vw,12px)',
    lineHeight: 'clamp(18px,3.31vw,21px)',
  },
  caption4: {
    fontWeight: 400,
    fontSize: 'clamp(9px,1.6vw,10px)',
    lineHeight: 'clamp(16px,3vw,20px)',
  },

  'caption4.medium': {
    fontWeight: 500,
    fontSize: 'clamp(9px,1.6vw,10px)',
    lineHeight: 'clamp(16px,3vw,20px)',
  },
  'caption4.semiBold': {
    fontWeight: 600,
    fontSize: 'clamp(9px,1.6vw,10px)',
    lineHeight: 'clamp(16px,3vw,20px)',
  },

  'caption4.bold': {
    fontWeight: 700,
    fontSize: 'clamp(9px,1.6vw,10px)',
    lineHeight: 'clamp(16px,3vw,20px)',
  },
};
