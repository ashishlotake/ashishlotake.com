import formatDate from '@/lib/utils/formatDate'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata, { image } from '@/data/siteMetadata'
import Comments from '@/components/comments'
import { FaTwitterSquare, FaRedditSquare, FaLinkedinIn } from 'react-icons/fa'
import { PageTitle } from '@/components/PageTitle'
import Image from 'next/image'

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

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, logo, title, summary, readingTime } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/snippets/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className="mx-auto max-w-3xl">
          <p className="pb-1 text-gray-500">
            Last update:-<time dateTime={date}>{formatDate(date)}</time>
          </p>
          <div className="mb-4">
            <PageTitle>{title}</PageTitle>
            <div className="mt-2 flex flex-wrap gap-4">
              {logo.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  width={32}
                  height={32}
                  alt=""
                  className="object-contain"
                />
              ))}
            </div>
          </div>
          <div className="border-b border-gray-200 pb-4 dark:border-gray-700 ">
            <p className="text-text text-lg">{summary}</p>
          </div>

          <div className=" pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="  xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <div className="flex justify-end py-5 text-sm">
              <Link
                className="share-button reddit hover:bg-[#FF5700]  "
                title="Share on Facebook"
                href={redditShare(slug, title)}
              >
                <FaRedditSquare size={34} />
                Post
              </Link>
              <Link
                className="share-button twitter hover:bg-[#1B95E0]"
                title="Share on Twitter"
                href={twitterShare(slug, title)}
              >
                <FaTwitterSquare size={34} />
                Tweet
              </Link>
              <Link
                className="share-button linkedin hover:bg-[#0077B5] "
                title="Share on Twitter"
                href={linkedinShare(slug, title)}
              >
                <FaLinkedinIn size={34} />
                Post
              </Link>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${prev.slug}`}
                      className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  "
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${next.slug}`}
                      className="link-underline text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400  "
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
