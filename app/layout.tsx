import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krextyan | Portfolio',
  description: 'Software Engineering Portfolio of Krextyan, specializing in React and Next.js.',
  openGraph: {
    title: 'Krextyan Portfolio',
    description: 'Explore my latest projects and coding insights.',
    url: 'https://your-domain.com',
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