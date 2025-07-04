export async function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: https://devmtsportifolio.vercel.app/sitemap.xml`, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
