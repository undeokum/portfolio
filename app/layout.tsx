import type { Metadata } from 'next'
import './globals.css'
import NavButton from '@/components/nav_btn'

export const metadata: Metadata = {
  title: '임준석 - Junseok Lim',
  description: '개발자 임준석의 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className='font-regular max-w-screen-lg mx-auto'>
        <NavButton />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
