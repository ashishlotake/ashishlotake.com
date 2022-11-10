import { TwitterShareButton } from 'react-share'
import TwitterIcon from '~/icons/twitter.svg'
import LinkedInIcon from '~/icons/linkedin.svg'
import { siteMetadata } from '~/data'
import { Link } from './Link'
import type { SocialButtonsProps } from '~/types'

const linkedinShare = (slug, title) =>
  `https://www.linkedin.com/shareArticle?title=${title}&url=${slug}`

export function SocialButtons({ postUrl, title, fileName, summary }: SocialButtonsProps) {
  let creatEditOnGithubUrl = (fileName: string) =>
    `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`
  let createDiscussonTwitterUrl = (postUrl: string) =>
    `https://twitter.com/search?q=${encodeURIComponent(postUrl)}`

  return (
    <div className="md:flex justify-between items-center pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
      <div className="mb-6 md:mb-0">
        <Link href={createDiscussonTwitterUrl(postUrl)} rel="nofollow" className="hover:underline">
          {'Discuss on Twitter'}
        </Link>
        {` • `}
        <Link href={creatEditOnGithubUrl(fileName)} className="hover:underline">
          {'View on GitHub'}
        </Link>
      </div>
      <div className="flex items-center">
        <TwitterShareButton url={postUrl} title={title} via={siteMetadata.socialAccounts.twitter}>
          <span className="mr-2 inline-flex items-center rounded border-2 border-[#55acee] bg-[#55acee] px-1 py-1  text-sm font-bold text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75">
            Tweet
            <svg
              className="ml-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </span>
        </TwitterShareButton>
        <Link
          href={linkedinShare(postUrl, title)}
          className="inline-flex font-bold items-center rounded border-2 border-[#0077b5] bg-[#0077b5] px-1 py-1  text-sm  text-white transition-colors hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
          target="_blank"
          rel="noreferrer"
        >
          Post
          <svg
            className="ml-1 mb-0.5 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
