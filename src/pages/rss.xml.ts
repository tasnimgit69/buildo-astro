import rss from '@astrojs/rss';
import { blogPosts } from '../data/blog-posts';
import { site } from '../data/site';

export function GET(context: { site: string }) {
  return rss({
    title: `${site.name} Blog`,
    description: site.description,
    site: context.site,
    items: blogPosts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.date),
      link: `/blog/${post.slug}/`,
    })),
  });
}
