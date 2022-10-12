import CustomLink from './CustomLink'
import Image from 'next/image'
import Link from 'next/link'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import { BsFolder2 } from 'react-icons/bs'
import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <article className="flex h-full flex-col rounded-lg shadow-xl dark:bg-[#0e141b]  dark:shadow-black">
    <Link href={github}>
      <a target="_blank" rel="noopener noreferrer">
        <Image
          src={imgSrc}
          alt="avatar"
          width="450px"
          height="200px"
          className="object-cover"
          // objectPosition="10% 10%"
        />
      </a>
    </Link>
    <div className="flex flex-1 flex-col px-6 py-3">
      {/* <h3 className=" py-2 text-2xl font-semibold leading-snug">{title}</h3> */}
      <CardTitle>{title}</CardTitle>
      <p className="flex-1 text-gray-500">{description}</p>
      <div className="flex flex-wrap justify-between space-x-2 pt-3 text-xs dark:text-gray-400">
        {github ? (
          <button
            type="submit"
            className="w-auto rounded-full bg-slate-200 p-2 text-sm text-white transition-transform hover:scale-[1.2] dark:bg-slate-800"
          >
            <SocialIcon kind="github" href={github} size="8" />
          </button>
        ) : null}

        {href ? (
          <button
            type="submit"
            className="ml-6 w-auto rounded-full bg-slate-200 p-2 text-lg text-white transition-transform hover:scale-[1.2] dark:bg-slate-800"
          >
            {href ? <SocialIcon kind="external" href={href} size="8" /> : null}
          </button>
        ) : null}
      </div>
    </div>
  </article>
)

export default Card
