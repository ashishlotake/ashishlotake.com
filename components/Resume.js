import TechIcons from '@/components/TechIcons'
import { experienceData } from '@/data/experienceData'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { educationData, certificateData, communityData } from '@/data/experienceData'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'

let logo = [
  'python',
  'keras',
  'tensorflow',
  'pytorch',
  'sklearn',
  'pandas',
  'plotly',
  'powerbi',
  'matplotlib',
  'mysql',
  'excel',
  'kubernetes',
  'docker',
  'linux',
  'numpy',
  'aws',
  'mdx',
  'git',
]

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description="A dedicated and aspiring data scientist and machine learning engineer, wish to work for an institution that offers technical and personal growth."
      />
      <div className="mt-5 rounded-xl  border-2 border-black text-center  hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
        <div className="   border-b-2 border-gray-500 px-5 pt-1 text-2xl font-medium md:text-3xl">
          Skills
        </div>
        <div className="my-5 flex flex-col  items-center space-x-2  px-5  xl:sticky xl:top-0">
          <div className="flex flex-wrap items-center gap-3 pt-2 ">
            {logo.map((d) => (
              <TechIcons key={d} techs={[d]} techsize={30} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        {/* #################### 1nd col #################### */}
        <div className="space-y-4">
          {/* 1 */}
          <div className="rounded-xl border-2 border-black hover:bg-[#7471f6]  hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="  border-b-2 border-gray-500 px-5 py-2   text-2xl font-medium group-hover:border-white dark:group-hover:border-black md:text-3xl">
                Experience
              </div>

              <div className="px-5 pt-5">
                {experienceData.map((d) => (
                  <div key={d.title} className="group">
                    <div className="flex flex-row">
                      <h1 className="m-0 w-full text-xl font-bold tracking-tight">{d.title}</h1>{' '}
                      <span className="text-lg text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500 md:text-xl">
                        &nbsp;@&nbsp;
                      </span>{' '}
                      <span className="">
                        <a href={d.url} className="company">
                          {d.company}
                        </a>
                      </span>
                    </div>
                    <div className="">
                      <div className=" font-mono text-sm text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500">
                        {d.range}
                      </div>
                      <p className="pb-5 pt-2 tracking-tight text-gray-700 group-hover:text-white dark:text-gray-400 dark:group-hover:text-black">
                        {d.text1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/* #################### 2nd col #################### */}
        <div className="space-y-4 ">
          {/* 1 */}
          <div className="rounded-xl border-2 border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="   border-b-2 border-gray-500 px-5 py-2   text-2xl font-medium group-hover:border-white dark:group-hover:border-black md:text-3xl">
                Certificates
              </div>
              <div className="px-5 pt-5">
                {certificateData.map((d) => (
                  <div key={d.title} className="pb-2">
                    <div className="flex flex-row">
                      <h1 className=" m-0 w-full text-xl font-bold tracking-tight">{d.title}</h1>{' '}
                      <span className="text-lg text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500 md:text-xl">
                        &nbsp;@&nbsp;
                      </span>{' '}
                      <span className="">
                        <a href={d.url} className="company">
                          Credential
                        </a>
                      </span>
                    </div>
                    <div>
                      <div className="font-mono  text-sm tracking-tight text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500">
                        {d.provider}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* hidden content  */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button>
              <div className="text-small ml-1.5 flex pt-2">
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* #################### 1nd col #################### */}
                  <div className="space-y-4">
                    {/* 1 */}

                    <div className="rounded-xl border-2 border-black hover:bg-[#7157eb] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
                      <div className="group">
                        <div className="   border-b-2 border-gray-500 px-5 py-2   text-2xl font-medium group-hover:border-white dark:group-hover:border-black md:text-3xl">
                          Education
                        </div>
                        <div className="px-5 pt-5">
                          {educationData.map((d) => (
                            <div key={d.title} className="">
                              <div className="flex flex-row">
                                <h1 className=" m-0 w-full text-xl font-bold tracking-tight">
                                  {d.title}
                                </h1>{' '}
                                <span className="text-lg text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500 md:text-xl">
                                  &nbsp;@&nbsp;
                                </span>{' '}
                                <span className="">
                                  <a href={d.url} className="company">
                                    {d.company}
                                  </a>
                                </span>
                              </div>
                              <div className="">
                                <div className=" font-mono text-sm text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500">
                                  {d.range}
                                </div>
                                <p className="pb-5 pt-2 tracking-tight text-gray-700 group-hover:text-white dark:text-gray-400 dark:group-hover:text-black">
                                  {d.text1}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* #################### 2nd col #################### */}
                  <div className="space-y-4 ">
                    {/* 1 */}

                    <div className="rounded-xl border-2  border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
                      <div className="group">
                        <div className="   border-b-2 border-gray-500 px-5 py-2   text-2xl font-medium group-hover:border-white dark:group-hover:border-black md:text-3xl">
                          Community works
                        </div>
                        <div className="px-5 pt-5">
                          {communityData.map((d) => (
                            <div key={d.title} className="">
                              <div className="flex flex-row">
                                <h1 className=" m-0  w-full text-xl font-bold tracking-tight">
                                  {d.title}
                                </h1>{' '}
                                <span className="text-lg text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500 md:text-xl">
                                  &nbsp;@&nbsp;
                                </span>{' '}
                                <span className="">
                                  <a href={d.url} className="company">
                                    {d.company}
                                  </a>
                                </span>
                              </div>
                              <div className="">
                                <div className=" font-mono text-sm text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-500">
                                  {d.range}
                                </div>
                                <p className="pb-5 pt-2 tracking-tight text-gray-700 group-hover:text-white dark:text-gray-400 dark:group-hover:text-black">
                                  {d.text1}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  )
}
