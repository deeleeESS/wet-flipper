import Image from 'next/future/image'

import TeamImage from '../images/stock/team.jpg'
import { Container } from '../components/Container'

export function StoryWithStats() {
  return (
    <section className="relative overflow-hidden bg-vanilla pt-16 pb-[532px] sm:pb-[500px] sm:pt-24 md:pb-64">
      <Container>
        <div className="flex flex-col sm:items-center">
          <p className="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg
              className=""
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

            <span>Our story</span>
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-center sm:text-5xl sm:leading-snug md:mx-auto xl:mx-0">
            Empowering podcasters since 2013
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:mt-8 md:flex-row md:divide-x md:divide-gray-secondary-400/60">
          <div className="md:w-1/2 md:py-8 md:pr-6 lg:pr-16">
            <p className="text-lg leading-relaxed text-slate-700">
              Lorem ipsum dolor sit amet sodales enim orci venenatis nulla
              tortor. Facilisis quam nunc eleifend aliqua tempus luctus pretium
              do nunc pulvinar tellus ac lacinia. Ultrices habitasse leo
              pulvinar laoreet molestie dolore lobortis eros interdum fermentum
              nullam massa ac.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-slate-700">
              Incididunt feugiat cras fusce tortor lectus cursus nulla vivamus
              fringilla. Nisl luctus at elementum fames pellentesque malesuada
              justo sed dictumst ultrices dui turpis.
            </p>
          </div>
          <div className="mt-8 sm:mt-0 md:w-1/2 md:py-8 md:pl-6 lg:pl-16">
            <p className="text-lg leading-relaxed text-slate-700">
              Lorem ipsum dolor sit amet dictum consequat arcu quisque justo
              turpis. Mauris odio tellus convallis bibendum vivamus gravida
              praesent turpis. Fermentum eiusmod eget sagittis ac dapibus
              eiusmod sodales consectetur duis quam bibendum eleifend. Eros
              pulvinar nullam lobortis enim morbi nullam cursus lectus laoreet
              molestie etiam ut tempor cras. Sagittis ultrices massa mollis
              proin euismod eros quam.
            </p>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-20">
          <div className="aspect-w-2 aspect-h-1">
            <Image
              className="object-cover object-center"
              src={TeamImage}
              alt="Team"
            />
          </div>
          <div className="absolute top-full left-6 right-6 flex max-w-4xl -translate-y-12 flex-col divide-y divide-gray-secondary-400/60 bg-amber-100 px-10 py-10 md:left-[unset] md:top-[unset] md:right-0 md:-bottom-1/4 md:w-full md:flex-row md:divide-y-0 md:divide-x md:px-8 lg:p-12">
            <div className="pb-10 md:w-1/3 md:pb-0 md:pr-10 lg:pr-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                10+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Years working on empowering podcasters
              </p>
            </div>
            <div className="py-10 md:w-1/3 md:py-0 md:px-10 lg:px-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                $1.5M
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Capital raised by our investors
              </p>
            </div>
            <div className="pt-10 md:w-1/3 md:pt-0 md:pl-10 lg:pl-12">
              <p className="text-center text-4xl font-semibold text-slate-900 lg:text-5xl">
                120+
              </p>
              <p className="mt-4 text-center text-md leading-snug text-slate-600">
                Team members working on Wavy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
