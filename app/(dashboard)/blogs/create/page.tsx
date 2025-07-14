import { Box, Paper } from '@mui/material';
import CreateForm from './CreateForm';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import { Suspense } from 'react';

export default function CreatePostPage() {
  return (
    <Suspense fallback={<CustomLoading />}>
      <Paper
        sx={{
          p: 4,
        }}
      >
        <Box display={'flex'} mb={1} justifyContent={'space-between'}>
          <h6>Add new blog</h6>
        </Box>
        <CreateForm />
      </Paper>
    </Suspense>
  );
}
