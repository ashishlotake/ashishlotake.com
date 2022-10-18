import { ProfileCard } from '@/components/ProfileCard'
import { PageTitle, Subtitle } from '@/components/PageTitle'

import { PageSEO } from '@/components/SEO'
export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="border-b border-gray-400 dark:border-gray-600">
        <div className="max-w-xl ">
          <PageTitle>About</PageTitle>
          <Subtitle>
            Data scientist 👨‍💻, Machine learning 🤖 & artificial intelligence 🧠 practitioner
          </Subtitle>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 pt-8 xl:grid xl:grid-cols-3 xl:space-y-0">
          <ProfileCard />
          <div className="prose prose-lg max-w-none pb-8 dark:prose-dark xl:col-span-2 xl:pl-8">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
