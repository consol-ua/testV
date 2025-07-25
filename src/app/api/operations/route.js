export async function GET(request) {
  const res = await fetch(
    `http://93.114.128.195/test-front/get_operations?token=${process.env.NEXT_PUBLIC_API_TOKEN || ''}`,
    { method: 'GET' }
  );
  const data = await res.json();
  return Response.json(data);
}
