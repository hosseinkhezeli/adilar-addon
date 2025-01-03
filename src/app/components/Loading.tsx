'use client';
import { rotate } from '@/styles/animationKeyframes';
import { Box, Stack, styled } from '@mui/material';
import React from 'react';

const AnimatedPath = styled('path')(({ index }: { index: number }) => ({
  opacity: 0,
  animation: `fadeInScale 1s linear infinite`,
  animationDelay: `${index * 0.1}s`,
  '@keyframes fadeInScale': {
    '0% ,100%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
  },
}));

export function SvgLoading() {
  return (
    <Stack
      maxWidth={'100vw'}
      width="100%"
      maxHeight={'100vh'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        sx={{
          animation: `${rotate} linear 1s infinite`,
          width: 64,
          height: 64,
          transformOrigin: '50% 50%',
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_314_7077)">
            <AnimatedPath
              index={0}
              d="M33.4545 0C31.8478 0 30.5453 1.3025 30.5453 2.90913V14.5455C30.5453 16.1521 31.8478 17.4546 33.4545 17.4546C35.0611 17.4546 36.3636 16.1521 36.3636 14.5455V2.90913C36.3636 1.3025 35.0611 0 33.4545 0Z"
              fill="#303246"
            />
            <AnimatedPath
              index={1}
              d="M11.0615 9.05285C9.92299 10.1865 9.91902 12.0285 11.0526 13.167L19.263 21.4129C20.3966 22.5514 22.2386 22.5553 23.3771 21.4217C24.5156 20.2881 24.5196 18.4461 23.386 17.3076L15.1756 9.06173C14.042 7.92322 12.2 7.91925 11.0615 9.05285Z"
              fill="#FF808B"
            />
            <AnimatedPath
              index={2}
              d="M57.3771 9.05285C58.5156 10.1865 58.5196 12.0285 57.386 13.167L49.1756 21.4129C48.042 22.5514 46.2 22.5553 45.0615 21.4217C43.923 20.2881 43.919 18.4461 45.0526 17.3076L53.263 9.06173C54.3966 7.92322 56.2386 7.91925 57.3771 9.05285Z"
              fill="#5352ED"
            />
            <AnimatedPath
              index={3}
              d="M1.03706 31.9085C1.01659 33.515 2.30239 34.834 3.90889 34.8544L15.5443 35.0027C17.1508 35.0231 18.4698 33.7374 18.4903 32.1309C18.5107 30.5244 17.2249 29.2054 15.6184 29.1849L3.98301 29.0367C2.37651 29.0162 1.05753 30.302 1.03706 31.9085Z"
              fill="#F7C42C"
            />
            <AnimatedPath
              index={4}
              d="M11.0405 54.3162C12.1674 55.4613 14.0094 55.476 15.1545 54.3491L23.4482 46.187C24.5933 45.0601 24.6081 43.2182 23.4811 42.073C22.3542 40.9279 20.5123 40.9132 19.3671 42.0401L11.0734 50.2022C9.92832 51.3291 9.91359 53.1711 11.0405 54.3162Z"
              fill="#303246"
            />
            <AnimatedPath
              index={5}
              d="M32.909 63.4837C34.5155 63.5003 35.8313 62.2112 35.8479 60.6047L35.9677 48.9689C35.9842 47.3624 34.6952 46.0466 33.0886 46.03C31.4821 46.0135 30.1663 47.3025 30.1497 48.909L30.0299 60.5448C30.0134 62.1513 31.3024 63.4672 32.909 63.4837Z"
              fill="#FF808B"
            />
            <AnimatedPath
              index={6}
              d="M65.4894 31.9089C65.4695 30.3024 64.1508 29.0162 62.5443 29.0362L50.9089 29.181C49.3024 29.201 48.0162 30.5196 48.0362 32.1261C48.0562 33.7326 49.3748 35.0188 50.9813 34.9988L62.6167 34.854C64.2232 34.834 65.5094 33.5154 65.4894 31.9089Z"
              fill="#5352ED"
            />
            <AnimatedPath
              index={7}
              d="M56.0841 55.0128C57.2357 53.8926 57.2612 52.0507 56.1409 50.8991L48.0272 42.558C46.907 41.4064 45.0651 41.3809 43.9135 42.5012C42.7619 43.6214 42.7364 45.4633 43.8567 46.6149L51.9704 54.956C53.0906 56.1076 54.9324 56.1331 56.0841 55.0128Z"
              fill="#F7C42C"
            />
          </g>
          <defs>
            <clipPath id="clip0_314_7077">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </Stack>
  );
}
