import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('/questions.json'); // Ruta al archivo JSON en el directorio public
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch questions' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};