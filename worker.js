import HTML from './index.html';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/downloads/')) {
      return env.ASSETS.fetch(request);
    }
    if (url.pathname !== '/' && url.pathname !== '/index.html') {
      return new Response('Not found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  },
};
