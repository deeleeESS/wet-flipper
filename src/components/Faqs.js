import Image from 'next/future/image'
import clsx from 'clsx'
import { Disclosure, Transition } from '@headlessui/react'

import { Container } from '../components/Container'
import faqImage from '../images/stock/faq-image.jpg'

const faqs = [
  {
    question: 'Do I need specific tech?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'Where are my podcasts stored?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'What if I want to move to a different platform later?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'Are larger podcasts more expensive?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'Is it secure?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'What if I don’t do video?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'How does automatic transcription work?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'What if I decide to cancel in the future?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
  {
    question: 'Do you offer a free plan?',
    answer:
      'Lorem ipsum dolor sit amet vestibulum nullam bibendum. Odio velit curabitur purus tortor laoreet massa diam blandit pulvinar duis ornare. Interdum vestibulum molestie lacinia maecenas tortor lacus nibh pretium faucibus do.',
  },
]

export function Faqs() {
  return (
    <section className="overflow-hidden bg-vanilla pb-64 md:pt-24 md:pb-32">
      <Container className="relative">
        <Image
          src={faqImage}
          className="absolute left-0 right-0 h-80 w-full object-cover object-center md:right-6 md:left-[unset] md:h-auto md:w-1/2 lg:right-8"
        />
        <div className="relative z-10 translate-y-48 md:w-4/5 md:translate-y-12 lg:w-2/3">
          <div className="border border-gray-secondary-400/60 bg-gray-secondary-50 px-8 py-12 sm:py-16 sm:px-12 lg:px-16 lg:py-20">
            <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Frequently asked questions
            </h2>
            <ul className="mt-12 space-y-8 divide-y divide-gray-secondary-400/75 sm:mt-16">
              {faqs.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="li"
                  className={clsx(index > 0 && 'pt-8', '')}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between">
                        <p className="text-left text-lg font-semibold text-slate-900 sm:text-xl">
                          {faq.question}
                        </p>
                        <span
                          className={clsx(
                            open
                              ? 'rotate-0 before:w-0'
                              : 'rotate-180 before:w-4 sm:before:w-[18px]',
                            "relative ml-4 flex h-4 w-4 duration-300 before:absolute before:bottom-1/2 before:h-0.5 before:-translate-y-1/2 before:rotate-90 before:bg-slate-800 before:transition-[width] before:content-[''] after:absolute after:bottom-1/2 after:h-0.5 after:w-4 after:-translate-y-1/2 after:bg-slate-800 after:content-[''] sm:h-[18px] sm:w-[18px] sm:after:w-[18px]"
                          )}
                        ></span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-1 pt-5 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
