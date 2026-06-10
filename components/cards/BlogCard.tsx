import React from 'react';
import { Link } from '@/i18n/routing';
import { BlogPost, TeamMember } from '@/lib/types';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { getTeamMemberBySlug } from '@/lib/data/team';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const authorProfile = post.author ? getTeamMemberBySlug(post.author) : null;
  const authorName = authorProfile?.name || post.author;

  const dateStr = new Date(post.publishedAt).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-white border border-[#D4E5F7] rounded-xl overflow-hidden hover:shadow-[0_8px_24px_rgba(13,73,153,0.12)] transition-all duration-300">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-[#EEF5FF] flex items-center justify-center border-b border-[#D4E5F7] group-hover:bg-[#EAF3FF] transition-colors">
        <Icon name="image" size="lg" className="text-[#8BAABF] group-hover:text-[#3A8FE8] transition-colors" />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="secondary" size="sm">{post.category}</Badge>
          <span className="text-sm text-[#4A7299] font-medium">{post.readingTime} min Lesezeit</span>
        </div>
        
        <Heading variant="h3" responsive={false} className="mb-3 group-hover:text-[#1A6FD4] transition-colors line-clamp-2">
          {post.title}
        </Heading>
        
        <Paragraph size="sm" muted className="flex-grow mb-6 line-clamp-3">
          {post.excerpt}
        </Paragraph>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#EEF5FF]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center text-xs font-bold">
              {authorProfile?.initials || authorName.substring(0, 2).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-[#0C1929]">{authorName}</span>
          </div>
          <span className="text-sm text-[#4A7299]">{dateStr}</span>
        </div>
      </div>
    </Link>
  );
}
