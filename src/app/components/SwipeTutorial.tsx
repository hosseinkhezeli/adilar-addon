import React from 'react';
import { Button, Modal, Stack, Typography } from '@mui/material';
import swipePic from '@/assets/images/tutorial-swipe.svg';
import Image from 'next/image';

interface ISwipeTutorial {
  open: boolean;
  hintText: string;
  withoutCard?: boolean;
  handleNextModal(): void;
}

const SwipeTutorial = ({
  open,
  handleNextModal,
  hintText,
  withoutCard,
}: ISwipeTutorial) => {
  return (
    <Modal open={open}>
      <Stack
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 160,
          outline: 'none',
          alignItems: 'center',
        }}
      >
        {/* card */}
        {!withoutCard && (
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 4,
              backgroundColor: 'common.white',
              minHeight: 56,
              alignSelf: 'stretch',
            }}
          >
            <Typography variant="body3.medium">مصطفی فهیمی پور</Typography>
            <Stack direction="row" gap={1} position="relative" pr={4}>
              <Typography variant="caption3">تاریخ ارسال:</Typography>
              <Typography variant="caption3">
                {new Date().toLocaleString('fa', {
                  dateStyle: 'short',
                })}
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 6,
                  height: 6,
                  borderRadius: '100%',
                  backgroundColor: 'info.3',
                }}
              />
            </Stack>
          </Stack>
        )}

        {/* swipe pic */}
        <Image src={swipePic} width={60} height={60} alt={'swiping hand'} />

        {/* hint */}
        <Stack
          sx={{
            px: 4,
          }}
        >
          <Typography
            variant="body3.medium"
            color="common.white"
            sx={{
              py: 3,
              maxWidth: 312,
            }}
          >
            {hintText}
          </Typography>

          <Button
            variant="contained"
            sx={{
              maxWidth: 'fit-content',
            }}
            onClick={handleNextModal}
          >
            متوجه شدم
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export { SwipeTutorial };
