import { MDXLayoutRenderer } from '~/components'
import { getFileBySlug } from '~/libs/mdx'
import type { MdxFileData } from '~/types'

export async function getStaticProps() {
  let xyzData = await getFileBySlug('authors', 'xyz')
  return { props: { xyzData } }
}

export default function About({ xyzData }: { xyzData: MdxFileData }) {
  let { mdxSource, frontMatter } = xyzData

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
