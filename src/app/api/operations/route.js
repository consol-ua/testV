// pages/api/operations/route.js (або будь-який інший серверний API маршрут Next.js)
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

export async function GET(request) {
  const url = `https://ip-93-114-128-195-98167.vps.hosted-by-mvps.net/test-front/get_operations?token=${process.env.NEXT_PUBLIC_API_TOKEN || ''}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      agent: agent
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch operations',
        details: error.message,
        code: error.code,
        reason: error.reason,
        host: error.host
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
