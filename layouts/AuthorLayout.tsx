import React from 'react'
import { PageSeo, PageTitle, ProfileCard, Subtitle } from '~/components'
import { siteMetadata } from '~/data'
import type { AuthorLayoutProps } from '~/types'

export function AuthorLayout({ children }: AuthorLayoutProps) {
  let title = 'About me'
  let description1 = 'More about me and myself'
  let description =
    "A data scientist and machine learning engineer who is looking for an institution that offers the opportunity to learn new technologies and grow as a data scientist and machine learning engineer. I am excited to be a part of this team and wants to help contribute to the institution's success"

  return (
    <>
      <PageSeo
        title={`${title} - ${siteMetadata.author}`}
        description={`${title} - ${siteMetadata.title} - ${description}`}
      />
      <div className="dividey divide-gray-200 dark:divide-gray-700">
        <div className="pt-3 md:pt-6 pb-4">
          <PageTitle>{title}</PageTitle>
          <Subtitle>{description1}</Subtitle>
        </div>
        <div className="items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className=" flex-col items-center space-x-2  lg:grid-cols-1  xl:sticky xl:top-28">
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
