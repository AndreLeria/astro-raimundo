import rss from '@astrojs/rss'
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const posts = await getCollection('blog');

    return rss({
        title: 'Astro learning blog',
        description: 'My journey learning astro',
        site: context.site!,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}`,
        })),
        customData: `<language>en-us</language>`
    });
}