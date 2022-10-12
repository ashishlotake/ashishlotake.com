import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function ActivityLayout({ children, frontMatter }) {
  const { name } = frontMatter
  return (
    <>
      <PageSEO title={`Recommendation - ${siteMetadata.author}`} description="My Recommendation" />
      <div className="">
        <div className="mb-10 border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-xl ">
            <PageTitle>Recommendation</PageTitle>
            {/* <Subtitle>Few </Subtitle> */}
          </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
