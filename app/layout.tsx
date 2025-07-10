import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DietAndLifestyle Web',
  description: 'Created by Madhu',
  generator: 'React_Madhu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
