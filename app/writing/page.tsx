import Hero from '@/components/hero';
import WritingList from '@/components/writing-list';
import Footer from '@/components/footer';
import { posts } from '@/lib/data/writing';

export const metadata = {
  title: 'Writing — Abdul Rahim Rangrez',
  description:
    'Design systems, AI product thinking, and the frameworks I use to build. Unfinished in public, on purpose.',
};

export default function WritingPage() {
  return (
    <main>
      <Hero
        variant="writing"
        headline={
          <>
            Notes on{' '}
            <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>the work.</em>
          </>
        }
        sub="Design systems, AI product thinking, and the frameworks I use to build. Unfinished in public, on purpose."
      />

      <section style={{ padding: '0 2.5rem var(--space-2xl)' }}>
        <WritingList posts={posts} groupByYear />
      </section>

      <Footer
        headline={
          <>
            Want to talk{' '}
            <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>about the work?</em>
          </>
        }
      />
    </main>
  );
}
