import React from 'react';
import { getAllBlogPosts } from '@/lib/data/blog';
import { Grid } from '@/components/layout/Grid';
import { BlogCard } from '@/components/cards/BlogCard';

interface BlogPreviewProps {
  limit?: number;
}

export function BlogPreview({ limit = 3 }: BlogPreviewProps) {
  const posts = getAllBlogPosts().slice(0, Math.max(0, limit));

  return (
    <Grid columns={3} responsive gap="lg" className="w-full">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </Grid>
  );
}
