import { werke, ausstellungen } from '$lib/content';

const DOMAIN = 'https://sebastian-eschenbach.de';

const staticPages = ['', '/galerie', '/ausstellungen', '/vita', '/kontakt', '/Atelier'];

export async function GET() {
	const werkUrls = werke.map((w) => `/galerie/${w.slug}`);
	const ausstellungUrls = ausstellungen.map((a) => `/ausstellungen/${a.slug}`);

	const allUrls = [...staticPages, ...werkUrls, ...ausstellungUrls];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
	.map(
		(path) => `  <url>
    <loc>${DOMAIN}${path}</loc>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
