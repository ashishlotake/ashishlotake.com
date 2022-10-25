// import Resume from 'pages/resume'
import Resume from '@/components/Resume'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Timeline from '@/components/Timeline'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <Resume />
      <Timeline />
      <div className="grid place-items-center pt-4">
        <a target="_blank" rel="noopener noreferrer" href="/static/resume.pdf">
          <button aria-label="Scroll To Top" type="button" className="pushable">
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">Résumé</span>
          </button>
        </a>
      </div>
    </>
  )
}
