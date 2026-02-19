import { blogPosts } from './blog-posts';
import { resolveImage } from '../utils/resolveImage';

const gridPosts = blogPosts.slice(0, 1).map((post) => ({
  ...post,
  href: `/blog/${post.slug}`
}));

const listImages = [
  resolveImage('/images/thumbnail-list-thumbnail-2.webp'),
  resolveImage('/images/thumbnail-list-thumbnail-3.webp'),
  resolveImage('/images/thumbnail-list-thumbnail-4.webp')
];

const listPosts = blogPosts.slice(1, 4).map((post, index) => ({
  ...post,
  href: `/blog/${post.slug}`,
  image: { ...post.image, src: listImages[index] }
}));

export const blog = {
  heading: {
    subtitle: 'News & Articles',
    title: 'Browse Our Articles & Resources'
  },
  cta: { label: 'Browse All Article', href: '/blog-grid' },
  grid: gridPosts,
  list: listPosts
};
