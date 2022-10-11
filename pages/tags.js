import { PageTitle, Subtitle } from '@/components/PageTitle'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      {/* <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"> */}
      <div className="border-b border-slate-200 dark:border-slate-700">
        <PageTitle>Tags</PageTitle>
        <Subtitle></Subtitle>
      </div>
      <div className="mt-5 flex flex-wrap">
        {Object.keys(tags).length === 0 && 'No tags found.'}
        {sortedTags.map((t) => {
          return (
            <div
              key={t}
              className="relative m-2 inline-flex flex-row items-center rounded border  border-gray-700 font-medium uppercase lowercase "
            >
              <div className="flex justify-between">
                <p className=" lg:text-md rounded-l px-1 text-base font-medium uppercase hover:bg-primary-500 ">
                  <Tag text={t} />
                </p>
                <small className="lg:text-md rounded-r bg-gray-500  bg-opacity-50 px-1  text-base    ">
                  {` (${tags[t]})`}
                </small>
              </div>
            </div>
          )
        })}
      </div>
      {/* </div> */}
    </>
  )
}
