import Head from 'next/head'

import { Header } from '../components/Header'
import { PricingCards } from '../components/PricingCards'
import { PlanFeatures } from '../components/PlanFeatures'
import { FeaturedTestimonials } from '../components/FeaturedTestimonials'
import { PlansTable } from '../components/PlansTable'
import { Faqs } from '../components/Faqs'
import { CallToAction } from '../components/CallToAction'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wavvy - Pricing</title>
        <meta
          name="description"
          content="Get our fully featured bundle for only $39 a month."
        />
      </Head>

      <Header />
      <PricingCards />
      <PlanFeatures />
      <FeaturedTestimonials />
      <PlansTable />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  )
}
