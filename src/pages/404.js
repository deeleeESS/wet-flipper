import Head from 'next/head'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Wavvy - 404</title>
      </Head>

      <Header />

      <section className="bg-amber-100 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-xl border border-gray-secondary-400/60 bg-gray-secondary-50 px-8 py-12 sm:py-20 sm:px-12 lg:max-w-3xl">
            <h1 className="text-center text-6xl font-semibold text-slate-900 sm:text-8xl">
              404
            </h1>
            <p className="mx-auto mt-5 max-w-sm text-center text-lg leading-relaxed text-slate-700 sm:mt-6 sm:text-xl">
              Looks like the page you are looking for does not exist.
            </p>
            <div className="mt-10 flex justify-center sm:mt-12">
              <Button
                href="/"
                variant="ghost"
                size="md"
                className="space-x-3.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  className="h-[18px] w-[18px] text-slate-700 duration-150 ease-in-out group-hover:text-slate-50"
                  fill="none"
                >
                  <g clipPath="url(#clip0_107_1359)">
                    <path
                      d="M0.833008 9.16666L9.99967 1.66666L19.1663 9.16666"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M8.33301 19.1667V14.1667H11.6663V19.1667"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                    />
                    <path
                      d="M3.33301 10.8333V19.1666H16.6663V10.8333"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_107_1359">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Go back home</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
