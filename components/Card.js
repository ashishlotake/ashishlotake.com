import CustomLink from './CustomLink'
import Image from 'next/image'
import Link from 'next/link'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import { BsFolder2 } from 'react-icons/bs'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <>
    <article className="rounded border border-slate-500 border-opacity-50 p-3 sm:border-opacity-0 md:p-0  ">
      <div className=" flex flex-col items-center  md:flex-row">
        {imgSrc ? (
          <div className=" sm:mr-8 sm:grid sm:h-40 sm:w-40 sm:shrink-0 sm:place-content-center sm:rounded-full ">
            <img alt="" className="object-cover" src={imgSrc} />
          </div>
        ) : null}
        <div className="">
          <h1 className="relative my-2 w-full flex-none text-2xl font-semibold ">{title}</h1>
          <Subtitle>{description}</Subtitle>

          <div className="flex space-x-4 pt-1">
            {github ? (
              <Link href={github}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block text-sm font-medium text-primary-600 focus:outline-none focus:ring active:text-primary-500"
                >
                  <span className="absolute inset-0 border-2 border-slate-500 "></span>
                  <span className="block border-2 border-slate-500 bg-white px-2 py-2 text-sm uppercase  tracking-wider text-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 dark:bg-background-color dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 mb-0.5 inline-block h-5 w-5 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </g>
                      </g>
                    </svg>
                    Source code
                  </span>
                </a>
              </Link>
            ) : null}

            {href ? (
              <Link href={href}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" group relative inline-block font-semibold uppercase focus:outline-none focus:ring"
                >
                  <span className="absolute inset-0 border-2 border-black  group-active:border-primary-500 dark:border-slate-200"></span>
                  <span className=" block border-2 border-black bg-primary-500 px-2 py-2 text-sm font-semibold tracking-wider transition-transform active:border-primary-500 active:bg-primary-400 group-hover:-translate-x-1 group-hover:-translate-y-1 dark:border-slate-200">
                    Web app
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-1 mb-0.5 inline-block h-5 w-5 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  </>
)

export default Card
