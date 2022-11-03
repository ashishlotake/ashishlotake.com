import { PageSeo, Link, Tag, PageTitle } from '~/components'
import { siteMetadata } from '~/data'
import { getAllTags } from '~/libs'
import type { TagsCount } from '~/types'
import { kebabCase } from '~/utils'
import clsx from 'clsx'
export function getStaticProps() {
  let tags = getAllTags('blog')
  return { props: { tags } }
}

export default function Tags({ tags }: { tags: TagsCount }) {
  let sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <>
      <PageSeo title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5"> */}
      <div className="pt-0 md:pt-6 pb-4">
        <PageTitle>Tags</PageTitle>
      </div>

      <div className="flex flex-wrap">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((tag) => {
          return (
            <div key={tag} className="relative m-2 inline-flex flex-row  rounded  font-medium  ">
              <div className="flex   ">
                <p
                  className={clsx(
                    'md:text-md text-xs rounded-l border px-1 uppercase',
                    'border   dark:border-gray-800',
                    ' bg-gray-50/20 dark:bg-gray-900/40',
                    ' hover:bg-primary-500  dark:hover:bg-darkprimary-500',
                    'hover:border-primary-500 dark:hover:border-darkprimary-500',
                    'hover:text-white dark:hover:text-black p-1'
                  )}
                >
                  <Tag text={tag} />
                </p>
                <Link
                  href={`/tags/${kebabCase(tag)}`}
                  className="bg-gray-800 dark:bg-gray-200 rounded-r"
                >
                  <small className="md:text-md tenxt-center m-1 textxs  text-white  dark:text-black    ">
                    {` (${tags[tag]})`}
                  </small>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
