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

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className=" ">
          <PageTitle>
            Hi, I am <span className="text-primary-500 dark:text-primary-500">Ashish</span>
          </PageTitle>
          <Subtitle>
            Welcome to my website. I use it to share information about myself, case
            studies/projects, and my thoughts.
          </Subtitle>
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
                            <div className="flex flex-wrap gap-1 mt-2 text-sm">
                              {tags?.map((tag) => (
                              <small key={tag} className="text-[14px] border rounded  px-1 border-gray-400 dark:border-gray-600">
                                
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
          <CustomLink
            href="/blog"
            className="hover:text-primary-500 "
            aria-label="all posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
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
          <CustomLink
            href="/projects"
            className="hover:text-primary-500 "
            aria-label="all posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
