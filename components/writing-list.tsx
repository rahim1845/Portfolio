'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Post } from '@/lib/data/writing';

interface WritingListProps {
  posts: Post[];
  groupByYear?: boolean;
}

function PostRow({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={post.href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: '1.25rem 0',
          borderBottom: '1px solid var(--border)',
          transition: 'padding-left 0.3s cubic-bezier(0.23,1,0.32,1)',
          paddingLeft: hovered ? '12px' : '0',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.8vw, 1.375rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: hovered ? 'var(--red)' : 'var(--ink)',
            transition: 'color 0.2s',
            lineHeight: 1.3,
            maxWidth: '70ch',
            paddingRight: '2rem',
          }}
        >
          {post.title}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {post.date}
        </span>
      </div>
    </Link>
  );
}

export default function WritingList({ posts, groupByYear = false }: WritingListProps) {
  if (!groupByYear) {
    return (
      <div>
        {posts.map((post) => (
          <PostRow key={post.title} post={post} />
        ))}
      </div>
    );
  }

  const years = [...new Set(posts.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {years.map((year) => (
        <div key={year}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '0.5rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {year}
          </div>
          {posts
            .filter((p) => p.year === year)
            .map((post) => (
              <PostRow key={post.title} post={post} />
            ))}
        </div>
      ))}
    </div>
  );
}
