import { Box, Paper } from '@mui/material';
import CreateForm from './CreateForm';

export default async function CreateStorePage() {
  return (
    <Paper
      sx={{
        p: 4,
      }}
    >
      <Box display={'flex'} mb={1} justifyContent={'space-between'}>
        <h6>Create store</h6>
      </Box>
      <CreateForm />
    </Paper>
  );
}
