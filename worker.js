export default {
  async fetch(request) {
    const destination = new URL(request.url);
    destination.protocol = 'https:';
    destination.host = 'theangel.biz';
    return new Response(null, {
      status: 301,
      headers: {
        Location: destination.href,
        'Cache-Control': 'no-store',
      },
    });
  },
};
