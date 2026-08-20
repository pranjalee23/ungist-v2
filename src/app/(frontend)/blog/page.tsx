import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogFilterBar } from '@/components/blog/BlogFilterBar'
import { FeaturedArticleCard } from '@/components/blog/FeaturedArticleCard'
import { ArticleGrid } from '@/components/blog/ArticleGrid'
import { NewsletterStrip } from '@/components/blog/NewsletterStrip'
import { InstagramStrip } from '@/components/blog/InstagramStrip'

export const metadata: Metadata = {
  title: 'UPSC Insights & Strategy — Free Resources | UNGIST Blog',
  description:
    'Expert UPSC guidance on CSAT, Prelims, Mains, and beyond — free for every aspirant. Read strategy articles, current affairs digests, and success stories.',
}

interface BlogPageProps {
  searchParams?: Promise<{ category?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const category = params?.category ?? 'All'
  const page = Math.max(1, Number(params?.page ?? 1))

  const payload = await getPayload({ config })

  const [featuredResult, postsResult, countResult] = await Promise.all([
    payload.find({
      collection: 'blogs',
      where: { featured: { equals: true }, status: { equals: 'published' } },
      limit: 1,
      depth: 1,
    }),
    payload.find({
      collection: 'blogs',
      where: {
        status: { equals: 'published' },
        ...(category && category !== 'All' ? { categories: { contains: category } } : {}),
      },
      sort: '-publishedAt',
      limit: 9,
      page,
      depth: 1,
    }),
    payload.find({
      collection: 'blogs',
      where: { status: { equals: 'published' } },
      limit: 0,
    }),
  ])

  const featured = featuredResult.docs[0] ?? null
  const posts = postsResult.docs
  const totalDocs = postsResult.totalDocs
  const totalPages = postsResult.totalPages
  const totalArticles = countResult.totalDocs

  return (
    <>
      <BlogHero articleCount={totalArticles} />
      <BlogFilterBar />
      {featured && <FeaturedArticleCard post={featured} />}
      <ArticleGrid
        posts={posts}
        totalDocs={totalDocs}
        totalPages={totalPages}
        currentPage={page}
        category={category}
      />
      <NewsletterStrip />
      <InstagramStrip />
    </>
  )
}
