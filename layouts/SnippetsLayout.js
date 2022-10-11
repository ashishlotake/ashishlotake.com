import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function SnippetsLayout({ posts, title, initialDisplayPosts = [], pagination }) {
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
      <div className="border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-xl ">
          <PageTitle>All Snippets</PageTitle>
          <Subtitle></Subtitle>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="space-y-2 pt-6 md:space-y-5">
          <div className="relative max-w-lg">
            <input
              aria-label="Search snippets"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search snippets"
              className="block w-full rounded-md border-2 border-slate-400 bg-white bg-transparent px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-500 dark:text-gray-100 dark:focus:border-primary-500"
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
        <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2 lg:grid-cols-2">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link key={slug} href={`/snippets/${slug}`}>
                <div className="flex h-full w-full rounded-md  border-2 border-slate-200 transition-transform duration-300   hover:border-primary-500 dark:border-slate-700 dark:hover:border-primary-500">
                  <div className="flex flex-shrink-0 items-center  border-r border-gray-600 px-3 dark:border-gray-400 ">
                    <img
                      alt="moto"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                      className="h-11 w-11"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <CardTitle>{title}</CardTitle>
                    <Subtitle>{summary}</Subtitle>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
