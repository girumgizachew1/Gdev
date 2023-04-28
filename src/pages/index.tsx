import Image from 'next/image'
import { Inter } from 'next/font/google'
import Editor from './Editor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-400 ">
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <Editor />
    </div>
  </main>
  
  )
}
