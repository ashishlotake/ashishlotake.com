import { useState } from 'react'
import {
  PageTitle,
  Pagination,
  PostListItem,
  PostsSearch,
  Subtitle,
  PostListItem01,
} from '~/components'
import type { ListLayoutProps } from '~/types'

export function ListLayout(props: ListLayoutProps) {
  let { posts, title, initialDisplayPosts = [], pagination } = props
  let [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = posts.filter((frontMatter) => {
    let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  let displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="dividey divide-gray-200 dark:divide-gray-700">
        <div className="pt-3 md:pt-6 pb-4">
          <PageTitle>{title}</PageTitle>
          <Subtitle>Thoughts, mental models, and tutorials related to ML DS and AI</Subtitle>
        </div>
        <PostsSearch onChange={setSearchValue} />

        <div className="pt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => (
            <PostListItem01 key={frontMatter.slug} frontMatter={frontMatter} />
          ))}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default ListLayout
