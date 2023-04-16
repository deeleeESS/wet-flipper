import { Fragment } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure, Transition, Popover, Menu } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { Container } from '../components/Container'
import { Button } from '../components/Button'
import logo from '../images/rockys-logo.png'
import logoIcon from '../images/mobile-logo.jpg'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]


export function Header() {
  const router = useRouter()

  function MenuIcon({ open }) {
    return (
      <span
        className={`relative h-3.5 w-4 transform transition duration-500 ease-in-out`}
      >
        <span
          className={clsx(
            open && 'top-1.5 left-1/2 w-0',
            'absolute top-0 left-0 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-slate-900'
          )}
        />
        <span
          className={clsx(
            open && 'rotate-45',
            'absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
        <span
          className={clsx(
            open && '-rotate-45',
            'absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
        <span
          className={clsx(
            open && 'top-1.5 left-1/2 w-0',
            'absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition duration-300 ease-in-out group-hover:bg-gray-900'
          )}
        />
      </span>
    )
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="relative z-50 flex items-center justify-center p-3 transition duration-300 ease-in-out border cursor-pointer group border-gray-secondary-400/75 bg-gray-secondary-50 focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>

        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-20 bg-opacity-25 bg-slate-900 backdrop-blur" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100 "
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-90"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-0 z-30 px-5 pt-24 pb-8 overflow-hidden bg-secondary"
            >
              <div>
                <div className="flex flex-col divide-y divide-gray-secondary-400/75">
                  {links.map((link) => (
                    <Link key={`${link.name}-mobile`} href={link.href}>
                      <a
                        className={
                          'block px-4 pt-4 pb-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900'
                        }
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}

                  <Disclosure as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`group flex w-full items-center justify-between px-4 pb-2 pt-4 font-medium duration-150 ease-in-out ${
                            open
                              ? 'bg-amber-50 text-slate-900'
                              : 'text-slate-700 hover:bg-amber-50  hover:text-slate-900'
                          }`}
                        >
                          <span>Pages</span>
                          <ChevronRightIcon
                            className={`ml-2 h-5 w-5 duration-300 ${
                              open
                                ? 'rotate-90 text-slate-900'
                                : 'text-slate-600/90 group-hover:text-slate-900'
                            }`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="mt-6">
                  <Button
                    size="md"
                    href="/signin"
                    variant="ghost"
                    className="w-full"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }

  return (
    <header className="h-24 bg-secondary sticky top-0 z-50">
      <Container className="flex items-center w-full h-full border-b border-gray-secondary-300/60">
        <nav className="relative z-50 flex items-center justify-between w-full ">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link href="/" aria-label="Home">
              <a className="flex items-center flex-shrink-0">
                <Image
                  src={logo}
                  className="w-full h-7 sm:h-7 hidden lg:block lg:h-20"
                />
                <Image
                  src={logoIcon}
                  className="block w-auto h-20 md:block lg:hidden rounded-3xl"
                />
              </a>
            </Link>
            <div className="items-center hidden space-x-3 md:flex lg:space-x-4">
              {links.map((link) => (
                <Link key={`${link.label}-desktop`} href={link.href}>
                  <a
                    className={clsx(
                      router.pathname == link.href
                        ? 'bg-primaryDark text-white'
                        : 'text-slate-700 hover:bg-amber-50 hover:text-slate-900',
                      'inline-block px-4 py-2 font-medium'
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}

        
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <Button size="md" href="/signup" className="bg-primaryDark text-white">
                User Portal
              </Button>
            </div>
          </div>
        </nav>
        <div className="ml-4 md:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
