'use client';
import React from 'react';
import { Box, Stack } from '@mui/material';
import { scaleDown } from '@/styles/animationKeyframes';

export function AdilarLogo() {
  return (
    <Stack width={'100%'} height={'100%'} overflow={'hidden'}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scale(1.5)',
          animation: `${scaleDown} 0.5s ease forwards`,
          animationDelay: '3.2s',
        }}
      >
        <svg
          width="80"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {`
            .path1 {
              animation: moveToCenter 2s ease forwards;
              animation-delay: 0.5s;
            }
            .path2, .path3, .path4 {
             transform: translateY(calc(50vh - 80px));
            }
            .path2, .path3, .path4 {
              opacity: 0;
              animation: fadeIn 0.9s ease forwards;
            }
            .path2 {
              animation-delay: 2.6s;
            }
            .path3 {
              animation-delay: 2.9s;
            }
            .path4 {
              animation-delay: 2.3s;
            }
            @keyframes moveToCenter {
              0% {
                opacity: 0;
                transform: translateY(200vh);
              }
              100% {
                transform: translateY(calc(50vh - 80px));
                opacity: 1;
              }
            }
            @keyframes fadeIn {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
          </style>
          <g clipPath="url(#clip0_18_1550)">
            <path
              className="path1"
              d="M57.2164 76.4378L40.0816 52.8539L22.9469 76.4378C22.5367 77.0149 22.0161 77.5049 21.4153 77.8796C20.8145 78.2542 20.1454 78.506 19.4467 78.6204C18.7479 78.7348 18.0334 78.7095 17.3445 78.546C16.6556 78.3825 16.006 78.084 15.4332 77.6678C14.8604 77.2516 14.3758 76.7259 14.0075 76.1213C13.6391 75.5166 13.3943 74.8448 13.2872 74.1449C13.1802 73.4451 13.2129 72.7309 13.3836 72.0437C13.5544 71.3566 13.8596 70.7101 14.2818 70.1417L35.7931 40.5329C36.334 39.789 37.0575 39.1968 37.8937 38.8135C38.7298 38.4302 39.6506 38.2686 40.5674 38.3444C41.4841 38.4201 42.3659 38.7306 43.1279 39.246C43.8898 39.7614 44.5062 40.4643 44.9177 41.2869L65.8823 70.1423C66.3045 70.7107 66.6098 71.3572 66.7805 72.0444C66.9512 72.7315 66.984 73.4457 66.8769 74.1456C66.7698 74.8455 66.525 75.5172 66.1567 76.1219C65.7883 76.7266 65.3037 77.2522 64.7309 77.6684C64.1581 78.0846 63.5085 78.3831 62.8196 78.5467C62.1307 78.7102 61.4162 78.7355 60.7175 78.6211C60.0187 78.5067 59.3496 78.2549 58.7488 77.8803C58.148 77.5056 57.6275 77.0156 57.2173 76.4384L57.2164 76.4378Z"
              fill="#303246"
            />
            <path
              className="path2"
              d="M39.8956 1.35547H39.8954C36.8553 1.35547 34.3909 3.81993 34.3909 6.86001V24.7129C34.3909 27.753 36.8553 30.2175 39.8954 30.2175H39.8956C42.9357 30.2175 45.4002 27.753 45.4002 24.7129V6.86001C45.4002 3.81993 42.9357 1.35547 39.8956 1.35547Z"
              fill="#FF808B"
            />
            <path
              className="path3"
              d="M79.45 31.3896L79.45 31.3894C78.5105 28.4981 75.4051 26.9159 72.5138 27.8553L55.5347 33.3722C52.6434 34.3116 51.0611 37.417 52.0005 40.3083L52.0006 40.3085C52.94 43.1998 56.0455 44.7821 58.9367 43.8426L75.9159 38.3258C78.8072 37.3863 80.3895 34.2809 79.45 31.3896Z"
              fill="#5352ED"
            />
            <path
              className="path4"
              d="M27.7959 40.3092L27.7959 40.309C28.7353 37.4179 27.1531 34.3127 24.262 33.3733L7.28386 27.8568C4.39275 26.9174 1.28753 28.4996 0.348145 31.3907L0.348077 31.3909C-0.591305 34.282 0.990882 37.3872 3.88199 38.3266L20.8601 43.8432C23.7512 44.7825 26.8565 43.2004 27.7959 40.3092Z"
              fill="#F7C42C"
            />
          </g>
          <defs>
            <clipPath id="clip0_18_1550">
              <rect width="100%" height="100%" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </Stack>
  );
}
