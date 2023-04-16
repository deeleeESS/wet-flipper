import Image from 'next/future/image'

import { Container } from '../components/Container'
import ctaImage1 from '../images/stock/cta-image-01.jpg'
import ctaImage2 from '../images/stock/cta-image-02.jpg'
import { Button } from '../components/Button'

export function CallToAction() {
  return (
    <section className="overflow-hidden bg-amber-100 py-20 md:py-28 lg:py-32">
      <Container className="relative items-center md:grid md:grid-cols-12 md:gap-12">
        <div className="mx-auto max-w-lg md:col-span-6 md:mx-0 lg:pr-12">
          <h2 className="text-center text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight md:text-left">
            Start growing your podcast today
          </h2>
          <p className="mt-6 text-center text-[17px] leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed md:text-left ">
            Lorem ipsum dolor sit amet porta augue quisque enim. Vel ornare
            fames mauris dictumst aliqua purus praesent quis ut eros laoreet
            odio.
          </p>
          <div className="mt-10 flex w-full justify-center md:justify-start">
            <Button href="/signup">Get your free account</Button>
          </div>
        </div>
        <div className="col-span-6 hidden grid-cols-12 md:grid">
          <Image
            src={ctaImage2}
            className="col-span-5 my-auto ml-px h-auto w-full"
          />
          <Image src={ctaImage1} className="col-span-7 h-auto w-full" />
        </div>
      </Container>
    </section>
  )
}
