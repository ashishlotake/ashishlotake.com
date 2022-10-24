import formatDate from '@/lib/utils/formatDate'
import ViewCounter from '@/components/ViewCounter'
import Image from '@/components/Image'
import CustomLink from '@/components/Link'
import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <img className="rounded-xl  bg-[#f2e8de] md:rounded-2xl" src="/static/images/index.svg" />
      {/* <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-20">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Ashish Lotake
          </h1>
          <h2 className="mb-4 text-gray-700 dark:text-gray-200">
            DA, DS, ML & AI <span className="font-semibold">practitioner</span>
          </h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400">
            Welcome to my website.<br></br> I use it to share information about myself, case
            studies/projects, and my thoughts.
          </p>
        </div>
        <div className="relative mb-8 mr-auto hidden w-[80px] sm:mb-0 sm:w-[206px] md:block">
          <Image
            alt="Ashish Lotake"
            src={siteMetadata.siteLogo}
            className="bg-transparent"
            width="250px"
            height="250px"
          />
        </div>
      </div> */}
      <div>
        <h2 className="py-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, 3).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                <a className="w-full rounded-xl bg-gradient-to-r from-primary-300 to-primary-400 p-1 shadow-lg shadow-primary-200/10 duration-300 hover:scale-[102%] hover:shadow-xl hover:shadow-primary-500/10 dark:bg-gradient-to-r dark:from-darkprimary-300 dark:via-darkprimary-400 dark:to-darkprimary-300 dark:hover:shadow-darkprimary-500/10">
                  <div className="flex h-full cursor-pointer flex-col justify-between  rounded-lg bg-white py-3 dark:bg-background-color">
                    <div className="px-3">
                      <h3 className="m-0 w-full text-xl font-bold tracking-tight text-black dark:text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="flex-1 px-3 text-base tracking-tight text-gray-500">{summary}</p>

                    <div className="flex flex-wrap justify-between space-x-2 px-3 pt-3 text-xs dark:text-gray-400">
                      <span>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </span>
                      <span>
                        <ViewCounter className="mx-1" slug={slug} />
                        views
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      {posts.length > 1 && (
        <div className="flex justify-end  pt-4 text-lg font-normal leading-6">
          <CustomLink
            href="/blog"
            className="link-underline  text-primary-500 dark:text-darkprimary-500  "
            aria-label="all posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
      <TopProject />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}

function TopProject() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Lastest Project
      </h2>
      <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-1 lg:grid-cols-1">
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

      {projectsData.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-4 text-lg font-normal leading-6">
          <CustomLink
            href="/projects"
            className="link-underline  text-primary-500 dark:text-darkprimary-500"
            aria-label="all posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
    </>
  )
}
