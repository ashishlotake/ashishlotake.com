import type { ProjectCardProps } from '~/types'
import Image from 'next/image'
import { Link } from './Link'

export function ProjectCard({ project }: ProjectCardProps) {
  let { title, description, imgSrc, href, github, blog } = project

  return (
    <div>
      <div className="h-full overflow-hidden border-2 rounded-lg dark:border-gray-800   dark:bg-gray-900/40 hover:border-black dark:hover:border-white shadow-lg">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36 bg-white "
          width={1088}
          height={612}
        />

        <div className="p-6">
          <div className="flex justify-between mb-3">
            <h2 className="m-0 w-full  pt-2 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                <Link href={github} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              )}
            </h2>
          </div>
          {/* <p className="mb-3 max-w-none text-gray-600 dark:text-gray-300 ">{description}</p> */}
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
          <div className=" flex space-x-4 pb-1 pt-1">
            {github && (
              <Link href={github} className="group block ">
                <Button className="px-1  sm:px-2 ">
                  <p className="link-underline1 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 mb-1 inline-block h-5 w-5 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </g>
                      </g>
                    </svg>

                    <text className=""> code</text>
                  </p>
                </Button>
              </Link>
            )}
            {href && (
              <Link href={href} className="group block ">
                <Button className="px-1  sm:px-2 ">
                  <p className="link-underline1 py-2">
                    <text className=""> App</text>

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
                  </p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import clsx from 'clsx'

export function Button({ className, children }) {
  return (
    <button
      // onClick={onClick}
      className={clsx(
        'rounded  ',
        'border   dark:border-gray-800',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'scale-100 hover:scale-[1.05] active:scale-[0.97] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-100',
        'transition-transform ',
        className
      )}
    >
      <h3 className="group   leading-snug tracking-tight  text-gray-700dark:text-gray-200">
        <div className="flex flex-row">{children}</div>
      </h3>
    </button>
  )
}

export function ProjectCard01({ project }: ProjectCardProps) {
  let { title, description, imgSrc, href, github, blog } = project

  return (
    <div className="overflow-hidden flex flex-col space-y-5 rounded-lg border-2  bggray-50/10 p4 dark:border-gray-800 dark:bg-gray-900/40  md:flex-row md:space-y-0 md:space-x-8 shadow-md">
      <div className="overflow-hidden  md:w-52 bg-white">
        <div className="relative  w-full  md:h-full md:w-52 h-36">
          <Image
            alt={title}
            src={imgSrc}
            className="object-contain object-center lg:h-48 md:h-36  rounded-lg"
            width={1088}
            height={612}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="px-5 pb-3 md:p-2 flex flex-col space-y-2">
          <Link href={github} className="transition duration-200 hover:opacity-60">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 ">{title}</h2>
          </Link>
          {/* <p className="text-gray-800 dark:text-gray-300 ">{description}</p> */}
          <p className="mb-3  text-gray-500 max-w-none dark:text-gray-400">{description}</p>
          <div className=" flex space-x-4 pb-1 pt-1">
            {github && (
              <Link href={github} className="group block ">
                <Button className="px-1  sm:px-2 ">
                  <p className="link-underline1 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 mb-1 inline-block h-5 w-5 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </g>
                      </g>
                    </svg>

                    <text className=""> code</text>
                  </p>
                </Button>
              </Link>
            )}
            {href && (
              <Link href={href} className="group block ">
                <Button className="px-1  sm:px-2 ">
                  <p className="link-underline1 py-2">
                    <text className=""> App</text>

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
                  </p>
                </Button>
              </Link>
            )}
            {blog && (
              <Link href={blog} className="group block ">
                <Button className="px-1  sm:px-2 ">
                  <p className="link-underline1 py-2">
                    <text className=""> Read More</text>
                    <svg
                      className="ml-1 mb-0.5 inline-block h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M17 5H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7Z"
                          clipRule="evenodd"
                        />
                        <path d="M8 7h8v2H8V7Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z" />
                      </g>
                    </svg>
                  </p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
