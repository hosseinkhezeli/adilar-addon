'use client';
import React from 'react';
import { Button, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import SvgAdilar from '@/assets/images/adilar-logo.svg';
import AdilarAvatarsImage from '@/assets/images/adilar-avatars.png';

export function Introduction() {
  return (
    <Container>
      <Image src={SvgAdilar} alt={"adilar's logo"} width={44} height={44} />
      <Image
        src={AdilarAvatarsImage}
        alt={"adilar's avatars"}
        quality={50}
        width={264}
        height={251}
        fetchPriority={'high'}
        placeholder={'blur'}
        //TODO fix blurDataUrl
        blurDataURL={'../../../../assets/images/adilar-avatars-blur.jpg'}
      />
      <TextContainer>
        <Title>ساخت فرم رزومه و دسته‌بندی رزومه‌ها</Title>
        <Description>
          ادیلارو راهی اسان برای ارسال رزومه سریع و راحت راهی اسان برای ارسال
          رزومه سریع و راحت راهی اسان برای ارسال رزومه سریع و راحت
        </Description>
      </TextContainer>
      <Button variant={'contained'} fullWidth>
        ادامه
      </Button>
    </Container>
  );
}

const Container = styled(Stack)(() => ({
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'space-evenly',
  padding: 24,
}));

const TextContainer = styled(Stack)(() => ({
  alignItems: 'center',
  maxWidth: '80%',
  margin: '0 auto',
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography['body2.medium'],
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography['caption1'],
  textAlign: 'justify',
}));
