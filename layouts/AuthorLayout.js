import { FaKaggle } from 'react-icons/fa'
import { BsMailbox } from 'react-icons/bs'
import { EmailIcon } from 'react-share'
import SocialIcon from '@/components/social-icons'
import { PageTitle, Subtitle, PageSubHeading, CardTitle } from '@/components/PageTitle'
import {
  educationData,
  experienceData,
  certificateData,
  communityData,
} from '@/data/experienceData'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { Experience, Certificate } from '@/components/Experience'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'
import siteMetadata from '@/data/siteMetadata'
export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-xl ">
          <PageTitle>About</PageTitle>
          <Subtitle>
            Data scientist 👨‍💻, Machine learning 🤖 & artificial intelligence 🧠 practitioner
          </Subtitle>
        </div>
      </div>

      <div className="pb-5 grid grid-cols-1 pt-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] ">
        <div className="lg:pl-10">
          <div className="flex justify-center pt-0 lg:pt-[1em]">
            <div className="max-w-xs   px-2.5 lg:max-w-none">
              <img
                src={siteMetadata.siteLogo}
                alt="avatar"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="ounded-2xl aspect-square rotate-3 rounded-full bg-zinc-100 object-cover grayscale duration-300  hover:grayscale-0 dark:bg-zinc-800"
              />
              <div className=" flex justify-center">{siteMetadata.occupation}</div>
              <div className="flex justify-center ">{siteMetadata.company}</div>
            </div>
          </div>
          <div className="flex justify-center space-x-3  ">
            <ul className="mt-4 flex justify-center gap-5">
              <li>
                <SocialIcon kind='twitter' href={siteMetadata.twitter} size='5' />
              </li>
              <li>
                <SocialIcon kind='github' href={siteMetadata.github} size='5' />
              </li>
              <li>
                <SocialIcon kind='linkedin' href={siteMetadata.linkedin} size='5' />
              </li>
              <li>
                <Link
                  href={siteMetadata.email}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">mail</span>
                  <BsMailbox size={21} />
                  </Link>

              </li>
              <li>
                <Link
                  href={siteMetadata.kaggle}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">kaggle</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>Kaggle icon</title>
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="space-y-5 ">
            <Subtitle>
              {' '}
              I am a data scientist, machine learning practitioner, and artificial intelligence
              practitioner. For better or worse, I believe ML and AI will become an important part
              of our daily lives and will be available to everyone, and I intend to steer this boat.
              In order to collaborate and deliver production-ready models, I am learning practical
              skills in tools such as Cloud, Docker, Kubernetes, and various ML tools.
            </Subtitle>
            <Subtitle>
              Check out my{' '}
              <Link href="https://ashishlotakeresume.pages.dev/" className="company">
                Résumé
              </Link>{' '}
              to get my info in one page. To se my work check out my{' '}
              <Link href="/projects" className="company">
                Projects
              </Link>
            </Subtitle>
            <Subtitle>
              Feel free to reach out if you wanna collaborate or simply wanna chat. I’m best reached
              via{' '}
              <Link href="mailto:hello@ashihlotake.com" className="company">
                email
              </Link>
              . I am also happy to connect on different social and professional platforms.
            </Subtitle>
          </div>
        </div>
      </div>
      <CardTitle>
        Checkout my{' '}
        <Link href="/journey" className="special-underline">
          Journey
        </Link>{' '}
        and{' '}
        <Link href="/now" className="special-underline">
          what I am doing right now
        </Link>{' '}
        for more.
      </CardTitle>
      <div>
        <div className="mt-6  ">
          <PageSubHeading>Experience</PageSubHeading>
          {experienceData.map((d) => (
            <Experience
              key={d.title}
              title={d.title}
              company={d.company}
              url={d.url}
              text1={d.text1}
              range={d.range}
            />
          ))}
        </div>

        <div className="mt-6  ">
          <PageSubHeading>Education</PageSubHeading>
          {educationData.map((d) => (
            <Experience
              key={d.title}
              title={d.title}
              company={d.company}
              url={d.url}
              text1={d.text1}
              range={d.range}
            />
          ))}
        </div>

        <div className="mt-6  ">
          <PageSubHeading>Certificate</PageSubHeading>
          {certificateData.map((d) => (
            <Certificate
              key={d.title}
              title={d.title}
              credential_url={d.url}
              provider={d.provider}
            />
          ))}
        </div>

        <div className="mt-6  ">
          <PageSubHeading>Community Contribution</PageSubHeading>
          {communityData.map((d) => (
            <Experience
              key={d.title}
              title={d.title}
              company={d.company}
              url={d.url}
              text1={d.text1}
              range={d.range}
            />
          ))}
        </div>
      </div>
    </>
  )
}
