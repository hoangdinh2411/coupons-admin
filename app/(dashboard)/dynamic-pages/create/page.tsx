export const dynamic = 'force-dynamic';
import { Box, Paper } from '@mui/material';
import Breadcrumb from '../Breadcrumb';
import CreateForm from './CreateForm';
import { Suspense } from 'react';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';

export default function CreatePage() {
  return (
    <Paper
      sx={{
        p: 4,
      }}
    >
      <Breadcrumb />
      <Box display={'flex'} mb={1} justifyContent={'space-between'}>
        <h6>Create page</h6>
      </Box>
      <Suspense fallback={<CustomLoading />}>
        <CreateForm />
      </Suspense>
    </Paper>
  );
}
