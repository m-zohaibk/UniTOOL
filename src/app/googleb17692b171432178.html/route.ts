// Deprecated: Using public/googleb17692b171432178.html for static serving
export const runtime = 'edge';
export async function GET() {
  return new Response('google-site-verification: googleb17692b171432178.html', {
    headers: { 'Content-Type': 'text/html' },
  });
}