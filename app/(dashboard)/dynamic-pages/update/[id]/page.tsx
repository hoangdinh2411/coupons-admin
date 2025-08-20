import { Box, Paper } from '@mui/material';
import { notFound, redirect } from 'next/navigation';
import Breadcrumb from '../../Breadcrumb';
import UpdateForm from './UpdateForm';
import CustomLoading from '@/shared/layouts-components/custom-loading/CustomLoading';
import { Suspense } from 'react';
import { getPageById } from '@/services/page.service';
import { APP_ROUTE } from '@/constants/route';

export default async function PageForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id) {
    return redirect(APP_ROUTE.DYNAMIC_PAGES)
  }

  const res = await getPageById(id)
  if (!res.data) {
    notFound()
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
          <h6>Update page</h6>
        </Box>
        <UpdateForm item={res.data} />
      </Paper>
    </Suspense>
  );
}
