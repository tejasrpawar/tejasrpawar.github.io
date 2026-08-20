import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Tejas Pawar\'s personal website',
  description:
    ''
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-[var(--apple-bg)] tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-geist)]">
            {/* §12 Materials — translucent scroll-edge chrome: content scrolls
                softly under a blurred, masked top edge instead of a hard divider. */}
            <ScrollProgress className="scroll-progress-bar fixed top-0 z-50 h-[3px] bg-[var(--apple-accent)]" />
            <div
              aria-hidden="true"
              className="material-edge pointer-events-none fixed inset-x-0 top-0 z-10 h-16 bg-[var(--apple-bg)]/60 [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
            />
            <div className="relative mx-auto w-full max-w-[680px] flex-1 px-6 pt-24">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
