import { ProfileCard } from '@/components/ProfileCard'
import { PageTitle, Subtitle, CardTitle, PageSubHeading } from '@/components/PageTitle'
import CustomLink from '@/components/Link'
import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
let headingColorClass =
  'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-primary-600'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="border-b border-gray-200 pb-3 dark:border-gray-700">
        <div className=" space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2">
            {/* <Greeting /> */}
            <h2 className="text-xl">Hi I'm</h2>
            <div
              className={` bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent ${headingColorClass} md:text-6xl md:leading-[86px]`}
            >
              Ashish Lotake, ! <i className="twa twa-waving-hand"></i>
            </div>
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              {/* <Heading /> */}
              {/* <h1 className="text-neutral-900 dark:text-neutral-200">
                I'm <span className="font-medium">{siteMetadata.author}</span> - an open-minded{' '}
                <span className="font-medium">Student </span> in{' '}
                <span className="font-medium ">India</span>
              </h1> */}
              <p className="leadnig-none">
                Welcome to my website.
                {/* <br /> */}I use it to share information about myself, case studies/projects, and
                my thoughts
              </p>
              <div className="flex flex-col space-y-1">
                <CustomLink href="/projects" className="hover:underline">
                  <span className="ml-2">🛠️ What have I built?</span>
                </CustomLink>
                <CustomLink href="/blog" className="hover:underline">
                  <span className="ml-2">✏️ My writings</span>
                </CustomLink>
                <CustomLink href="/snippets" className="hover:underline">
                  <span className="ml-2">🧑‍💻 Useful snippets</span>
                </CustomLink>
                <CustomLink href="/about" className="hover:underline">
                  <span className="ml-2">😎 More about me and myself</span>
                </CustomLink>
                <CustomLink href="/journey" className="hover:underline">
                  <span className="ml-2">🛣️ My Journey</span>
                </CustomLink>
                <CustomLink href="/now" className="hover:underline">
                  <span className="ml-2">⁉️ What I am doing?</span>
                </CustomLink>
                <CustomLink href="resume.ashishlotake.com" className="hover:underline">
                  <span className="ml-2">💼 Resume</span>
                </CustomLink>
              </div>
              <p className="mt-4">Happy learning!!</p>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-5 flex flex-col items-center gap-x-12 xl:flex-row"></div>
        <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Recent Posts
        </h2>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <CustomLink
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20  transition duration-100 hover:scale-[1] hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {/* <a> */}
                <li className="">
                  <article>
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                          {' • '}
                          <ViewCounter className="mx-1" slug={slug} />
                          views
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-4">
                        <div className="space-y-1">
                          <div>
                            <CardTitle>{title}</CardTitle>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1 text-sm">
                            {tags?.map((tag) => (
                              <small
                                key={tag}
                                className="rounded border border-gray-400  px-1 text-[14px] dark:border-gray-600"
                              >
                                {tag}
                              </small>
                            ))}
                          </div>
                          <div className="pt-1">
                            <Subtitle>{summary}</Subtitle>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
                {/* </a> */}
              </CustomLink>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end  pt-3 text-lg font-normal leading-6">
          <CustomLink href="/blog" className="hover:text-primary-500 " aria-label="all posts">
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
      {/* <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Lastest Project
      </h2>
      <div className="mx-autodivide-y divide-gray-400">
        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {projectsData.slice(0, MAX_DISPLAY).map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                github={d.github}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
      {projectsData.length > MAX_DISPLAY && (
        <div className="flex justify-end text-lg font-normal leading-6">
          <CustomLink href="/projects" className="hover:text-primary-500 " aria-label="all posts">
            All Posts &rarr;
          </CustomLink>
        </div>
      )} */}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
