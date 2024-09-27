import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '임준석 - Junseok Lim',
  description: '개발자 임준석의 포트폴리오 사이트입니다.',
}

const NAV_NAME = ['홈', '경력', '프로젝트', '링크']
const NAV_LINK = ['home', 'career', 'projects', 'links']

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className='font-regular'>
        <nav className='fixed bg-white w-full border-b h-20 flex justify-center items-center space-x-40 text-lg z-50'>
          {
            NAV_NAME.map((name, i) => (
              <Link className='text-gray-500 hover:text-black transition-colors' key={i} href={`/${NAV_LINK[i]}`}>{name}</Link>
            ))
          }
        </nav>
        <div className='max-w-screen-lg mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
