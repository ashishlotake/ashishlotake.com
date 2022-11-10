import React from 'react'
import { PageSeo, PageTitle, ProfileCard, Subtitle } from '~/components'
import { siteMetadata } from '~/data'
import type { AuthorLayoutProps } from '~/types'

export function AuthorLayout({ children }: AuthorLayoutProps) {
  let title = 'About me'
  let description = 'More about me and myself'

  return (
    <>
      <PageSeo
        title={`${title} - ${siteMetadata.author} - ${siteMetadata.title}`}
        description={`${title} - ${siteMetadata.title} - ${description}`}
      />
      <div className="dividey divide-gray-200 dark:divide-gray-700">
        <div className="pt-3 md:pt-6 pb-4">
          <PageTitle>{title}</PageTitle>
          <Subtitle>{description}</Subtitle>
        </div>
        <div className="items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="grid flex-col items-center space-x-2  lg:grid-cols-1  xl:sticky xl:top-28">
            <div className="border2  ">
              <ProfileCard />
            </div>
          </div>
          <div className="prose max-w-none dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}

export default AuthorLayout
