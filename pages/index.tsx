import { PageSeo } from 'components/SEO'
import { FeaturedPosts, Heading } from '~/components'
import { siteMetadata } from '~/data'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import type { BlogFrontMatter } from '~/types'
import { projectsData } from '~/data'
import { ProjectCard } from '~/components'
import { Link } from '~/components'

export function getStaticProps() {
  let posts = getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <Heading />
      <TopProject />
      <FeaturedPosts posts={posts} />
      <Contact />
    </>
  )
}

function TopProject() {
  return (
    <>
      <div className="mt-4 flex flex-col ">
        <h2 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">Projects</h2>

        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {projectsData.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="pt-6 pb-10 flex justify-start  font-normal leading-6">
          <Link
            href="/projects"
            className="link-underline1 font-semibold text-primary-500   "
            aria-label="all posts"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}

function Contact() {
  return (
    <div className="my-10 flex flex-col ">
      <h2 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">Contact</h2>

      <p className=" font-normal text-gray-700 max-w-none dark:text-gray-300">
        If you want to collaborate or just want to have a conversation you can{' '}
        <Link
          className="company text-primary-500 font-semibold "
          href={`mailto:${siteMetadata.email}`}
        >
          mail
        </Link>{' '}
        me.
      </p>
    </div>
  )
}
