import { siteMetadata } from '~/data'
import { Disclosure, Transition } from '@headlessui/react'
import { DevIcon } from './DevIcon'

import { PageTitle, Subtitle } from './PageTitle'
import { PageSeo } from './SEO'

const TimeLineInfo = [
  // {
  //   title: 'Graduated College',
  //   description:"",
  //   icon: 'ic:outline-school',
  //   color:'bg-lime-200',
  //   dark_color:'dark:bg-purple-900',
  //   date:'Dec 2022',
  //   status: 'Present',

  // },
  {
    title: 'Applying for Jobs',
    description: 'Feel confident that I can work as a junior Data Scientist. Wish me Luck',
    icon: 'jobsearch',
    color: 'bg-primary-400',
    dark_color: 'dark:bg-green-900',
    date: 'September 2022',
    status: 'Present',
  },
  {
    title: 'Intership',
    description: 'Artificial Intelligence  Technical Intern',
    icon: 'intern',
    color: 'bg-yellow-300',
    dark_color: 'dark:bg-yellow-700',
    date: 'June - August 2022',
  },
  {
    title: 'Joined Diploma College',
    description: ' Diploma in Artificial Intelligence & Machine Learning',
    icon: 'highschool',
    color: 'bg-orange-200',
    dark_color: 'dark:bg-orange-900',
    date: 'August 2021',
  },
  {
    title: 'Graduated Bachelor College',
    description: 'With 8.32 CGPA',
    icon: 'cap',
    color: 'bg-purple-200',
    dark_color: 'dark:bg-purple-900',
    date: 'July 2021',
  },
  {
    title: 'Started College',
    description: 'Bachelor of Technology in Mechancial Engineering',
    icon: 'highschool',
    color: 'bg-red-200',
    dark_color: 'dark:bg-red-900',
    date: 'August 2018',
  },
  {
    title: 'Finished 10th and Polytechnic',
    description: 'With 87.5% in 10th & 87% in Polytechnic Diploma',
    icon: 'graudate',
    color: ' bg-purple-200',
    dark_color: 'dark:bg-purple-900',
    date: 'July 2018',
  },
  {
    title: 'First Code',
    description: 'Wrote my first program in HTML',
    icon: 'code',
    color: 'bg-fuchsia-200',
    dark_color: 'dark:bg-fuchsia-900',
    date: '2015',
  },
  {
    title: 'Born',
    description: 'Final version releases',
    icon: 'Born',
    color: ' bg-blue-200',
    dark_color: 'dark:bg-blue-900',
    date: 'February 2nd 1999',
  },
]

export default function Timeline() {
  const col = 'bg-lime-00'
  return (
    <>
      <PageSeo title={`Journey - ${siteMetadata.author}`} description="My journey" />
      <div className="pt-10">
        <div className="">
          <PageTitle>Journery</PageTitle>
          <Subtitle>Growing everyday a bit.</Subtitle>
        </div>

        <ol className="relative mt-6 ml-3 border-l border-gray-400 dark:border-gray-700 ">
          {TimeLineInfo.slice(0, 1).map((d) => (
            <TimelineCard key={d.title} d={d} />
          ))}

          {TimeLineInfo.slice(1, 2).map((d) => (
            <TimelineCard key={d.title} d={d} />
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className="text-small ml-1.5 flex pt-2">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8  ${open ? 'rotate-180 transform ' : ''}`}
                    >
                      <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-400 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-400 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>
                    {TimeLineInfo.slice(2).map((d) => (
                      <TimelineCard key={d.title} d={d} />
                    ))}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </ol>
      </div>
    </>
  )
}

function TimelineCard({ d }) {
  return (
    <li
      key={d.title}
      className=" mb-4 ml-6 md:ml-8 rounded-lg    border-2 shadow-lg bggray-50/10 p-4 dark:border-gray-800 dark:bg-bg/80 bg-white/50"
    >
      <div></div>
      <span
        className={` absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black  ${d.color}  ring-1 ring-black  dark:ring-gray-700 `}
      >
        {d.status ? (
          <>
            <div className={`absolute ${d.color} rounded-full w-6 h-6   animate-ping`}></div>
            <div className={`absolute ${d.color} rounded-full w-6 h-6`}></div>
          </>
        ) : null}

        <DevIcon type={d.icon} className="h-4 w-4" />
      </span>
      <h3 className="flex  m-0 w-full text-lg font-medium tracking-tight text-gray-800 dark:text-gray-100 ">
        {d.title}

        {d.status ? (
          <span className="mr-2 ml-3 h-full rounded bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {d.status}
          </span>
        ) : null}
      </h3>
      <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {d.date}
      </time>
      <p className="text-sm text-gray-700 max-w-none dark:text-gray-300 my-1 ">{d.description}</p>
    </li>
  )
}
