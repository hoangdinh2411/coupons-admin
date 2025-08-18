import toast from 'react-hot-toast';

export async function refreshCacheClient(data: {
  paths: string[];
  tags: string[];
}) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_CLIENT_DOMAIN! + '/api/refresh-cache',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (!res.ok) {
    toast.error('Cannot refresh cache');
  }
  return await res.json();
}
