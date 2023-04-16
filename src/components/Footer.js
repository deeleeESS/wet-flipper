import Link from 'next/link'
import Image from 'next/future/image'

import logo from '../images/logo-light.png'
import { Container } from '../components/Container'

const navigation = {
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Contact us', href: '/contact' },
  ],
  solutions: [
    { name: 'For small creators', href: '#' },
    { name: 'For professionals', href: '#' },
    { name: 'For large companies', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Live shows', href: '#' },
    { name: 'Virtual conferences', href: '#' },
  ],
  integrations: [
    { name: 'Youtube', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Spotify', href: '#' },
    { name: 'Tiktok', href: '#' },
    { name: 'Apple Podcasts', href: '#' },
    { name: 'Google Podcasts', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case studies', href: '#' },
    { name: 'Help center', href: '#' },
  ],
}

export function Footer() {
  return (
    <section className="overflow-hidden bg-slate-700 pt-20 pb-12">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="max-w-xl lg:col-span-4 lg:max-w-none">
            <Link href="/" aria-label="Home">
              <a className="flex flex-shrink-0">
                <Image src={logo} className="h-7 w-auto sm:h-8 lg:h-9" />
              </a>
            </Link>
            <p className="mt-10 text-md leading-relaxed text-slate-50">
              Lorem ipsum dolor sit amet aliqua rhoncus turpis. Justo adipiscing
              aliqua congue porttitor scelerisque gravida facilisi sodales
              congue fusce quam diam mi.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-slate-100/90 duration-150 group-hover:fill-slate-50"
                >
                  <path d="M7.52866 20L7.5 11.25H3.75V7.5H7.5V5C7.5 1.626 9.58939 0 12.5992 0C14.041 0 15.2801 0.107338 15.6412 0.155313V3.68134L13.5537 3.68229C11.9168 3.68229 11.5998 4.46012 11.5998 5.60155V7.5H16.25L15 11.25H11.5998V20H7.52866Z" />
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-slate-100/90 duration-150 group-hover:fill-slate-50"
                >
                  <path d="M19.75 6C19.5 4.375 18.75 3.25 17 3C14.25 2.5 10 2.5 10 2.5C10 2.5 5.75 2.5 3 3C1.25 3.25 0.375 4.375 0.25 6C0 7.625 0 10 0 10C0 10 0 12.375 0.25 14C0.5 15.625 1.25 16.75 3 17C5.75 17.5 10 17.5 10 17.5C10 17.5 14.25 17.5 17 17C18.75 16.625 19.5 15.625 19.75 14C20 12.375 20 10 20 10C20 10 20 7.625 19.75 6ZM7.5 13.75V6.25L13.75 10L7.5 13.75Z" />
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-slate-100/90 duration-150 group-hover:fill-slate-50"
                >
                  <path d="M20 3.75C19.25 4.125 18.5 4.25 17.625 4.375C18.5 3.875 19.125 3.125 19.375 2.125C18.625 2.625 17.75 2.875 16.75 3.125C16 2.375 14.875 1.875 13.75 1.875C11.625 1.875 9.75 3.75 9.75 6C9.75 6.375 9.75 6.625 9.875 6.875C6.5 6.75 3.375 5.125 1.375 2.625C1 3.25 0.875 3.875 0.875 4.75C0.875 6.125 1.625 7.375 2.75 8.125C2.125 8.125 1.5 7.875 0.875 7.625C0.875 9.625 2.25 11.25 4.125 11.625C3.75 11.75 3.375 11.75 3 11.75C2.75 11.75 2.5 11.75 2.25 11.625C2.75 13.25 4.25 14.5 6.125 14.5C4.75 15.625 3 16.25 1 16.25C0.625 16.25 0.375 16.25 0 16.25C1.875 17.375 4 18.125 6.25 18.125C13.75 18.125 17.875 11.875 17.875 6.5C17.875 6.375 17.875 6.125 17.875 6C18.75 5.375 19.5 4.625 20 3.75Z" />
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-slate-100/90 duration-150 group-hover:fill-slate-50"
                >
                  <g clipPath="url(#clip0_107_952)">
                    <path d="M10 1.80125C12.67 1.80125 12.9862 1.8125 14.0413 1.86C14.6752 1.86762 15.3031 1.98432 15.8975 2.205C16.3322 2.3656 16.7253 2.62192 17.0475 2.955C17.3806 3.27724 17.6369 3.67027 17.7975 4.105C18.0182 4.69937 18.1349 5.32729 18.1425 5.96125C18.19 7.01625 18.2013 7.33625 18.2013 10.0025C18.2013 12.6687 18.19 12.9887 18.1425 14.0437C18.1349 14.6777 18.0182 15.3056 17.7975 15.9C17.6315 16.3314 17.3768 16.7232 17.05 17.05C16.7232 17.3768 16.3314 17.6315 15.9 17.7975C15.3056 18.0182 14.6777 18.1349 14.0437 18.1425C12.9887 18.19 12.6687 18.2013 10.0025 18.2013C7.33625 18.2013 7.01625 18.19 5.96125 18.1425C5.32729 18.1349 4.69937 18.0182 4.105 17.7975C3.67027 17.6369 3.27724 17.3806 2.955 17.0475C2.62192 16.7253 2.3656 16.3322 2.205 15.8975C1.98432 15.3031 1.86762 14.6752 1.86 14.0413C1.8125 12.9862 1.80125 12.6663 1.80125 10C1.80125 7.33375 1.8125 7.01375 1.86 5.95875C1.86762 5.32479 1.98432 4.69687 2.205 4.1025C2.3656 3.66777 2.62192 3.27474 2.955 2.9525C3.27724 2.61942 3.67027 2.3631 4.105 2.2025C4.69937 1.98182 5.32729 1.86512 5.96125 1.8575C7.01625 1.81 7.33625 1.79875 10.0025 1.79875M10 0C7.28375 0 6.94375 0.01125 5.875 0.06C5.0462 0.0768543 4.22625 0.234082 3.45 0.525C2.78245 0.775698 2.17788 1.1695 1.67875 1.67875C1.1695 2.17788 0.775698 2.78245 0.525 3.45C0.234082 4.22625 0.0768543 5.0462 0.06 5.875C0.01125 6.94375 0 7.28375 0 10C0 12.7163 0.01125 13.0563 0.06 14.125C0.0768543 14.9538 0.234082 15.7738 0.525 16.55C0.775698 17.2175 1.1695 17.8221 1.67875 18.3212C2.17788 18.8305 2.78245 19.2243 3.45 19.475C4.22704 19.7662 5.04786 19.9234 5.8775 19.94C6.94375 19.9888 7.28375 20 10 20C12.7163 20 13.0563 19.9888 14.125 19.94C14.9546 19.9234 15.7755 19.7662 16.5525 19.475C17.2168 19.2179 17.82 18.8249 18.3237 18.3212C18.8274 17.8175 19.2204 17.2143 19.4775 16.55C19.7687 15.773 19.9259 14.9521 19.9425 14.1225C19.9913 13.0563 20.0025 12.7163 20.0025 9.9975C20.0025 7.27875 19.9913 6.94125 19.9425 5.8725C19.9246 5.0444 19.7665 4.22531 19.475 3.45C19.2243 2.78245 18.8305 2.17788 18.3212 1.67875C17.8221 1.1695 17.2175 0.775698 16.55 0.525C15.7738 0.234082 14.9538 0.0768543 14.125 0.06C13.0563 0.01125 12.7163 0 10 0Z" />
                    <path d="M9.99999 4.86523C8.98439 4.86523 7.99159 5.1664 7.14714 5.73064C6.30269 6.29488 5.64453 7.09686 5.25587 8.03516C4.86722 8.97345 4.76553 10.0059 4.96366 11.002C5.1618 11.9981 5.65086 12.9131 6.369 13.6312C7.08714 14.3494 8.00211 14.8384 8.9982 15.0366C9.9943 15.2347 11.0268 15.133 11.9651 14.7444C12.9034 14.3557 13.7053 13.6975 14.2696 12.8531C14.8338 12.0086 15.135 11.0158 15.135 10.0002C15.135 9.3259 15.0022 8.65816 14.7441 8.03516C14.4861 7.41215 14.1078 6.84607 13.631 6.36924C13.1542 5.89241 12.5881 5.51417 11.9651 5.25611C11.3421 4.99806 10.6743 4.86523 9.99999 4.86523ZM9.99999 13.334C9.34064 13.334 8.69609 13.1385 8.14786 12.7721C7.59963 12.4058 7.17233 11.8852 6.92001 11.276C6.66769 10.6668 6.60167 9.99654 6.7303 9.34985C6.85893 8.70317 7.17644 8.10915 7.64268 7.64292C8.10891 7.17668 8.70293 6.85918 9.34961 6.73054C9.99629 6.60191 10.6666 6.66793 11.2758 6.92025C11.8849 7.17257 12.4056 7.59987 12.7719 8.1481C13.1382 8.69633 13.3337 9.34088 13.3337 10.0002C13.3337 10.8844 12.9825 11.7324 12.3573 12.3576C11.7321 12.9828 10.8842 13.334 9.99999 13.334Z" />
                    <path d="M15.3375 5.86289C16.0002 5.86289 16.5375 5.32563 16.5375 4.66289C16.5375 4.00015 16.0002 3.46289 15.3375 3.46289C14.6748 3.46289 14.1375 4.00015 14.1375 4.66289C14.1375 5.32563 14.6748 5.86289 15.3375 5.86289Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_107_952">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-slate-100/90 duration-150 group-hover:fill-slate-50"
                >
                  <path d="M8.49125 7.4475V10.8825C8.05863 10.7684 7.60593 10.7529 7.16651 10.837C6.72709 10.9211 6.31215 11.1028 5.95228 11.3686C5.59241 11.6345 5.29678 11.9777 5.08719 12.3729C4.87759 12.7682 4.75937 13.2055 4.74125 13.6525C4.7158 14.0379 4.77324 14.4243 4.90969 14.7857C5.04614 15.147 5.25843 15.475 5.53227 15.7474C5.8061 16.0198 6.13513 16.2304 6.4972 16.365C6.85926 16.4995 7.24596 16.5549 7.63125 16.5275C8.01976 16.557 8.41005 16.5019 8.7752 16.366C9.14035 16.23 9.47167 16.0165 9.74629 15.7401C10.0209 15.4637 10.2323 15.131 10.3659 14.765C10.4995 14.399 10.552 14.0083 10.52 13.62V0H13.9187C14.4975 3.595 16.2937 4.43 18.7025 4.815V8.26C17.0341 8.12366 15.4246 7.5803 14.015 6.6775V13.4837C14.0125 16.5625 12.1875 20 7.65625 20C6.80632 19.9961 5.96571 19.8226 5.18368 19.4897C4.40165 19.1569 3.69392 18.6712 3.10195 18.0613C2.50998 17.4515 2.04569 16.7295 1.73627 15.9379C1.42685 15.1463 1.27853 14.3009 1.3 13.4513C1.32672 12.5664 1.54073 11.6973 1.9279 10.9013C2.31506 10.1052 2.8666 9.40028 3.54613 8.83297C4.22566 8.26565 5.01774 7.84884 5.87014 7.61002C6.72254 7.37121 7.61588 7.31582 8.49125 7.4475Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-12 gap-8 lg:col-span-8 lg:mt-0">
            <div className="col-span-6 md:col-span-3">
              <p className="text-md font-semibold text-white">Company</p>
              <div className="mt-4 flex flex-col space-y-3">
                {navigation.company.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-md text-slate-100 duration-150 hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="text-md font-semibold text-white">Solutions</p>
              <div className="mt-4 flex flex-col space-y-3">
                {navigation.solutions.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-md text-slate-100 duration-150 hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="text-md font-semibold text-white">Integrations</p>
              <div className="mt-4 flex flex-col space-y-3">
                {navigation.integrations.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-md text-slate-100 duration-150 hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="text-md font-semibold text-white">Resources</p>
              <div className="mt-4 flex flex-col space-y-3">
                {navigation.resources.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="text-md text-slate-100 duration-150 hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-16 border-gray-secondary-400/60" />
        <div className="flex w-full flex-col justify-between pt-8 sm:flex-row">
          <p className="text-md text-slate-200">
            © 2022 Wavvy, Inc. All rights reserved.
          </p>
          <div className="mt-5 flex gap-3 sm:mt-0">
            <Link href="#">
              <a className="text-md text-slate-100 underline duration-150 hover:text-white">
                Terms
              </a>
            </Link>
            <Link href="#">
              <a className="text-md text-slate-100 underline duration-150 hover:text-white">
                Privacy
              </a>
            </Link>
            <Link href="#">
              <a className="text-md text-slate-100 underline duration-150 hover:text-white">
                Cookies
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
