import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Speakers } from '@/components/Speakers'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moco Komik</title>
        <meta
          name="description"
          content="Website rekomendasi Manga,Manhwa,Manhua.ter uji oleh para ahli expert"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
