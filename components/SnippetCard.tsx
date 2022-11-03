import clsx from 'clsx'
import type { SnippetFrontMatter } from '~/types'
import { DevIcon } from './DevIcon'
import { Link } from './Link'

export function SnippetCard({ snippet }: { snippet: SnippetFrontMatter }) {
  let { type, heading, summary, title, slug } = snippet

  return (
    <Link href={`/snippets/${slug}`} title={title}>
      <div
        className={clsx(
          'flex h-full cursor-pointer mb-4 lg:mb-0',
          'dark:border-gray-800 rounded-lg border-2',
          ' dark:bg-gray-900/40 bg-gray-50/10',
          'hover:border-black dark:hover:border-white',
          'md:hover:scale-[102%] transition'
        )}
      >
        <div className="p-3 lg:p-4">
          <DevIcon className="h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24" type={type} />
        </div>
        <div className="p-3 lg:p-4 md:p-4 overflow-hidden">
          <h3 className="text-xl font-bold leading-8 tracking-tight whitespace-nowrap overflow-hidden overflow-ellipsis">
            {heading}
          </h3>
          <p className="text-md lg:text-base mt-2 text-gray-800 dark:text-gray-200">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
