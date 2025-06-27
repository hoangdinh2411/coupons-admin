import { Box, Paper } from '@mui/material';
import Breadcrumb from '../Breadcrumb';
import CreateForm from './CreateForm';

export default function CreateStorePage() {
  return (
    <Paper
      sx={{
        p: 4,
      }}
    >
      <Breadcrumb />
      <Box display={'flex'} mb={1} justifyContent={'space-between'}>
        <h6>Create store</h6>
      </Box>
      <CreateForm />
    </Paper>
  );
}
