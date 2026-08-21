import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Posts newest first. Drafts are hidden in a production build and visible in dev,
 * so a half-written post can be read at localhost without shipping it.
 */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.PROD ? !data.draft : true);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
