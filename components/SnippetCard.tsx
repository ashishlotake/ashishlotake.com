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
          'flex h-full cursor-pointer lg:mb-0',
          'dark:border-gray-800 rounded-lg border-2',
          ' dark:bg-bg bggray-50/10',
          'md:hover:border-black md:dark:hover:border-white',
          'md:hover:scale[102%] transition',
          'shadow-lg'
        )}
      >
        <div className="p-3 ">
          <DevIcon className="h-15 w-16" type={type} />
        </div>
        <div className="p-2 overflow-hidden">
          <h3 className="  text-lg font-semibold  text-gray-800 dark:text-gray-100">{heading}</h3>
          <p className=" flex-1 pt-1 text-gray-600  dark:text-gray-300 text-sm line-clamp-2">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  )
}
