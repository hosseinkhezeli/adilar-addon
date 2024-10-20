import { Typography, styled } from '@mui/material';
import React, { useReducer, useEffect } from 'react';

type TState = { seconds: number };
type TAction = { type: 'TICK' | 'RESET' };

const initialState: TState = { seconds: 10 };

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'TICK':
      return { seconds: state.seconds - 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

type TCountDownTimer = {
  onTimeUp: () => void;
};

export function CountdownTimer({ onTimeUp }: TCountDownTimer) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { seconds } = state;

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (seconds === 0) {
      // onTimeUp();
    }
  }, [seconds]);

  return (
    <Timer>
      {`00:${seconds?.toString().padStart(2, '0')}`} تا رفتن به فرم ساز
    </Timer>
  );
}

export default CountdownTimer;

const Timer = styled(Typography)(({ theme }) => ({
  fontSize: theme?.typography['body2'].fontSize,
  fontWeight: theme?.typography['body2'].fontWeight,
  color: theme.palette.text[12],
  textAlign: 'center',
}));
