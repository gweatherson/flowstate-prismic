import type { Metadata } from 'next'
import clsx from 'clsx'
import { Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css';
import { createClient } from '@/prismicio';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('settings');

  return {
    title: page.data.site_title || 'Default Title FALLBACK',
    description: page.data.meta_description || 'Default Description FALLBACK',
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <header>
          header
        </header>

        {children}

        <footer>
          footer
        </footer>
      </body>
    </html>
  )
}
