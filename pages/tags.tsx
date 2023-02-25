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
      <div className="pt-3 md:pt-6 pb-4">
        <PageTitle>Tags</PageTitle>
      </div>
      <div className="flex flex-wrap">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((tag) => {
          return (
            <div key={tag} className="relative m-1 inline-flex flex-row  rounded  font-medium  ">
              <div className="flex   group ">
                <p
                  className={clsx(
                    'text-[13px] md:text-[13px]  rounded-l border px-1 uppercase',
                    'border   dark:border-gray-800',
                    ' shadow-lg dark:bg-gray-900/40',
                    ' group-hover:!bg-primary-500  ',
                    'group-hover:!border-primary-500 ',
                    'transition-color duration-100 ease-in-out',
                    'group-hover:text-white dark:group-hover:text-black p-1',
                    'text-gray-800 dark:text-gray-300'
                  )}
                >
                  <Tag text={tag} />
                </p>
                <Link
                  href={`/tags/${kebabCase(tag)}`}
                  className="bg-bg/70 dark:bg-gray-300 rounded-r"
                >
                  <p className=" mt-0.5 p-1 text-[10px] md:text-[13px] text-white  dark:text-black    ">
                    {` (${tags[tag]})`}
                  </p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
