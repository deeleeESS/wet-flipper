import Head from 'next/head'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/future/image'

import logo from '../images/logo-icon.png'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

export default function Signin() {
  return (
    <>
      <Head>
        <title>Wavvy - Sign in</title>
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
              Welcome back
            </h1>
            <p className="mt-4 text-center leading-relaxed text-slate-600">
              Don’t have an account yet?
              <Link href="/signup">
                <a className="block text-center font-medium text-slate-800 underline duration-150 hover:text-slate-900 sm:ml-1.5 sm:inline-block sm:text-left">
                  Get started for free
                </a>
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
              <button className="flex w-full items-center border border-gray-secondary-400/60 bg-gray-secondary-50 px-5 py-3.5 text-md font-medium text-slate-800 duration-150 hover:bg-vanilla sm:w-auto sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  className="mr-3.5 h-5 w-5"
                  fill="none"
                >
                  <path
                    d="M10.3238 4.22336C11.7572 4.22248 13.1446 4.729 14.2402 5.65318L17.3091 2.73066C16.131 1.64437 14.716 0.847624 13.1763 0.403645C11.6365 -0.0403328 10.0145 -0.119321 8.4389 0.172951C6.86332 0.465222 5.37754 1.12071 4.09948 2.08739C2.82142 3.05406 1.78627 4.30533 1.07617 5.74187L4.53599 8.40865C4.93949 7.19191 5.71559 6.13296 6.75435 5.38181C7.79312 4.63065 9.04189 4.22537 10.3238 4.22336Z"
                    fill="#D94F3D"
                  />
                  <path
                    d="M4.22329 10.3237C4.22416 9.67271 4.32968 9.02611 4.53582 8.40865L1.076 5.74187C0.368293 7.16554 0 8.7338 0 10.3237C0 11.9136 0.368293 13.4818 1.076 14.9055L4.53582 12.2387C4.32968 11.6212 4.22416 10.9746 4.22329 10.3237Z"
                    fill="#F2C042"
                  />
                  <path
                    d="M20.2245 8.44666H10.3701V12.67H15.9543C15.6221 13.8641 14.861 14.8937 13.8168 15.5615L17.2499 18.2081C19.4436 16.2391 20.7327 13.0374 20.2245 8.44666Z"
                    fill="#5085ED"
                  />
                  <path
                    d="M13.816 15.5615C12.755 16.1688 11.5455 16.4675 10.3238 16.424C9.04189 16.422 7.79312 16.0167 6.75435 15.2655C5.71559 14.5144 4.93949 13.4554 4.53599 12.2387L1.07617 14.9055C1.93075 16.6282 3.24904 18.0782 4.88275 19.0926C6.51646 20.107 8.40079 20.6454 10.3238 20.6473C12.8542 20.716 15.3207 19.847 17.2491 18.2072L13.816 15.5615Z"
                    fill="#57A75C"
                  />
                </svg>
                Sign in with Google
              </button>
              <button className="flex w-full items-center border border-gray-secondary-400/60 bg-gray-secondary-50 px-5 py-3.5 text-md font-medium text-slate-800 duration-150 hover:bg-vanilla sm:w-auto sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="mr-3.5 h-5 w-5"
                  fill="none"
                >
                  <path
                    d="M17.9163 14.6779C17.4834 15.6367 17.2767 16.0646 16.7192 16.9117C15.9425 18.0946 14.8467 19.5679 13.4888 19.5804C12.2825 19.5917 11.9725 18.7954 10.335 18.805C8.69753 18.8146 8.35628 19.5946 7.15003 19.5833C5.79211 19.5713 4.75461 18.2408 3.97711 17.0571C1.80378 13.7488 1.57669 9.86667 2.91711 7.80292C3.86961 6.33542 5.37294 5.47792 6.78586 5.47792C8.22461 5.47792 9.12919 6.26667 10.3192 6.26667C11.4734 6.26667 12.1763 5.47667 13.84 5.47667C15.0975 5.47667 16.43 6.16125 17.3796 7.34417C14.2684 9.04875 14.7742 13.49 17.9163 14.6779Z"
                    fill="black"
                  />
                  <path
                    d="M12.7537 3.40667C13.3582 2.63084 13.8166 1.53626 13.6499 0.416672C12.6624 0.484172 11.5082 1.11251 10.8341 1.93126C10.222 2.67417 9.71657 3.77626 9.91324 4.84751C10.9903 4.88126 12.1057 4.23751 12.7537 3.40667Z"
                    fill="black"
                  />
                </svg>
                Sign in with Apple
              </button>
            </div>
            <div className="mt-10 flex w-full items-center">
              <div className="h-px flex-1 bg-gray-secondary-400/60"></div>
              <h4 className="flex-shrink-0 px-4 text-base tracking-wide text-slate-500">
                or sign in with
              </h4>
              <div className="h-px flex-1 bg-gray-secondary-400/60"></div>
            </div>
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
                      className="block w-full appearance-none border border-gray-secondary-400/60 bg-gray-secondary-50 py-2.5 pl-12 pr-8 text-slate-800 placeholder-slate-500/75 outline-none duration-150 hover:bg-vanilla focus:border-gray-secondary-200 focus:bg-vanilla focus:outline-none focus:ring-gray-secondary-200"
                    />
                    <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
                <div className="mt-7">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-slate-700"
                    >
                      Password
                    </label>
                    <Link href="/password-reset">
                      <a className="font-medium text-slate-800 underline duration-150 hover:text-slate-900">
                        Forgot password?
                      </a>
                    </Link>
                  </div>
                  <div className="relative mt-1.5">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Password (min. 6 characters)"
                      className="block w-full appearance-none border border-gray-secondary-400/60 bg-gray-secondary-50 py-2.5 pl-12 pr-8 text-slate-800 placeholder-slate-500/75 outline-none duration-150 hover:bg-vanilla focus:border-gray-secondary-200 focus:bg-vanilla focus:outline-none focus:ring-gray-secondary-200"
                    />
                    <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
                <Button className="mt-8 w-full sm:mt-10">Sign in</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
