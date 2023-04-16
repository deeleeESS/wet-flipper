import Image from 'next/future/image'

import Team01 from '../images/avatars/team-01.jpg'
import Team02 from '../images/avatars/team-02.jpg'
import Team03 from '../images/avatars/team-03.jpg'
import Team04 from '../images/avatars/team-04.jpg'
import Team05 from '../images/avatars/team-05.jpg'
import Team06 from '../images/avatars/team-06.jpg'
import Team07 from '../images/avatars/team-07.jpg'
import Team08 from '../images/avatars/team-08.jpg'
import Team09 from '../images/avatars/team-09.jpg'
import { Container } from '../components/Container'

const team = [
  {
    name: 'Amanda Smith',
    role: 'CEO / Founder',
    avatar: Team01,
  },
  {
    name: 'Orlando Katwala',
    role: 'Cofounder',
    avatar: Team02,
  },
  {
    name: 'Daniel Johnson',
    role: 'Product Manager',
    avatar: Team03,
  },
  {
    name: 'Amy Winehouse',
    role: 'Product Designer',
    avatar: Team04,
  },
  {
    name: 'Emily Villa',
    role: 'Sound Engineer',
    avatar: Team05,
  },
  {
    name: 'Hunter Pimblet',
    role: 'Sound Engineer',
    avatar: Team06,
  },
  {
    name: 'Billy Smith',
    role: 'Software Developer',
    avatar: Team07,
  },
  {
    name: 'Veronica Guzman',
    role: 'Frontend Developer',
    avatar: Team08,
  },
  {
    name: 'Elana Jackson',
    role: 'Marketing Lead',
    avatar: Team09,
  },
]

export function Team() {
  return (
    <section className="relative overflow-hidden bg-vanilla pb-16 sm:pb-20 lg:pb-24">
      <div className="bg-amber-100 py-16 sm:pt-28 sm:pb-24 lg:pt-32">
        <Container>
          <div className="mx-auto max-w-lg items-center sm:max-w-3xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start">
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

                <span>Our team</span>
              </p>
              <h1 className="mt-5 text-center text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-5xl sm:leading-snug md:mx-auto lg:text-left xl:mx-0">
                The people behind Wavy
              </h1>
            </div>
            <div>
              <p className="mx-auto mt-5 max-w-lg text-center text-lg leading-relaxed text-slate-700 lg:mr-0 lg:ml-auto lg:mt-0 lg:text-left">
                Lorem ipsum dolor sit amet dapibus fusce sed. Aliquet porta
                bibendum est platea fermentum tempus egestas. Luctus volutpat
                mauris quisque dictum et rhoncus habitasse.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative bg-vanilla">
        <div className="absolute inset-x-0 h-40 bg-amber-100"></div>
        <Container>
          <div className="mx-auto grid max-w-lg gap-x-8 gap-y-14 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="relative z-10">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold text-slate-900">
                      {member.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="group flex h-8 w-8 items-center justify-center border border-gray-secondary-400/75 duration-150 hover:bg-gray-secondary-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="h-3.5 w-3.5 fill-slate-700 duration-150"
                        >
                          <path d="M7.52866 20L7.5 11.25H3.75V7.5H7.5V5C7.5 1.626 9.58939 0 12.5992 0C14.041 0 15.2801 0.107338 15.6412 0.155313V3.68134L13.5537 3.68229C11.9168 3.68229 11.5998 4.46012 11.5998 5.60155V7.5H16.25L15 11.25H11.5998V20H7.52866Z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        className="group flex h-8 w-8 items-center justify-center border border-gray-secondary-400/75 duration-150 hover:bg-gray-secondary-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="h-3.5 w-3.5 fill-slate-700 duration-150"
                        >
                          <path d="M20 3.75C19.25 4.125 18.5 4.25 17.625 4.375C18.5 3.875 19.125 3.125 19.375 2.125C18.625 2.625 17.75 2.875 16.75 3.125C16 2.375 14.875 1.875 13.75 1.875C11.625 1.875 9.75 3.75 9.75 6C9.75 6.375 9.75 6.625 9.875 6.875C6.5 6.75 3.375 5.125 1.375 2.625C1 3.25 0.875 3.875 0.875 4.75C0.875 6.125 1.625 7.375 2.75 8.125C2.125 8.125 1.5 7.875 0.875 7.625C0.875 9.625 2.25 11.25 4.125 11.625C3.75 11.75 3.375 11.75 3 11.75C2.75 11.75 2.5 11.75 2.25 11.625C2.75 13.25 4.25 14.5 6.125 14.5C4.75 15.625 3 16.25 1 16.25C0.625 16.25 0.375 16.25 0 16.25C1.875 17.375 4 18.125 6.25 18.125C13.75 18.125 17.875 11.875 17.875 6.5C17.875 6.375 17.875 6.125 17.875 6C18.75 5.375 19.5 4.625 20 3.75Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="mt-1 text-lg text-slate-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
