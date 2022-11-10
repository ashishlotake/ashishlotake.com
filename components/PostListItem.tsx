import { Link, Tag } from '~/components'
import type { MdxFrontMatter } from '~/types'
import { formatDate } from '~/utils'
import clsx from 'clsx'
import Image from 'next/image'

export function PostListItem({ frontMatter }: { frontMatter: MdxFrontMatter }) {
  let { slug, date, title, summary, tags, images, postimg } = frontMatter
  return (
    <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
      <div className="group relative block h-full mdhover:scale-[102%] transition-all bgrose-500">
        <div className="relative  flex h-full ">
          <div
            className={clsx(
              'p5 flex flex-1 transform flex-col  transition  rounded-lg overflow-hidden border-2 dark:border-gray-800 bggray-50/10 dark:bg-bg  md:hover:border-black dark:md:hover:border-white ',
              'shadow-lg'
            )}
          >
            {images ? (
              <div className="relative ">
                <Image
                  alt=""
                  width={400}
                  height={200}
                  src={images[0]}
                  className="object-cover rounded-t-md object-center h-36"
                />
                <div
                  className={clsx(
                    'absolute bottom-0 w-full px-4 py-2',
                    'mt-2 flex flex-wrap justify-end gap-y-1 gap-x-2 text-black dark:text-gray-100'
                  )}
                >
                  {tags.slice(0, 2).map((tag) => (
                    <p
                      className="rounded uppercase bg-black bg-opacity-70 px-1 text-xs font-medium text-white "
                      key={tag}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
            <h3 className="px-3 pt-3 mb-2 s m-0 w-full text-lg font-semibold  text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <p className="px-3 mb-2 flex-1 prose text-gray-600  dark:text-gray-300 line-clamp-3">
              {summary}
            </p>
            <div className="p-3 flex flex-wrap  justify-between space-x-2  pt-3 text-sm font-medium text-gray-500">
              <span>
                <time dateTime={date}>{formatDate(date)}</time>
              </span>
              <span>{/* <ViewCounter className="mx-1" slug={slug} /> */}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
