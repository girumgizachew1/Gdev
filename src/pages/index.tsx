import Image from 'next/image'
import { Inter } from 'next/font/google'
import Editor from './Editor'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta name="keywords" content="keywords" />
        <meta name="author" content="author name" />
        {/* other meta tags */}
      </Head>
      
    </div>
  )
}
