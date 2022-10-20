import { useState } from 'react'
import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import ViewCounter from '@/components/ViewCounter'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import { BiCopyAlt } from 'react-icons/bi'

import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaLinkedinIn } from 'react-icons/fa'

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
            <div className="dark:-gray-700 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
              {(next || prev) && (
                <div className="flex justify-between py-4 ">
                  {prev && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Previous Article
                      </h2>
                      <div className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  ">
                        <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  ">
                        <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className=" border-gray-500 pb-2 dark:border-gray-500 ">
              <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
                <div className="py-3 md:py-0">
                  <Link
                    href="/blog"
                    className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  "
                  >
                    &larr; Back to the blog
                  </Link>
                </div>
                <span className="py-2 md:hidden">share</span>
                <div className="sm:boder group relative inline-block flex rounded-lg border-gray-500  px-10 py-1 dark:border-gray-500 md:border-2 md:px-14">
                  <span className="text-lg font-medium opacity-0 transition-opacity group-hover:opacity-0 md:opacity-100">
                    Share it
                  </span>

                  <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0 ">
                    <li className="hover:text-primary-600 dark:hover:text-darkprimary-500">
                      <span className="sr-only"> copy </span>
                      <button
                        className="block  hover:opacity-90 focus:opacity-75 focus:outline-none"
                        onClick={copy}
                      >
                        {!copied ? <BiCopyAlt size={25} /> : <BiCopyAlt size={25} />}
                      </button>
                    </li>

                    <li className=" hover:text-[#1B95E0]">
                      <a
                        className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href={twitterShare(slug, title)}
                      >
                        <span className="sr-only"> twitter </span>
                        <FaTwitterSquare size={25} />
                      </a>
                    </li>
                    <li className="hover:text-[#FF5700]">
                      <a
                        className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href={redditShare(slug, title)}
                      >
                        <span className="sr-only"> Reddit </span>
                        <FaRedditSquare size={25} />
                      </a>
                    </li>

                    <li className="hover:text-[#0077B5]">
                      <a
                        className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                        href={linkedinShare(slug, title)}
                      >
                        <span className="sr-only"> linkedin </span>
                        <FaLinkedinIn size={25} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <Comments frontMatter={frontMatter} />
        </div>
      </article>
    </>
  )
}
