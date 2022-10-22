import ProgressBar from 'react-scroll-progress-bar'
import formatDate from '@/lib/utils/formatDate'
import clsx from 'clsx'
import { useState } from 'react'
import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import ViewCounter from '@/components/ViewCounter'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import { BiCopyAlt } from 'react-icons/bi'

import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaLinkedinIn } from 'react-icons/fa'
import next from 'next'

const twitterShare = (slug, title) =>
  `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
    `https://ashishlotake.com/blog/${slug}`
  )}`

const facebookShare = (slug) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `https://ashishlotake.com/blog/${slug}`
  )}`

const redditShare = (slug, title) =>
  `https://www.reddit.com/submit?title=${title}&url=${encodeURIComponent(
    `https://ashishlotake.com/blog/${slug}`
  )}`

const linkedinShare = (slug, title) =>
  `https://www.linkedin.com/shareArticle?title=${title}&url=${encodeURIComponent(
    `https://ashishlotake.com/blog/${slug}`
  )}`

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags, readingTime, author } = frontMatter
  const [copied, setCopied] = useState(false)

  function copy() {
    const el = document.createElement('input')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setCopied(true)
  }

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      {/* <ProgressBar bgcolor="#f97316" /> */}

      <article className="mx-auto min-h-screen max-w-4xl">
        <header className=" relative pb-3">
          <div>
            <h1 className="text-3xl font-extrabold leading-normal tracking-normal sm:text-4xl md:text-5xl">
              {title}
            </h1>
          </div>
          <dl className="space-y-10 ">
            <div className="flex w-full  flex-col items-start justify-between pt-5 font-medium md:flex-row md:items-center">
              <time dateTime={date}>
                {`Written on ${new Date(date).toLocaleDateString(
                  siteMetadata.locale,
                  postDateTemplate
                )} by ${author}`}
              </time>
              <p className=" text min-w-32 md:mt-0">
                {readingTime.text}
                {` • `}
                <ViewCounter className="ml-0" slug={slug} blogPage={true} /> views
              </p>
            </div>
          </dl>
          {/* </div> */}
        </header>
        <div className="">
          <div className="prose max-w-none border-t  border-b border-gray-500 pb-5 pt-2 text-lg dark:prose-dark dark:border-gray-500">
            {children}
          </div>
          <footer>
            <div className="flex items-center justify-center pt-2 ">
              <button
                className="share-button reddit hover:bg-primary-500 dark:hover:bg-darkprimary-500 "
                onClick={copy}
              >
                {!copied ? <BiCopyAlt size={25} /> : <BiCopyAlt size={25} />}
                Copy link
              </button>
              <a
                className="share-button reddit hover:bg-[#FF5700]  "
                title="Share on Facebook"
                href={redditShare(slug, title)}
              >
                <FaRedditSquare size={34} />
                Post
              </a>
              <a
                className="share-button twitter hover:bg-[#1B95E0]"
                title="Share on Twitter"
                href={twitterShare(slug, title)}
              >
                <FaTwitterSquare size={34} />
                Tweet
              </a>
              <a
                className="share-button linkedin hover:bg-[#0077B5] "
                title="Share on Twitter"
                href={linkedinShare(slug, title)}
              >
                <FaLinkedinIn size={34} />
                Post
              </a>
            </div>
          </footer>

          <Comments frontMatter={frontMatter} />
        </div>
        <div className="bordert mt-5 border-gray-500 pt-5">
          <h2 className="py-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
            Other posts
          </h2>
          {(next || prev) && (
            <div className=" grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
              {next && (
                <div>
                  <h2 className="py-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Next Article
                  </h2>
                  <BlogCard prev={next} />
                </div>
              )}
              {prev && (
                <div>
                  <h2 className="py-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </h2>
                  <BlogCard prev={prev} />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="dark:-gray-700 pt-10  font-medium leading-5 xl:col-start-1 xl:row-start-2">
          <div className="flex justify-between py-4 ">
            <div>
              <Link
                href="/blog"
                className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  "
              >
                &larr; Back to the blog
              </Link>
            </div>
            <div>
              <div className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  ">
                <Link href={editUrl(fileName)}>{'Edit this on GitHub'}</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

const BlogCard = ({ prev }) => (
  <Link key={prev.slug} href={`/blog/${prev.slug}`} aria-label={`Read "${prev.title}"`}>
    <a className="group relative block h-full">
      <div className="relative flex  h-full  rounded-md border border-black border-opacity-50 transition duration-300 hover:border-opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow-[8px_8px_0_0_#000] dark:border-white dark:border-opacity-50 dark:hover:border-opacity-100 dark:group-hover:shadow-[8px_8px_0_0_#f2e8de]">
        <div className="flex flex-1 transform flex-col pb-3 transition">
          {prev.images ? (
            <div className="relative">
              <img
                alt=""
                className="pointer-events-none h-52 w-full overflow-hidden rounded-t-[5px] object-cover"
                src={prev.images}
              />
              <div
                className={clsx(
                  'absolute bottom-0 w-full px-4 py-2',
                  'mt-2 flex flex-wrap justify-end gap-y-1 gap-x-2 text-sm text-black dark:text-gray-100'
                )}
              >
                {prev.tags.slice(0, 2).map((tag) => (
                  <p
                    className="rounded bg-black bg-opacity-70 px-1 font-semibold text-white "
                    key={tag}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
          <h3 className="m-0 w-full px-3 pt-2 text-xl font-bold tracking-tight text-black dark:text-white">
            {prev.title}
          </h3>
          <p className="flex-1 px-3 pt-3 leading-[20px] text-gray-500">{prev.summary}</p>
          <div className="flex flex-wrap justify-between space-x-2 px-3 text-sm font-semibold text-primary-400 dark:text-darkprimary-400">
            <span>
              <time dateTime={prev.date}>{formatDate(prev.date)}</time>
            </span>
            <span>
              <ViewCounter className="mx-1" slug={prev.slug} />
              views
            </span>
          </div>
        </div>
      </div>
    </a>
  </Link>
)
