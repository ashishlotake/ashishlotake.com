import Tags from 'pages/tags'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import CustomLink from '@/components/CustomLink'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import ViewCounter from '@/components/ViewCounter'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="border-b border-gray-400 dark:border-gray-600">
        <div className="max-w-xl ">
          <PageTitle>{title}</PageTitle>
          <Subtitle></Subtitle>
        </div>
      </div>
      <div className="mx-auto max-w-6xl pb-10">
        <div className="space-y-2 pt-6  pb-6 md:space-y-5">
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border-2 border-gray-400 bg-white bg-transparent px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:text-gray-100 dark:focus:border-darkprimary-500 dark:focus:ring-darkprimary-500"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <section className=" ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {!posts.length && 'No posts found.'}
            {posts.map((frontMatter) => {
              const { slug, date, title, summary, tags, images } = frontMatter
              return (
                <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                  <a className="group relative block h-full">
                    <div className="relative flex  h-full  rounded-3xl border-2 border-black border-opacity-50 transition hover:border-opacity-100 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000] dark:border-white dark:border-opacity-50 dark:hover:border-opacity-100 dark:group-hover:shadow-[8px_8px_0_0_#f2e8de] ">
                      <div className="flex flex-1 flex-col pb-3">
                        {images ? (
                          <img
                            alt=""
                            className="h-44 w-full rounded-t-3xl object-cover "
                            src={images}
                          />
                        ) : null}
                        <div className="flex flex-wrap px-3 pt-1 ">
                          {tags.slice(0, 4).map((tag) => (
                            <p
                              key={tag}
                              className="pr-2 text-xs tracking-wider  text-primary-400 dark:text-darkprimary-400"
                            >
                              #{tag}
                            </p>
                          ))}
                        </div>
                        <h3 className="px-3 pt-2 text-2xl font-semibold leading-snug text-black dark:text-white">
                          {title}
                        </h3>

                        <p className="flex-1 px-3 text-gray-500">{summary}</p>
                        <div className="flex flex-wrap justify-between space-x-2 px-3 pt-3 text-xs dark:text-gray-400">
                          <span>
                            <time dateTime={date}>{formatDate(date)}</time>
                          </span>
                          <span>
                            <ViewCounter className="mx-1" slug={slug} />
                            views
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
