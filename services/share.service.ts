export async function refreshCacheClient(data: {
  paths: string[];
  tags: string[];
}) {
  console.log( process.env.NEXT_PUBLIC_CLIENT_DOMAIN)
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
  console.log(res);
  return await res.json();
}
