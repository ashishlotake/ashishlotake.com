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
              'p5 flex flex-1 transform flex-col  transition  rounded-lg overflow-hidden border-2 dark:border-gray-800 dark:bg-bg/80 bg-white/50 md:hover:border-black dark:md:hover:border-white ',
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
            <h3 className="px-3 pt-3 mb-2 s m-0 w-full text-lg font-semibold  text-gray-800 dark:text-gray-100 hover:opacity-60">
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

// export function PostListItem01({ frontMatter }: { frontMatter: MdxFrontMatter }) {
//   let { slug, date, title, summary, tags, images, postimg } = frontMatter
//   return (
//     <div className="p-3 overflow-hidden flex flex-col space-y-4 md:space-x-2 rounded-lg border-2 dark:border-gray-800 dark:bg-bg bg-white  md:flex-row md:space-y-0  shadow-md md:hover:border-black md:dark:hover:border-white">
//       {/* // <div className="overflow-hidden flex flex-col space-y-4 md:space-x-2 rounded-lg   md:flex-row md:space-y-0  md:hover:bg-white md:dark:hover:bg-bg p-3"> */}
//       <div className="overflow-hidden  md:w-52 ">
//         <div className="relative  w-full  h-36 md:w-52 ">
//           <Link href={`/blog/${slug}`}>
//             <Image
//               alt={title}
//               src={images[0]}
//               className="object-cover object-center h-36 mdhover:grayscale-[75%] rounded-md"
//               width={1088}
//               height={612}
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="flex flex-1 flex-col justify-between">
//         <div className="px-3  flex flex-col ">
//           <div className="flex flex-wrap pb-1 line-clamp-1">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-[13px] mr-2 text-gray-500 dark:text-gray-400 hover:!text-primary-600 hover:underline "
//               >
//                 #<Tag key={tag} text={tag} />
//               </span>
//             ))}
//           </div>
//           <Link href={`/blog/${slug}`} className="transition duration-200 hover:opacity-60">
//             <h2 className="text-lg leading-none font-semibold text-gray-800 dark:text-gray-100  hover:underline">
//               {title}
//             </h2>
//           </Link>
//           <p className="mb-3 flex-1 text-sm text-gray-600  dark:text-gray-300 line-clamp-2">
//             {summary}
//           </p>
//           <div className="mb-2 flex flex-wrap  justify-between space-x-2  pr-0 md:pr-3 text-sm font-medium text-gray-500">
//             <span>
//               <time dateTime={date}>{formatDate(date)}</time>
//             </span>
//             <span className="text-sm">
//               <Link
//                 href={`/blog/${slug}`}
//                 className="link-underline1 font-semibold text-primary-500   "
//               >
//                 Read More &rarr;
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export function PostListItem01({ frontMatter }: { frontMatter: MdxFrontMatter }) {
  let { slug, date, title, summary, tags, images, postimg } = frontMatter
  return (
    <div className="p-2 overflow-hidden flex flex-col space-y-4 md:space-x-2 rounded-lg border-2 dark:border-gray-800 dark:bg-bg bg-white  md:flex-row md:space-y-0  shadow-md md:hover:border-black md:dark:hover:border-white">
      {/* <div className="overflow-hidden flex flex-col space-y-4 md:space-x-2 rounded-lg   md:flex-row md:space-y-0 bg-white md:hover:bg-sky-300/10 dark:bg-bg md:dark:hover:bg-bg"> */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="px-3  flex flex-col ">
          <div className="flex flex-wrap pb-1 line-clamp-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[13px] mr-2 text-gray-500 dark:text-gray-400 hover:!text-primary-600 hover:underline "
              >
                #<Tag key={tag} text={tag} />
              </span>
            ))}
          </div>
          <Link href={`/blog/${slug}`} className="transition duration-200 hover:opacity-60">
            <h2 className="text-lg leading-none font-semibold text-gray-800 dark:text-gray-100  hover:underline">
              {title}
            </h2>
          </Link>
          <p className="mb-3 flex-1 text-sm text-gray-600  dark:text-gray-300 line-clamp-2">
            {summary}
          </p>
          <div className="mb-2 flex flex-wrap  justify-between space-x-2  pr-0 md:pr-3 text-sm font-medium text-gray-500">
            <span>
              <time dateTime={date}>{formatDate(date)}</time>
            </span>
            <span className="text-sm">
              <Link
                href={`/blog/${slug}`}
                className="link-underline1 font-semibold text-primary-500   "
              >
                Read More &rarr;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PostListItem001({ frontMatter }: { frontMatter: MdxFrontMatter }) {
  let { slug, date, title, summary, tags, images, postimg } = frontMatter
  return (
    <div className="grid md:grid-cols-4  space-y-3">
      <div className="pt-2 pb-1 md:p-5 text-gray-500 hidden md:block">
        <time className="text-xs md:text-sm" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>

      {/* <div className="col-span-3 rounded-lg p-3"> */}
      <div className="col-span-3 p-3 rounded-lg border-2 dark:border-gray-800 dark:bg-bg bg-white  md:flex-row md:space-y-0  shadow-md md:hover:border-black md:dark:hover:border-white transition-border-color">
        <div className="hidden md:flex flex-wrap ">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] mr-2 text-gray-500 dark:text-gray-400 hover:!text-primary-600 hover:underline "
            >
              #<Tag key={tag} text={tag} />
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`} className="">
          <div className=" text-gray-500 md:hidden block">
            <time className="text-xs md:text-sm" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
          <h2 className="text-lg leading-none font-semibold text-gray-800 dark:text-gray-100  hover:underline">
            {title}
          </h2>

          <p className=" md:mb-3 flex-1 text-sm text-gray-600  dark:text-gray-300 line-clamp-2">
            {summary}
          </p>
        </Link>

        <div className="mt-2 flex flex-wrap  justify-between space-x-2  pr-0 md:pr-3 text-sm font-medium text-gray-500">
          <span className="text-sm">
            <Link
              href={`/blog/${slug}`}
              className="link-underline1 font-semibold text-primary-500   "
            >
              Read More &rarr;
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export function FeedStyle({ frontMatter }: { frontMatter: MdxFrontMatter }) {
  let { slug, date, title, summary, tags, images, postimg } = frontMatter
  return (
    <ol className="relative md:border-l border-gray-400 dark:border-gray-700 ">
      <li
        key={title}
        className="group transition-border-color md:hover:border-black md:dark:hover:border-white  mb-4 ml-0 md:ml-4 rounded-lg border-2 shadow-lg bggray-50/10 dark:border-gray-800 dark:bg-bg bg-white"
      >
        <Link href={`/blog/${slug}`} className="">
          <span
            className={`hidden md:block text-sm absolute -left-5 w-[5px] items-center justify-center  rounded-full py-2 `}
          >
            <div
              className="rotate-180 text-gray-500 group-hover:text-black dark:group-hover:text-white "
              style={{ writingMode: 'vertical-rl' }}
            >
              <time dateTime={date}>{formatDate01(date)}</time>
            </div>
          </span>
          <span
            className={`absolute -left-[4px] top-[0px] h-[7px] w-[7px] items-center justify-center rounded-full text-black   ring-1 ring-gray-500 bg-white dark:bg-bg md:group-hover:bg-black  md:dark:group-hover:bg-white hidden md:block`}
          ></span>
        </Link>
        <div className="p-3">
          <div className="hiddenmd:flex flex-wrap line-clamp-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[13px] mr-2 text-gray-500 dark:text-gray-400 hover:!text-primary-600 hover:underline "
              >
                #<Tag key={tag} text={tag} />
              </span>
            ))}
          </div>
          <Link href={`/blog/${slug}`} className="">
            <h2 className="flex leading-none w-full text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100 ">
              {title}
            </h2>
            <time className="md:hidden text-sm font-normal leading-none !text-gray-500 ">
              {date}
            </time>
            <p className="text-sm text-gray-700 max-w-none dark:text-gray-300 my-1 line-clamp-2">
              {summary}
            </p>
          </Link>
          <div className="mt-2 flex flex-wrap  justify-between space-x-2  pr-0 md:pr-3 text-sm font-medium text-gray-500">
            <span className="text-sm">
              <Link
                href={`/blog/${slug}`}
                className="link-underline1 font-semibold text-primary-500   "
              >
                Read More &rarr;
              </Link>
            </span>
          </div>
        </div>
      </li>
    </ol>
  )
}

export function formatDate01(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
  })
}
