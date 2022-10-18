import ThemeSwitch from './ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import { currentDayName } from '@/lib/utils/dateUtils'
import CustomLink from './Link'
import NowPlayingFooter from './NowPlayingFooter'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 ">
      <NowPlayingFooter />
      <div className="flex flex-col-reverse justify-between gap-3  border-t border-gray-500 py-5 pb-2 text-sm dark:border-gray-500 md:flex-row ">
        <div>
          © {new Date().getFullYear()} | {siteMetadata.author} | Have a great{' '}
          <span className="font-extrabold text-primary-500 dark:text-darkprimary-500 ">
            {currentDayName()}!
          </span>
        </div>
        <div>
          <a
            className="hover:text-primary-500 dark:hover:text-darkprimary-500"
            target="_blank"
            href="/feed.xml"
            rel="noreferrer"
          >
            RSS
          </a>{' '}
          •{' '}
          <a
            className="hover:text-primary-500 dark:hover:text-darkprimary-500"
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
          >
            Github
          </a>{' '}
          •{' '}
          <a
            className="hover:text-primary-500 dark:hover:text-darkprimary-500"
            target="_blank"
            href={siteMetadata.twitter}
            rel="noreferrer"
          >
            Twitter
          </a>{' '}
          •{' '}
          <a
            className="hover:text-primary-500 dark:hover:text-darkprimary-500"
            target="_blank"
            href={siteMetadata.linkedin}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}
