import { MDXLayoutRenderer } from '~/components'
import { getFileBySlug } from '~/libs/mdx'
import type { MdxFileData } from '~/types'
import Timeline from '~/components/Timeline'
import Resume from '~/components/Resume'

export async function getStaticProps() {
  let authorData = await getFileBySlug('authors', 'default')
  return { props: { authorData } }
}

export default function About({ authorData }: { authorData: MdxFileData }) {
  let { mdxSource, frontMatter } = authorData

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <Resume />
      <Timeline />
    </>
  )
}
