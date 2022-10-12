import Link from '@/components/CustomLink'
import fs from 'fs'
import { PageTitle } from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('blog', params.slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className=" textcenter">
          <img src="/static/images/underconstruction.svg" />
          <div className="flex flex-col items-start justify-start md:mt-2 md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
                503
              </h1>
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="md:border-l-2 md:px-6">
                <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                  Taken down for review
                </p>
                <p className="mb-4">
                  It seems you've found something that used to exist or something taken down for
                  review<br></br>
                  Can you double check that URL? Or Revisit after some time!
                </p>
                <p>But dont worry, you can find plenty of other things on our homepage.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid place-items-center">
            <Link href="/">
              <button aria-label="Scroll To Top" type="button" className="pushable">
                <span className="shadow"></span>
                <span className="edgeblue"></span>
                <span className="frontblue">Return to Homepage</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
