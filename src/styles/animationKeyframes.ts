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
