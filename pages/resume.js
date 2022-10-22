import TechIcons from '@/components/TechIcons'
import Image from 'next/image'
import { experienceData } from '@/data/experienceData'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { educationData, certificateData, communityData } from '@/data/experienceData'
import projectsData from '@/data/projectsData'

let logo = [
  'python',
  'keras',
  'tensorflow',
  'pytorch',
  'sklearn',
  'pandas',
  'plotly',
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

export default function Journey() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description="A dedicated and aspiring data scientist and machine learning engineer, wish to work for an institution that offers technical and personal growth."
      />
      <img
        className="rounded-xl  bg-[#f2e8de] md:rounded-2xl"
        src="/static/images/resumeHead.svg"
      />
      <div className="fontmono grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        {/* #################### 1nd col #################### */}
        <div className="space-y-4">
          {/* 1 */}
          <div className="rounded-xl border-2 border-black hover:bg-[#6562F5]  hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className=" border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-3xl">
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
          </div>
          {/* 2 */}

          <div className="rounded-xl border-2 border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="  border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-3xl">
                Education
              </div>
              <div className="px-5 pt-5">
                {educationData.map((d) => (
                  <div key={d.title} className="">
                    <div className="flex flex-row">
                      <h1 className=" m-0 w-full text-xl font-bold tracking-tight">{d.title}</h1>{' '}
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

          {/* 3 */}
          <div className="rounded-xl border-2 border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="  border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-3xl">
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
        </div>

        {/* #################### 2nd col #################### */}
        <div className="space-y-4 ">
          {/* 1 */}
          <div className="rounded-xl border-2 border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="  border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-4xl">
                Project
              </div>
              <div className="px-5 pt-5">
                {projectsData.map((d) => (
                  <div key={d.title} className="pb-2">
                    <div className="flex flex-row">
                      <h1 className=" m-0g w-full text-xl font-bold tracking-tight">{d.title}</h1>{' '}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 */}

          <div className="rounded-xl border-2 border-black  hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="  border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-3xl">
              Skills
            </div>
            <div className="px-5 py-5">
              <div className="mt-2 flex flex-wrap gap-4">
                {logo.map((logo) => (
                  <div key={logo} className="group dark:hover:text-black">
                    <TechIcons className="my-2" techs={[logo]} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="rounded-xl border-2  border-black hover:bg-[#6562F5] hover:bg-opacity-90 hover:text-white dark:border-[#BFB9AA] dark:border-opacity-80 dark:hover:bg-[#cadd57] dark:hover:text-black">
            <div className="group">
              <div className="  border-b-2 border-gray-500  px-5 py-2 text-2xl font-medium md:text-3xl">
                Community works
              </div>
              <div className="px-5 pt-5">
                {communityData.map((d) => (
                  <div key={d.title} className="">
                    <div className="flex flex-row">
                      <h1 className=" m-0  w-full text-xl font-bold tracking-tight">{d.title}</h1>{' '}
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
      <div className="grid place-items-center pt-10">
        <a target="_blank" rel="noopener noreferrer" href="/static/resume.pdf">
          <button aria-label="Scroll To Top" type="button" className="pushable">
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">Download PDF</span>
          </button>
        </a>
      </div>
    </>
  )
}
