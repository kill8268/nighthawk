import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'nighthawk',
  description: 'nighthawk',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  )
}
