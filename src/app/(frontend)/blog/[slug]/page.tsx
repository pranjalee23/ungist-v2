import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ArticleProgressBar } from '@/components/article/ArticleProgressBar'
import { ArticleHero } from '@/components/article/ArticleHero'
import { ArticleBody } from '@/components/article/ArticleBody'
import { ArticleSidebar } from '@/components/article/ArticleSidebar'
import { ArticleTags } from '@/components/article/ArticleTags'
import { ArticleShareRow } from '@/components/article/ArticleShareRow'
import { ArticleAuthorBio } from '@/components/article/ArticleAuthorBio'
import { ArticlePrevNext } from '@/components/article/ArticlePrevNext'
import { ArticleRelated } from '@/components/article/ArticleRelated'
import { ArticleDiagnosticCta } from '@/components/article/ArticleDiagnosticCta'
import { NewsletterStrip } from '@/components/blog/NewsletterStrip'
import { ScrollToTopBtn } from '@/components/article/ScrollToTopBtn'
import type { Blog, Author, Media } from '@/payload-types'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blogs',
    where: { status: { equals: 'published' } },
    limit: 1000,
    select: { slug: true },
  })
  return result.docs
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'blogs',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
    depth: 1,
  })
  const post = result.docs[0]
  if (!post) return {}

  const coverImage = post.coverImage as Media | null

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: post.canonicalUrl ?? `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      ...(coverImage?.url ? { images: [{ url: coverImage.url }] } : {}),
    },
  }
}

function extractTocFromContent(content: Blog['content']): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = []
  const children = content?.root?.children ?? []
  for (const node of children) {
    if (node.type === 'heading' && (node.tag === 'h2' || node.tag === 'h3')) {
      const text = extractText(node)
      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')
        items.push({ id, label: text })
      }
    }
  }
  return items
}

function extractText(node: Record<string, unknown>): string {
  if (node.type === 'text') return (node.text as string) ?? ''
  const children = (node.children as Record<string, unknown>[]) ?? []
  return children.map(extractText).join('')
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'blogs',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })

  const post = result.docs[0]
  if (!post) notFound()

  const author = post.author as Author
  const firstCategory = post.categories?.[0]

  const [relatedResult, prevResult, nextResult] = await Promise.all([
    payload.find({
      collection: 'blogs',
      where: {
        status: { equals: 'published' },
        id: { not_equals: post.id },
        ...(firstCategory ? { categories: { contains: firstCategory } } : {}),
      },
      sort: '-publishedAt',
      limit: 3,
      depth: 1,
    }),
    payload.find({
      collection: 'blogs',
      where: {
        status: { equals: 'published' },
        ...(post.publishedAt ? { publishedAt: { less_than: post.publishedAt } } : {}),
        id: { not_equals: post.id },
      },
      sort: '-publishedAt',
      limit: 1,
      depth: 1,
    }),
    payload.find({
      collection: 'blogs',
      where: {
        status: { equals: 'published' },
        ...(post.publishedAt ? { publishedAt: { greater_than: post.publishedAt } } : {}),
        id: { not_equals: post.id },
      },
      sort: 'publishedAt',
      limit: 1,
      depth: 1,
    }),
  ])

  const related = relatedResult.docs
  const prev = prevResult.docs[0] ?? null
  const next = nextResult.docs[0] ?? null
  const tocItems = extractTocFromContent(post.content)

  return (
    <>
      <ArticleProgressBar />

      <ArticleHero post={post} />

      {/* Main content */}
      <div
        className="art-main-content w-full mx-auto"
        style={{ maxWidth: 1060, padding: '60px 48px 0' }}
      >
        <div
          className="art-content-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 80, alignItems: 'start' }}
        >
          {/* Article body */}
          <div>
            <ArticleBody content={post.content} />
            <ArticleTags tags={post.tags ?? []} />
            <ArticleShareRow />
            {author && typeof author === 'object' && <ArticleAuthorBio author={author} />}
            <ArticlePrevNext prev={prev} next={next} />
          </div>

          {/* Sidebar */}
          {tocItems.length > 0 && <ArticleSidebar tocItems={tocItems} />}
        </div>
      </div>

      <ArticleRelated posts={related} />
      <NewsletterStrip />
      <ArticleDiagnosticCta />
      <ScrollToTopBtn />
    </>
  )
}
