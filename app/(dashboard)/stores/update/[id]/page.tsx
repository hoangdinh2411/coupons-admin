import { Box, Paper } from '@mui/material';
import { getStoreById } from '@/services/store.service';
import { notFound } from 'next/navigation';
import Breadcrumb from '../../Breadcrumb';
import UpdateForm from './UpdateForm';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import { Suspense } from 'react';

export default async function StoreFormPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    return notFound();
  }
  let res = await getStoreById(id);
  if (!res.success || !res.data) {
    notFound();
  }
  return (
    <Suspense fallback={<CustomLoading />}>
      <Paper
        sx={{
          p: 4,
        }}
      >
        <Breadcrumb />
        <Box display={'flex'} mb={1} justifyContent={'space-between'}>
          <h6>Update store</h6>
        </Box>
        <UpdateForm item={res.data} />
      </Paper>
    </Suspense>
  );
}
