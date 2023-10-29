import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Menu',
  description: '🍿Food Menu🍿Created by Next.js along with the Tailwind CSS framework by John Paul🍿',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <Head>
       <meta name="description" content="🍿Food Menu🍿 Created by Next.js along with the Tailwind CSS framework by John Paul🍿" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
