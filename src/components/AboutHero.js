import Image from 'next/future/image'

import Gallery01 from '../images/stock/gallery-01.jpg'
import Gallery02 from '../images/stock/gallery-02.jpg'
import Gallery03 from '../images/stock/gallery-03.jpg'
import Gallery04 from '../images/stock/gallery-04.jpg'
import Gallery05 from '../images/stock/gallery-05.jpg'
import Gallery06 from '../images/stock/gallery-06.jpg'
import Gallery07 from '../images/stock/gallery-07.jpg'
import { Container } from '../components/Container'

export function AboutHero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-amber-100 sm:pt-24">
      <Container>
        <div className="flex flex-col items-center">
          <p className="flex items-center text-xl font-medium space-x-3.5 text-amber-900/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={3}
              viewBox="0 0 28 3"
              fill="none"
            >
              <line
                y1="1.5"
                x2={28}
                y2="1.5"
                stroke="currentColor"
                strokeOpacity="0.65"
                strokeWidth={3}
              />
            </svg>

            <span>About Wavvy</span>
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-snug text-center text-slate-900 sm:mt-6 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
            We are a small and passionate team in Los Angeles with the goal to
            simplify how podcasting is done.
          </h1>
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-amber-100" />
          <div className="flex-1 w-full bg-vanilla" />
          <div className="flex-1 bg-vanilla" />
        </div>
        <Container className="relative">
          <div className="grid grid-cols-12 gap-3 mt-16 sm:mt-24 lg:gap-5">
            <div className="flex flex-col col-span-6 gap-3 sm:col-span-4 lg:gap-5">
              <Image
                className="object-cover object-center w-full h-auto"
                src={Gallery01}
                alt="Gallery 01"
              />
              <Image
                className="object-cover object-center w-full h-auto ml-auto md:w-2/3"
                src={Gallery02}
                alt="Gallery 02"
              />
            </div>
            <div className="flex-col hidden col-span-4 gap-3 sm:flex md:col-span-2 lg:gap-5">
              <Image
                className="object-cover object-center w-full h-auto md:mt-12"
                src={Gallery03}
                alt="Gallery 03"
              />
              <Image
                className="hidden object-cover object-center w-full h-auto ml-auto md:block "
                src={Gallery04}
                alt="Gallery 04"
              />
            </div>
            <div className="flex flex-col col-span-6 gap-3 sm:col-span-4 lg:gap-5">
              <Image
                className="object-cover object-center w-full h-auto ml-auto md:w-1/2"
                src={Gallery06}
                alt="Gallery 06"
              />
              <Image
                className="object-cover object-center w-full h-auto"
                src={Gallery05}
                alt="Gallery 05"
              />
            </div>
            <div className="flex-col hidden col-span-2 gap-3 md:flex lg:gap-5">
              <Image
                className="object-cover object-center w-full h-auto mt-12"
                src={Gallery07}
                alt="Gallery 07"
              />
            </div>
          </div>
        </Container>
        <div className="h-16 bg-vanilla sm:h-24"></div>
      </div>
    </section>
  )
}
