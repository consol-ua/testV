// pages/api/operations/route.js (або будь-який інший серверний API маршрут Next.js)
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false // Це відключає перевірку сертифіката
});

export async function GET(request) {
  const url =
    'https://93.114.128.195/rest-front/get_operations?token=RwjB74n2eiZlDQNSBGEEaa'; // Ваш проблемний URL

  try {
    const response = await fetch(url, {
      method: 'GET',
      agent: agent // Передаємо кастомний агент
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
    // Для відладки можна повернути деталі помилки
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch operations',
        details: error.message,
        code: error.code, // ERR_TLS_CERT_ALTNAME_INVALID
        reason: error.reason,
        host: error.host
        // ... інші корисні деталі з об'єкта error
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
