import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
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
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col pr-8">
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
            className="roundedfull  bg-transparent object-cover "
            width="250px"
            height="250px"
            objectPosition="0% 60%"
          />
        </div>
      </div>

      <div>
        <div className="mb-5 flex flex-col items-center xl:flex-row"></div>
        <h2 className="pb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                <a>
                  <article className=" flex h-full flex-col rounded-lg shadow-xl dark:bg-[#0e141b]  dark:shadow-black">
                    {/* <article className='border-2 h-full flex rounded-md hover:border-primary-500'> */}
                    <div className="flex flex-1 flex-col px-6 py-3">
                      <div className=" leading-none">
                        <div className="flex flex-wrap pt-1 ">
                          {tags.slice(0, 4).map((tag) => (
                            <p key={tag} className="pr-2 text-xs tracking-wider  text-primary-400">
                              {/* <Tag key={tag} text={tag} /> */}#{tag}
                            </p>
                          ))}
                        </div>
                      </div>
                      <h3 className=" py-2 text-2xl font-semibold leading-snug">{title}</h3>
                      <p className="flex-1 text-gray-500">{summary}</p>
                      <div className="flex flex-wrap justify-between space-x-2 pt-3 text-xs dark:text-gray-400">
                        <span>
                          <time dateTime={date}>{formatDate(date)}</time>
                        </span>
                        <span>
                          <ViewCounter className="mx-1" slug={slug} />
                          views
                        </span>
                      </div>
                    </div>
                  </article>
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
            className="link-underline  text-primary-500  "
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
      <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-2">
        {projectsData.slice(0, MAX_DISPLAY).map((d) => (
          <article
            key={d.github}
            className=" flex h-full flex-col rounded-lg shadow-xl dark:bg-[#0e141b]  dark:shadow-black"
          >
            {/* <Image
                src={d.imgSrc}
                alt="avatar"
                width="450px"
                height="250px"
                className="object-cover"
                objectPosition="10% 10%"
                /> */}
            <div className="flex flex-1 flex-col px-6 py-3">
              <h3 className=" py-2 text-2xl font-semibold leading-snug">{d.title}</h3>
              <p className="flex-1 text-gray-500">{d.description}</p>
              {/* <Subtitle>{d.description}</Subtitle> */}
              <div className="flex flex-wrap justify-between space-x-2 pt-3 text-xs dark:text-gray-400">
                {d.github ? (
                  <button
                    type="submit"
                    className="w-auto rounded-full bg-slate-200 p-2 text-sm text-white transition-transform hover:scale-[1.2] dark:bg-slate-800"
                  >
                    <SocialIcon kind="github" href={d.github} size="8" />
                  </button>
                ) : null}

                {d.href ? (
                  <button
                    type="submit"
                    className="ml-6 w-auto rounded-full bg-slate-200 p-2 text-lg text-white transition-transform hover:scale-[1.2] dark:bg-slate-800"
                  >
                    {d.href ? <SocialIcon kind="external" href={d.href} size="8" /> : null}
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {projectsData.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-4 text-lg font-normal leading-6">
          <CustomLink
            href="/projects"
            className="link-underline  text-primary-500 "
            aria-label="all posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
    </>
  )
}
