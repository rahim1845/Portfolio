import type { Metadata } from 'next';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import Cursor from '@/components/cursor';
import ScrollProgress from '@/components/scroll-progress';
import PageTransition from '@/components/page-transition';
import LenisProvider from '@/components/lenis-provider';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abdul Rahim Rangrez — Product Designer',
  description:
    'Product Designer based in Mumbai. I design systems that carry the weight of a product\'s logic — from the first unclear idea to the screen that ships.',
  openGraph: {
    title: 'Abdul Rahim Rangrez — Product Designer',
    description: 'Product Designer based in Mumbai.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>
        <LenisProvider>
          <ScrollProgress />
          <Cursor />
          <Nav />
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
