import {
  // BackToPosts,
  // BlogHeader,
  BlogSeo,
  BlogTags,
  BlogMeta,
  // Comments,
  ScrollTopButton,
  SocialButtons,
  PageTitle,
} from '~/components'
import { siteMetadata } from '~/data'
import type { PostLayoutProps } from '~/types'
import Image from 'next/image'
export function PostLayout(props: PostLayoutProps) {
  let { frontMatter, authorDetails, page, children, commentConfig } = props
  let { slug, fileName, date, title, tags, readingTime, summary, images } = frontMatter
  let postUrl = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <>
      <BlogSeo url={postUrl} authorDetails={authorDetails} {...frontMatter} />
      <ScrollTopButton />
      <article>
        <div>
          <header className="pt-6 border-b border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <BlogTags tags={tags} />
              <Image
                alt=""
                width={800}
                height={800}
                src={images[0]}
                className="object-cover object-center sm:h-72 h-36 rounded-lg"
              />
              <PageTitle>{title}</PageTitle>
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <BlogMeta date={date} slug={slug} readingTime={readingTime} />
                </div>
              </dl>
            </div>
          </header>

          <div className="">
            <div className="">
              <div className="prose dark:prose-dark bg-white/80 dark:bg-dark/[85%] py-3">
                {children}
              </div>
              <div className="border-t border-b border-gray-200 dark:border-gray-700">
                <SocialButtons
                  postUrl={postUrl}
                  title={title}
                  fileName={fileName}
                  summary={summary}
                />
              </div>
              {/* <Comments frontMatter={frontMatter} config={commentConfig} /> */}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default PostLayout
