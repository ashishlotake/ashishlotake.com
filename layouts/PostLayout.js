import Link from '@/components/Link'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import ViewCounter from '@/components/ViewCounter'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'

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
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article className="mx-auto min-h-screen max-w-3xl">
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
          <div className="prose max-w-none border-t border-b border-b border-gray-200  pb-5 pt-2 dark:prose-dark  dark:border-gray-700">
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
                      <div className="link-underline text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="link-underline text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className=" border-gray-200 pb-2 dark:border-gray-700 ">
              <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
                <div className="py-3 md:py-0">
                  <Link
                    href="/blog"
                    className="link-underline text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    &larr; Back to the blog
                  </Link>
                </div>
                <div className="mb-1 flex justify-end text-sm">
                  <Link
                    className=" share-button reddit hover:bg-[#FF5700]  "
                    title="Share on Facebook"
                    href={redditShare(slug, title)}
                  >
                    <FaRedditSquare size={34} />
                    <span className="text-white"> Post</span>
                  </Link>
                  <Link
                    className="share-button twitter hover:bg-[#1B95E0]"
                    title="Share on Twitter"
                    href={twitterShare(slug, title)}
                  >
                    <FaTwitterSquare size={34} />

                    <span className="text-white"> Tweet</span>
                  </Link>
                  <Link
                    className="share-button linkedin hover:bg-[#0077B5] "
                    title="Share on Twitter"
                    href={linkedinShare(slug, title)}
                  >
                    <FaLinkedinIn size={34} />
                    <span className="text-white"> Post</span>
                  </Link>
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
