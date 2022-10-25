import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from './SEO'
import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'

const TimeLineInfo = [
  // {
  //   title: 'Graduated College',
  //   description:"",
  //   icon: <FaGraduationCap />,
  //   color:'bg-lime-200',
  //   dark_color:'dark:bg-purple-900',
  //   date:'Dec 2022',
  // },
  {
    title: 'Applying for Jobs',
    description: 'Feel confident that I can work as a junior Data Scientist. Wish me Luck',
    icon: <FaBlackTie className="animate-none" />,
    color: 'bg-primary-300',
    dark_color: 'dark:bg-green-900',
    date: 'September 2022',
    status: 'Present',
  },
  {
    title: '3 Month Intership',
    description: 'A.I. Technical Intern',
    icon: <TbDeviceDesktopAnalytics />,
    color: 'bg-yellow-300',
    dark_color: 'dark:bg-yellow-700',
    date: 'June - August 2022',
  },
  {
    title: 'Joined Diploma College',
    description: ' Diploma in Artificial Intelligence & Machine Learning',
    icon: <BsBuilding />,
    color: 'bg-orange-200',
    dark_color: 'dark:bg-orange-900',
    date: 'August 2021',
    status: 'Present',
  },
  {
    title: 'Graduated College',
    description: 'With 8.32 CGPA',
    icon: <FaGraduationCap />,
    color: 'bg-purple-200',
    dark_color: 'dark:bg-purple-900',
    date: 'July 2021',
  },
  {
    title: 'Started College',
    description: 'Bachelor of Technology in Mechancial Engineering',
    icon: <BsBuilding />,
    color: 'bg-red-200',
    dark_color: 'dark:bg-red-900',
    date: 'August 2018',
  },
  {
    title: 'Finished Polytechnic Year',
    description: 'With 87.5% in 10th & 87% in Polytechnic Diploma',
    icon: <RiDoorClosedLine />,
    color: ' bg-purple-200',
    dark_color: 'dark:bg-purple-900',
    date: 'July 2018',
  },
  {
    title: 'First Code',
    description: 'Wrote my first program in HTML',
    icon: <AiOutlineCode />,
    color: 'bg-fuchsia-200',
    dark_color: 'dark:bg-fuchsia-900',
    date: '2015',
  },
  {
    title: 'Born',
    description: 'Final version releases',
    icon: <FaBaby />,
    color: ' bg-blue-200',
    dark_color: 'dark:bg-blue-900',
    date: 'February 2nd 1999',
  },
]

export default function Timeline() {
  const col = 'bg-lime-00'
  return (
    <>
      <PageSEO title={`Journey - ${siteMetadata.author}`} description="My journey" />
      <div className="pt-4">
        <div className="borderb border-gray-400 dark:border-gray-600">
          <PageTitle>Journery</PageTitle>
        </div>

        <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
          {TimeLineInfo.slice(0, 1).map((d) => (
            <li
              key={d.title}
              className="mb-4 ml-8 rounded-md border-2  border-gray-500   px-4 py-4 shadow-md  shadow-black dark:border-gray-600 dark:shadow-gray-500"
            >
              <span
                className={` absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full text-black  ${d.color}  ring-8 ring-white  dark:ring-gray-900`}
              >
                {d.icon}
              </span>
              <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {d.title}
                <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                  {d.status}
                </span>
              </h3>
              <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                {d.date}
              </time>
              <p className="text mt-1 font-normal tracking-tight text-gray-700 dark:text-gray-300">
                {d.description}
              </p>
            </li>
          ))}

          {TimeLineInfo.slice(1, 2).map((d) => (
            <li
              key={d.title}
              className="mb-4 ml-8 rounded-md border-2  border-gray-500   px-4 py-4 shadow-md  shadow-black dark:border-gray-600 dark:shadow-gray-500"
            >
              {/* <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none"> */}
              <span
                className={` absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black  ${d.color}  ring-8 ring-white  dark:ring-gray-900`}
              >
                {d.icon}
              </span>
              <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {d.title}

                {d.status ? (
                  <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                    {d.status}
                  </span>
                ) : null}
              </h3>
              <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                {d.date}
              </time>
              <p className="text mt-1 font-normal tracking-tight text-gray-700 dark:text-gray-300">
                {d.description}
              </p>
            </li>
          ))}

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button>
                  <div className="text-small ml-1.5 flex">
                    <HiChevronDown
                      className={`h-8 w-8 text-primary-500 dark:text-darkprimary-500 ${
                        open ? 'rotate-180 transform ' : ''
                      }`}
                    />
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
                      <li
                        key={d.title}
                        className="mb-4 ml-8 rounded-md border-2  border-gray-500   px-4 py-4 shadow-md  shadow-black dark:border-gray-600 dark:shadow-gray-500"
                      >
                        {/* <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none"> */}
                        <span
                          className={` absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-black  ${d.color}  ring-8 ring-white  dark:ring-gray-900`}
                        >
                          {d.icon}
                        </span>
                        <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {d.title}

                          {d.status ? (
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                              {d.status}
                            </span>
                          ) : null}
                        </h3>
                        <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                          {d.date}
                        </time>
                        <p className="text mt-1 font-normal tracking-tight text-gray-700 dark:text-gray-300">
                          {d.description}
                        </p>
                      </li>
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
