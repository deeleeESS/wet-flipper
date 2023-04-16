import Head from 'next/head'

import { Header } from '../components/Header'
import { ContactHeader } from '../components/ContactHeader'
import { ContactInfo } from '../components/ContactInfo'
import { Map } from '../components/Map'
import { FaqCTA } from '../components/FaqCTA'
import { CallToAction } from '../components/CallToAction'
import { Footer } from '../components/Footer'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wavvy - Contact</title>
      </Head>

      <Header />
      <ContactSection />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}
