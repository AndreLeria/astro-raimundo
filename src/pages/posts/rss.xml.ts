import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    return rss({
        title: 'Astro learning blog',
        description: 'My journey learning astro',
        site: context.site!,
        items: await pagesGlobToRssItems(import.meta.glob('./*.md')),
        customData: `<language>en-us</language>`
    });
}