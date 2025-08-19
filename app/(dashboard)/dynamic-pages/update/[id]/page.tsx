import { Box, Paper } from '@mui/material';
import { notFound } from 'next/navigation';
import Breadcrumb from '../../Breadcrumb';
import UpdateForm from './UpdateForm';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import { Suspense } from 'react';
import { FAKE_DATA } from '../../fake.data';

export default async function PageForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const id = (await params).id;
  // if (!id) {
  //   return notFound();
  // }
  return (
    <Suspense fallback={<CustomLoading />}>
      <Paper
        sx={{
          p: 4,
        }}
      >
        <Breadcrumb />
        <Box display={'flex'} mb={1} justifyContent={'space-between'}>
          <h6>Update page</h6>
        </Box>
        <UpdateForm item={FAKE_DATA[0]} />
      </Paper>
    </Suspense>
  );
}
