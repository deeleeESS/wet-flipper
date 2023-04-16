import Head from 'next/head'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/future/image'

import logo from '../images/logo-icon.png'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Wavvy - Password Reset</title>
      </Head>

      <section className="relative flex min-h-screen items-center justify-center bg-amber-100 py-16 sm:py-20">
        <Link href="/">
          <a className="group absolute right-8 top-8 hidden cursor-pointer items-center justify-center border border-gray-secondary-400/60 bg-gray-secondary-50 p-2 transition duration-150 ease-in-out hover:bg-vanilla focus:outline-none sm:flex lg:top-12 lg:right-12">
            <XMarkIcon className="h-5 w-5 text-slate-800" />
          </a>
        </Link>
        <Container className="w-full">
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <Link href="/" aria-label="Home">
              <a className="flex flex-shrink-0">
                <Image src={logo} className="h-auto w-12" />
              </a>
            </Link>
            <h1 className="mt-10 text-center text-4xl font-semibold text-slate-900">
              Reset your password
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-slate-600">
              Enter your email below and we will send you an email with
              instruction to reset your password.
            </p>

            <div className="mt-10 w-full">
              <form action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="foobar@email.com"
                      className="block w-full appearance-none border border-gray-secondary-400/60 bg-gray-secondary-50 py-2.5 pl-12 pr-8 text-slate-800 placeholder-slate-500/75 outline-none duration-150 hover:bg-vanilla focus:border-gray-secondary-200 focus:bg-vanilla focus:outline-none  focus:ring-gray-secondary-200"
                    />
                    <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <Button className="mt-6 w-full">Reset password</Button>
              </form>
              <p className="mt-4 text-center leading-relaxed text-slate-600">
                Remembered your password?
                <Link href="/signin">
                  <a className="ml-1.5 font-medium text-slate-800 underline duration-150 hover:text-slate-900">
                    Sign in
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
