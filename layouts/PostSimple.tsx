import {
  BlogMeta,
  BlogSeo,
  BlogTags,
  Comments,
  PageTitle,
  ScrollTopButton,
  SocialButtons,
} from '~/components'
import { siteMetadata } from '~/data'
import type { PostSimpleLayoutProps } from '~/types'

export function PostSimple(props: PostSimpleLayoutProps) {
  let { frontMatter, type, children, authorDetails, commentConfig } = props
  let { date, title, slug, fileName, tags, readingTime, summary, images } = frontMatter
  let postUrl = `${siteMetadata.siteUrl}/${type}/${slug}`

  return (
    <>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/${type}/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopButton />
      <article>
        <div>
          <header className="pt-6 border-b border-gray-200 dark:border-gray-700 ">
            <div className="space-y-4">
              {/* <BlogTags tags={tags} /> */}
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
              <div className="prose dark:prose-dark text-gray-700 dark:text-gray-500 bg-white/[85%] dark:bg-dark/[85%] py-3">
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

export default PostSimple
