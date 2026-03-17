import Header from '@/components/Header'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <Header />
      <Projects />
    </main>
  )
}

export default page