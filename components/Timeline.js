import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function Timeline() {
  return (
    <div>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className=" absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
            <FaBlackTie className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Applying for Jobs
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span>
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Feel confident that I can work as a junior Data Engineer. Wish me Luck
          </p>
        </li>
        {/* <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Graduated College
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Dec 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            
          </p>
        </li> */}
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 ring-8 ring-white dark:bg-yellow-700 dark:ring-gray-900">
            {/* <SiLeetcode /> */}
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            3 Month Intership
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            A.I. Technical Intern
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            {/* <HiOutlineDatabase /> */}
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Joined Diploma College
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2021
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Diploma in Artificial Intelligence & Machine Learning.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Graduated College
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2021
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            With 8.32 CGPA
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Started College</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2018
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Bachelor of Technology in Mechancial Engineering
          </p>
        </li>

        {/* ####### */}
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <RiDoorClosedLine />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Finished Senior Year
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2018
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            With 87.5% in 10<sup>th</sup> & 87% in Polytechnic Diploma<sup></sup>
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-200 ring-8 ring-white dark:bg-fuchsia-900 dark:ring-gray-900">
            <AiOutlineCode />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">First Code</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2015
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Wrote my first program in HTML
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaBaby />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2nd 1999
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Final version releases
          </p>
        </li>

        {/* ######### */}

        {/* <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className="text-small ml-1.5 flex">
                  <HiChevronDown
                    className={`h-6 w-6 text-gray-600  ${open ? 'rotate-180 transform ' : ''}`}
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
                  {' '}
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
                      <RiDoorClosedLine />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Finished Senior Year
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      July  2018
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      With 87.5% in 10<sup>th</sup> & 87% in Polytechnic Diploma<sup></sup>
                    </p>
                  </li>
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-200 ring-8 ring-white dark:bg-fuchsia-900 dark:ring-gray-900">
                      <AiOutlineCode />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      First Code
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2015
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Wrote my first program in HTML 
                    </p>
                  </li>
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-[#1a2532] dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                      <FaBaby />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    February 2nd 1999
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Final version releases
                    </p>
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure> */}
      </ol>
    </div>
  )
}
