import { Box, Paper } from '@mui/material';
import CreateForm from './CreateForm';

export default async function CreatePostPage() {
  return (
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
  );
}
