import TechIcons from '@/components/TechIcons'
import Image from 'next/image'
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
      <div className="border-b border-gray-400 dark:border-gray-600">
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
              className="block w-full rounded-md border border-gray-400 bg-white bg-transparent px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:text-gray-100 dark:focus:border-darkprimary-500 dark:focus:ring-darkprimary-500"
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
        <div className="grid grid-cols-1 gap-3 pt-5 md:grid-cols-2 lg:grid-cols-2">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, logo, icons } = frontMatter
            return (
              <Link key={slug} href={`/snippets/${slug}`}>
                <div className=" flex h-full w-full rounded-md  border  border-gray-400 duration-100  hover:scale-[1.03] hover:border-primary-500 dark:border-gray-600 dark:hover:border-darkprimary-500">
                  <div className="flex-1 p-2">
                    <p className="pb-2 text-xs text-gray-500">
                      Last update:-<time dateTime={date}>{formatDate(date)}</time>
                    </p>

                    <h4 className=" w-full text-xl font-bold leading-none tracking-tight text-black dark:text-white ">
                      {title}
                    </h4>
                    <div className="my-2 flex flex-wrap gap-4 text-black dark:text-white">
                      {icons.map((logo) => (
                        <div key={logo} className="group">
                          <TechIcons className="" techs={[logo]} techsize={20} />
                        </div>
                      ))}
                    </div>
                    <p className="tracking-tight text-gray-500">{summary}</p>
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
