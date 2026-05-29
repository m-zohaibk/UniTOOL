
// Deprecated: Moved to public/app-ads.txt
export const runtime = 'edge';
export async function GET() {
  return new Response('google.com, pub-8599686795938679, DIRECT, f08c47fec0942fa0', {
    headers: { 'Content-Type': 'text/plain' },
  });
}
