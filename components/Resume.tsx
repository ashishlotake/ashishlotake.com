import { siteMetadata } from '~/data'
import { PageSeo } from './SEO'
import { certificateData, experienceData, communityData, educationData } from '~/data/personalData'
import { DevIcon } from './DevIcon'
import { Disclosure, Transition } from '@headlessui/react'
import { Link } from './Link'

let skills = [
  'Markdown',
  'Git',
  'Docker',
  'Jupyter',
  'Keras',
  'kubernetes',
  'Linux',
  'Matplotlib',
  'MySQL',
  'Pandas',
  'PowerBI',
  'Python',
  'Pytorch',
  'Seaborn',
  'Sklearn',
  'Tensorflow',
  'AWS',
]

export default function Resume() {
  return (
    <>
      <PageSeo
        title={`Resume - ${siteMetadata.author}`}
        description="A dedicated and aspiring data scientist and machine learning engineer, wish to work for an institution that offers technical and personal growth."
      />
      <div className="0 mt-5  rounded-lg border-2    text-center shadow-lg bggray-50/10 p-2 dark:border-gray-800 dark:bg-bg  ">
        <div className="   border-b-2  pb-2 text-xl   font-medium dark:border-gray-800 ">
          Skills
        </div>
        <div className="my-5 flex flex-col  items-center space-x-2   xl:sticky xl:top-0">
          <div className="flex flex-wrap  items-center gap-2 pt-2 ">
            {skills.map((d) => (
              <div key={d} className="group">
                <DevIcon className="w-8 h-8" type={d} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        {/* #################### 1nd col #################### */}
        <div className="space-y-4">
          {/* 1 */}
          <ResumeBlock title="Experience">
            <ResumeContent data={experienceData} />
          </ResumeBlock>
        </div>
        {/* #################### 2nd col #################### */}
        <div className="space-y-4 ">
          {/* 1 */}
          <ResumeBlock title="Certificates">
            <ResumeContent data={certificateData} />
          </ResumeBlock>
          {/*  */}
        </div>
      </div>
      {/* hidden content  */}
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* #################### 1nd col #################### */}
                  <div className="space-y-4">
                    {/* 1 */}
                    <ResumeBlock title="Education">
                      <ResumeContent data={educationData} />
                    </ResumeBlock>
                  </div>
                  {/* #################### 2nd col #################### */}
                  <div className="space-y-4 ">
                    {/* 1 */}
                    <ResumeBlock title="Community works">
                      <ResumeContent data={communityData} />
                    </ResumeBlock>
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

function ResumeBlock({ title, children }) {
  return (
    <div className="rounded-lg border-2 px-3 shadow-lg bggray-50/10 dark:border-gray-800 dark:bg-bg   ">
      <div className="group">
        <div className="   border-b-2  py-2 text-xl  text-center font-medium dark:border-gray-800 ">
          {title}
        </div>
        <div className="px-1 pt-2">{children}</div>
      </div>
    </div>
  )
}

function ResumeContent({ data }) {
  return (
    <>
      {data.map((d) => (
        <div key={d.title} className="my-2">
          <div className="flex flex-row">
            <h1 className=" m-0 w-full text-lg font-medium tracking-tight text-gray-800 dark:text-gray-100">
              {d.title}
            </h1>{' '}
            <span className="text-md text-gray-500 ">&nbsp;@&nbsp;</span>{' '}
            <span className="">
              <Link href={d.url} className="company">
                {d.company ? `${d.company}` : 'Credential'}
              </Link>
            </span>
          </div>
          <div className="">
            <div className="text-sm text-gray-500 ">{d.range ? `${d.range}` : `${d.provider}`}</div>
            {d.text1 ? (
              <p className=" my-3 text-sm text-gray-700 max-w-none dark:text-gray-300 ">
                {d.text1}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </>
  )
}
