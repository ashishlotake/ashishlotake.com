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
let headingColorClass =
  'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-primary-600'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <img className="" src="/static/images/light.svg" />
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
                <a className="group relative block h-full">
                  <div className="relative flex h-full  rounded-3xl  border-2 border-[#6366f1] border-opacity-50 pt-3 transition hover:border-opacity-100 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#6366f1] dark:border-[#c9dc56] dark:border-opacity-50 dark:hover:border-opacity-100 dark:group-hover:shadow-[8px_8px_0_0_#c9dc56]">
                    <div className="flex flex-1 flex-col pb-3">
                      <div className="flex flex-wrap px-3 pt-1 ">
                        {tags.slice(0, 4).map((tag) => (
                          <p
                            key={tag}
                            className="pr-2 text-xs tracking-wider  text-primary-400 dark:text-darkprimary-400"
                          >
                            #{tag}
                          </p>
                        ))}
                      </div>
                      <h3 className="px-3 pt-2 text-2xl font-semibold leading-snug text-black dark:text-white">
                        {title}
                      </h3>

                      <p className="flex-1 px-3 text-gray-500">{summary}</p>
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
