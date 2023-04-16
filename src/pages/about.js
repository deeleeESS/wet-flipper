import Head from 'next/head'

import { Header } from '../components/Header'
import { AboutHero } from '../components/AboutHero'
import { StoryWithStats } from '../components/StoryWithStats'
import { FeaturesGridDark } from '../components/FeaturesGridDark'
import { Team } from '../components/Team'
import { LogosGrid } from '../components/LogosGrid'
import { CareersCTA } from '../components/CareersCTA'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wavvy - Everything you need to start a podcast</title>
        <meta
          name="description"
          content="Wavvy is a small and passionate team in Los Angeles with the goal to simplify how podcasting is done."
        />
      </Head>
      <Header />
      <AboutHero />
      <StoryWithStats />
      <FeaturesGridDark />
      <Team />
      <LogosGrid />
      <CareersCTA />
      <Footer />
    </>
  )
}
