import { BlogTags, Link } from '~/components'
import { FEATURED_POSTS } from '~/constant'
import type { BlogFrontMatter } from '~/types'
import { formatDate } from '~/utils'
import { PostListItem } from '~/components'

export function FeaturedPosts({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold">Latest Posts</h2>

      <div className=" grid gap-6 sm:grid-cols-3 xl:grid-cols-3">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, 3).map((frontMatter) => {
          let { slug, date, title, summary, tags } = frontMatter
          return (
            <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
              <div className="group relative block h-full md:hover:scale[102%] transition-all shadow-lg rounded-lg">
                <div className="relative  flex h-full ">
                  <div className="p-4 flex flex-1 transform flex-col  transition rounded-lg overflow-hidden border-2   dark:border-gray-800  dark:bg-gray-900/40  hover:border-black dark:hover:border-white  ">
                    <h3 className=" w-full text-xl font-bold tracking-tight text-black dark:text-white">
                      {title}
                    </h3>
                    <p className="flex-1  prose text-gray-500 max-w-none dark:text-gray-400">
                      {/* {summary} */}
                    </p>

                    <div className=" flex flex-wrap  justify-between space-x-2  pt-3 text-sm font-semibold ">
                      <span>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </span>
                      <span>{/* <ViewCounter className="mx-1" slug={slug} /> */}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
        {posts.length > FEATURED_POSTS && (
          <div className="flex  font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 link-underline1 font-semibold hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
