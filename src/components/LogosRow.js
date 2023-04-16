import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '../components/Container'
import logoBuzzfeed from '../images/logos/buzzfeed.svg'
import logoDailyNews from '../images/logos/daily-news.svg'
import logoEntrepreneur from '../images/logos/entrepreneur.svg'
import logoQuartz from '../images/logos/quartz.svg'
import logoWired from '../images/logos/wired.svg'

const companies = [
  { name: 'Buzzfeed', logo: logoBuzzfeed },
  { name: 'Daily News', logo: logoDailyNews },
  { name: 'Entrepreneur', logo: logoEntrepreneur },
  { name: 'Quartz', logo: logoQuartz },
  { name: 'Wired', logo: logoWired },
]

export function LogosRow() {
  return (
    <section className="relative py-20 overflow-hidden bg-vanilla lg:pt-24">
      <Container>
        <p className="text-base font-semibold tracking-widest text-center uppercase text-slate-500">
          As featured in
        </p>
        <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-8 sm:grid-cols-6 sm:gap-x-12 lg:grid-cols-5">
          {companies.map((company, index) => (
            <li
              key={company.name}
              className={clsx(
                index <= 2 ? 'sm:col-span-2' : 'sm:col-span-3',
                'flex justify-center sm:col-span-2 lg:col-span-1'
              )}
            >
              <Image src={company.logo} alt={company.name} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
