'use client';
//@3rd-party
import React from 'react';
import Image from 'next/image';
//________________________________________________________________

//@Mui
import { Button, Stack, styled, Typography } from '@mui/material';
//________________________________________________________________

//@Hooks
import { useIntroduction } from '../hooks/useIntroduction';
//________________________________________________________________

//@Assets
import SvgAdilar from '@/assets/images/adilar-logo.svg';
import AdilarAvatarsImage from '@/assets/images/adilar-avatars.png';
//________________________________________________________________

export function Introduction() {
  const { isNavigating, handleSubmit } = useIntroduction();

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
        <Title>فرم استخدامی و دسته بندی سریع رزومه‌ها</Title>
        <Description>
          با آدیلار به راحتی رزومه های دریافتی را مدیریت کنید و استخدام هوشمند و
          حرفه ای را تجربه کنید{' '}
        </Description>
      </TextContainer>
      <Button
        variant={'contained'}
        fullWidth
        onClick={handleSubmit}
        isLoading={isNavigating}
      >
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
