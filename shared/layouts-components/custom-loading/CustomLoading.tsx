import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function CustomLoading() {
  return (
    <Box
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      position={'fixed'}
      zIndex={1000}
      left={0}
      right={0}
      width={'100%'}
      height={'100%'}
    >
      <CircularProgress />
    </Box>
  );
}
