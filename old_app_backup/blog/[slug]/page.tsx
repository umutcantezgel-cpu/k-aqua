import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPostSlugs, getFeaturedBlogPosts } from '@/lib/data/blog';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Stack } from '@/components/layout/Stack';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { getTeamMemberBySlug } from '@/lib/data/team';
import { BlogCard } from '@/components/cards/BlogCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { CTASection } from '@/components/sections/CTASection';

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return notFound();

  const authorProfile = post.author ? getTeamMemberBySlug(post.author) : null;
  const authorName = authorProfile?.name || post.author;

  const dateStr = new Date(post.publishedAt).toLocaleDateString('de-DE', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const related = getFeaturedBlogPosts().filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Section spacing="md" background="white" className="border-b border-[#D4E5F7]">
        <Container size="lg">
          <Breadcrumb />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <Badge variant="primary" className="mb-6">{post.category}</Badge>
              <Heading variant="h1" className="mb-6">{post.title}</Heading>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#4A7299] pb-8 border-b border-[#D4E5F7] mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EAF3FF] text-[#1A6FD4] flex items-center justify-center font-bold">
                    {authorProfile?.initials || authorName.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="font-medium text-[#0C1929]">{authorName}</span>
                </div>
                <div className="flex items-center gap-1"><Icon name="calendar_today" size="sm" /> {dateStr}</div>
                <div className="flex items-center gap-1"><Icon name="schedule" size="sm" /> {post.readingTime} Min. Lesezeit</div>
              </div>

              <div className="w-full h-80 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-12">
                <Icon name="image" size="lg" className="text-[#8BAABF]" />
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden">
                <TableOfContents />
              </div>

              <div className="prose prose-blue max-w-none mb-16">
                <Paragraph size="lg" className="font-medium mb-8">
                  {post.excerpt}
                </Paragraph>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-[#D4E5F7]">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">#{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Desktop TOC Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <TableOfContents />
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section background="gray" spacing="lg">
          <Container>
            <div className="mb-12 text-center">
              <Heading variant="h2">Weitere Artikel lesen</Heading>
            </div>
            <Grid columns={3} responsive gap="lg">
              {related.map(rel => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <CTASection variant="blue" />
    </>
  );
}
