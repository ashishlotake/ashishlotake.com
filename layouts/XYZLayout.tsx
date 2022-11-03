import { PageSeo } from 'components/SEO'
import { PageTitle, ScrollTopButton, Subtitle } from '~/components'
import { siteMetadata } from '~/data'
import type { ResumeLayoutProps } from '~/types'

export function XYZLayout({ children }: ResumeLayoutProps) {
  let description = 'Some Random stuffs'

  return (
    <>
      <PageSeo
        title={`XYZ - ${siteMetadata.fullName} - ${description}`}
        description={`XYZ - ${siteMetadata.fullName} - ${description}`}
      />
      <ScrollTopButton />
      <div className="">
        <div className="pt-6">
          <PageTitle>xyz</PageTitle>
          <Subtitle>{description}</Subtitle>
        </div>
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="pt-8 pb-8 prose  dark:prose-dark max-w-none">{children}</div>
        </div>
      </div>
    </>
  )
}

export default XYZLayout
