import { Box, Paper } from '@mui/material';
import { notFound } from 'next/navigation';
import UpdateForm from './UpdateForm';
import { getCouponsById } from '@/app/actions/coupon.service';

export default async function StoreFormPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (!id) {
    return notFound();
  }
  let res = await getCouponsById(id);
  if (res.success && res.data) {
    return (
      <Paper
        sx={{
          p: 4,
        }}
      >
        <Box display={'flex'} mb={1} justifyContent={'space-between'}>
          <h6>Update store</h6>
        </Box>
        <UpdateForm item={res.data} />
      </Paper>
    );
  }
}
