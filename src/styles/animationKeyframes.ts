import { keyframes } from '@mui/material/styles';

export const pop = keyframes`
    0% {
        transform: translateY(-10%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }
`;
export const scaleDown = keyframes`
    0% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
`;
export const comingFromBottom = keyframes`
    0% {
        transform: translateY(200vh);
    }
    100% {
        transform: translateY(30vh);
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
