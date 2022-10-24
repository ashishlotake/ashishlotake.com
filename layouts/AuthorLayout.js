import { PageTitle, Subtitle } from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { ProfileCard } from '@/components/ProfileCard'
import TechIcons from '@/components/TechIcons'

const socialslinks = [
  {
    social: 'socialtwitter',
    href: 'https://twitter.com/messages/compose?recipient_id=1552051098&text=Hey Ashish',
  },
  {
    social: 'socialgit',
    href: 'https://github.com/ashishlotake',
  },
  {
    social: 'sociallinkedin',
    href: 'https://www.linkedin.com/in/ashish-lotake/',
  },
  {
    social: 'socialmail',
    href: 'mailto:ashishlotake@duck.com',
  },
]

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
      <div className="">
        <div className="border-b border-gray-400 dark:border-gray-600">
          <div className="max-w-xl ">
            <PageTitle>About</PageTitle>
            <Subtitle>
              Data scientist 👨‍💻, Machine learning 🤖 & artificial intelligence 🧠 practitioner
            </Subtitle>
          </div>
        </div>
        <div className="items-start space-y-2 pt-5 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="block xl:hidden">
            <ProfileCard />
          </div>
          <div className="flex flex-col items-center  space-x-2  xl:sticky xl:top-0">
            <div className="hidden xl:block">
              <ProfileCard />
            </div>
            <div className="pt-2 text-gray-500 dark:text-gray-400">
              {siteMetadata.occupation} @ {siteMetadata.company}
            </div>
            <div className="flex flex-row gap-3 pt-2 ">
              {socialslinks.map((d) => (
                <a
                  key={d.href}
                  // className="rounded-full border text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                  href={d.href}
                  data-screen-name="@lone_Musk"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TechIcons techs={[d.social]} />
                </a>
              ))}
            </div>
          </div>
          <div className="prose max-w-none dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
