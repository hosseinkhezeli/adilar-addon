import { Components, Theme } from '@mui/material/styles';
import { getColorByOwnerProps } from '@/utils/methods';
declare module '@mui/material/Button/Button' {
  export interface ButtonOwnProps {
    isLoading?: boolean;
  }
}
export const imageUrl =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOiBhdXRvOyBkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGNpcmNsZSBmaWxsPSIjODY4Njg2IiByPSIxMCIgY3k9IjUwIiBjeD0iODQiPgogICAgPGFuaW1hdGUgYmVnaW49IjBzIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMSIgdmFsdWVzPSIxMDswIiBrZXlUaW1lcz0iMDsxIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNTY4MTgxODE4MTgxODE4MnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIj48L2FuaW1hdGU+CiAgICA8YW5pbWF0ZSBiZWdpbj0iMHMiIHZhbHVlcz0iIzg2ODY4NjsjODY4Njg2OyM4Njg2ODY7Izg2ODY4NjsjODY4Njg2IiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIGNhbGNNb2RlPSJkaXNjcmV0ZSIgZHVyPSIyLjI3MjcyNzI3MjcyNzI3M3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJmaWxsIj48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0iIzg2ODY4NiIgcj0iMTAiIGN5PSI1MCIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBiZWdpbj0iMHMiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjIuMjcyNzI3MjcyNzI3MjczcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBiZWdpbj0iMHMiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiB2YWx1ZXM9IjE2OzE2OzE2OzUwOzg0IiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMi4yNzI3MjcyNzI3MjcyNzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iY3giPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGNpcmNsZSBmaWxsPSIjODY4Njg2IiByPSIxMCIgY3k9IjUwIiBjeD0iNTAiPgogIDxhbmltYXRlIGJlZ2luPSItMC41NjgxODE4MTgxODE4MTgycyIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIHZhbHVlcz0iMDswOzEwOzEwOzEwIiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMi4yNzI3MjcyNzI3MjcyNzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciI+PC9hbmltYXRlPgogIDxhbmltYXRlIGJlZ2luPSItMC41NjgxODE4MTgxODE4MTgycyIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIHZhbHVlcz0iMTY7MTY7MTY7NTA7ODQiIGtleVRpbWVzPSIwOzAuMjU7MC41OzAuNzU7MSIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIyLjI3MjcyNzI3MjcyNzI3M3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJjeCI+PC9hbmltYXRlPgo8L2NpcmNsZT48Y2lyY2xlIGZpbGw9IiM4Njg2ODYiIHI9IjEwIiBjeT0iNTAiIGN4PSI4NCI+CiAgPGFuaW1hdGUgYmVnaW49Ii0xLjEzNjM2MzYzNjM2MzYzNjVzIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgdmFsdWVzPSIwOzA7MTA7MTA7MTAiIGtleVRpbWVzPSIwOzAuMjU7MC41OzAuNzU7MSIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIyLjI3MjcyNzI3MjcyNzI3M3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYmVnaW49Ii0xLjEzNjM2MzYzNjM2MzYzNjVzIiBrZXlTcGxpbmVzPSIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMSIgdmFsdWVzPSIxNjsxNjsxNjs1MDs4NCIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjIuMjcyNzI3MjcyNzI3MjczcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9ImN4Ij48L2FuaW1hdGU+CjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0iIzg2ODY4NiIgcj0iMTAiIGN5PSI1MCIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBiZWdpbj0iLTEuNzA0NTQ1NDU0NTQ1NDU0NnMiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiB2YWx1ZXM9IjA7MDsxMDsxMDsxMCIga2V5VGltZXM9IjA7MC4yNTswLjU7MC43NTsxIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjIuMjcyNzI3MjcyNzI3MjczcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBiZWdpbj0iLTEuNzA0NTQ1NDU0NTQ1NDU0NnMiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiB2YWx1ZXM9IjE2OzE2OzE2OzUwOzg0IiBrZXlUaW1lcz0iMDswLjI1OzAuNTswLjc1OzEiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMi4yNzI3MjcyNzI3MjcyNzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iY3giPjwvYW5pbWF0ZT4KPC9jaXJjbGU+PGc+PC9nPjwvZz48IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvIC0tPjwvc3ZnPgo=")';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'outlined',
    disableElevation: true,
    component: 'button',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 44,
      fontWeight: 700,
      borderWidth: 2,
      borderRadius: 8,
      '&.Mui-disabled': {
        backgroundColor: theme.palette.background[6],
      },
    }),
    text: ({ ownerState }) => ({
      ...(ownerState.isLoading
        ? {
            color: 'transparent',
            pointerEvents: 'none',
            filter: 'brightness(120%) saturate(0)',
            position: 'relative',
            '.MuiButton-startIcon': {
              display: 'none',
            },
            '.MuiButton-endIcon': {
              display: 'none',
            },
            '&::after': {
              content: '" "',
              backgroundImage: imageUrl,
              position: 'absolute',
              width: 36,
              height: 36,
            },
          }
        : {}),
    }),
    contained: ({ ownerState }) => ({
      ...(ownerState.isLoading
        ? {
            color: 'transparent',
            pointerEvents: 'none',
            filter: 'saturate(0)',
            position: 'relative',
            '.MuiButton-startIcon': {
              display: 'none',
            },
            '.MuiButton-endIcon': {
              display: 'none',
            },
            '&::after': {
              filter: 'brightness(200%) saturate(0)',
              content: '" "',
              backgroundImage: imageUrl,
              position: 'absolute',
              width: 36,
              height: 36,
            },
          }
        : {}),
    }),
    outlined: ({ theme, ownerState }) => ({
      borderColor: getColorByOwnerProps(ownerState?.color, theme),
      backgroundColor: theme.palette.background.default,
      ...(ownerState.isLoading
        ? {
            color: 'transparent',
            pointerEvents: 'none',
            filter: 'saturate(0)',
            position: 'relative',
            '.MuiButton-startIcon': {
              display: 'none',
            },
            '.MuiButton-endIcon': {
              display: 'none',
            },
            '&::after': {
              content: '" "',
              backgroundImage: imageUrl,
              position: 'absolute',
              width: 36,
              height: 36,
            },
          }
        : {}),
    }),
  },
};
