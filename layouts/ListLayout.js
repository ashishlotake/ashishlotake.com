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
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-xl ">
          <PageTitle>{title}</PageTitle>
          <Subtitle></Subtitle>
        </div>
      </div>
      <div className="mx-auto max-w-6xl pb-10">
        <div className="space-y-2 pt-6  md:space-y-5">
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
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
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              // <CustomLink
              //   href={`/blog/${slug}`}
              //   key={slug}
              //   className="group flex bg-transparent bg-opacity-20  transition duration-100 hover:scale-[1] hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              // >
              //   {/* <a> */}
              //     <li className="">
              //       <article>
              //         <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              //           <dl>
              //             <dt className="sr-only">Published on</dt>
              //             <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
              //               <time dateTime={date}>{formatDate(date)}</time>
              //               {' • '}
              //               <ViewCounter className="mx-1" slug={slug} />
              //               views
              //             </dd>
              //           </dl>
              //           <div className="space-y-5 xl:col-span-4">
              //             <div className="space-y-1">
              //               <div>
              //                 <CardTitle>{title}</CardTitle>
              //               </div>
              //               <div className="flex flex-wrap gap-1 mt-2 text-sm">
              //                 {tags?.map((tag) => (
              //                 <small key={tag} className="text-[14px] border rounded  px-1 border-gray-400 dark:border-gray-600">
                                
              //                   {tag}
              //                   </small>
              //                 ))}
              //               </div>
              //               <div className="pt-1">
              //                 <Subtitle>{summary}</Subtitle>
              //               </div>
              //             </div>
              //           </div>
              //         </div>
              //       </article>
              //DisplayPosts     </li>
              //   {/* </a> */}
              // </CustomLink>

              <li key={slug} className="py-3">
                <CustomLink  href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                  <article className="hover:bg-opacity-30 gap-3 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline bg-transparent bg-opacity-20 px-3 transition duration-100 hover:scale-[1] hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="space-y-3 xl:col-span-4">
                       <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                            {' • '}
                            <ViewCounter className="mx-1" slug={slug} />
                            views
                          </dd>
                        </dl>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                              <CardTitle>{title}</CardTitle>

                      </h3>
                            <div className="flex flex-wrap gap-1 mt-2 text-sm">
                              {tags?.map((tag) => (
                              <small key={tag} className="text-[14px] border rounded  px-1 border-gray-400 dark:border-gray-600 hover:bg-primary-500">
                          {/* #<Tag key={tag} text={tag} /> */}
                                {tag}
                                </small>
                              ))}
                            </div>
                        <Subtitle>{summary}</Subtitle>
                    </div>
                  </article>
                </CustomLink>
              </li>


            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

