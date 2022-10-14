import CustomLink from './CustomLink'
import Image from 'next/image'
import Link from 'next/link'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import { BsFolder2 } from 'react-icons/bs'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <>
    <article className="rounded-xl ">
      <div className="flex items-center">
        {imgSrc ? (
          <div className="hidden sm:mr-8 sm:grid sm:h-40 sm:w-40 sm:shrink-0 sm:place-content-center sm:rounded-full ">
            <img alt="" className="object-cover" src={imgSrc} />
          </div>
        ) : null}
        <div className="">
          <h1 className="relative my-2 w-full flex-none text-2xl font-semibold ">{title}</h1>

          {/* <div className="relative text-md leading-none text-lg ">
        {description}     
      </div> */}
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
                  className="textwhite group relative inline-block font-semibold uppercase focus:outline-none focus:ring"
                >
                  <span className="absolute inset-0 border-2 border-black  group-active:border-primary-500 dark:border-slate-200"></span>
                  <span className="textblack block border-2 border-black bg-primary-500 px-2 py-2 text-sm font-semibold tracking-wider transition-transform active:border-primary-500 active:bg-primary-400 group-hover:-translate-x-1 group-hover:-translate-y-1 dark:border-slate-200">
                    Web app
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
