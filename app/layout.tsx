import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://krextyan-portfolio.vercel.app'),
  title: {
    default: 'Christian Lapena | Krextyan Portfolio',
    template: '%s | Krextyan'
  },
  description: 'Software Engineering Portfolio of Krextyan, specializing in React and Next.js.',
  openGraph: {
    title: 'Christian Lapena | Krextyan Portfolio',
    description: 'Explore my latest projects and coding insights.',
    url: 'https://krextyan-portfolio.vercel.app',
    siteName: 'Krextyan Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}