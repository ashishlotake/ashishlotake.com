import { PageSubHeading, PageTitle, Subtitle } from '@/components/PageTitle'
// import Link from '@/components/Link'
import Analytics from 'components/metrics/Analytics'
// import Twitter from '@/components/metrics/Twitter'
import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import TopTracks from '@/components/TopTracks'
import NowPlaying from '@/components/NowPlaying'

export default function Stats() {
  return (
    <>
      <PageSEO
        title={`Stats - ${siteMetadata.author}`}
        description="Statistics about my blog, Github, Twitter and more"
      />
      <div className="mx-auto overflow-hidden">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <PageTitle>Stats</PageTitle>
          <Subtitle>I use this dashboard to track various metrics across platforms.</Subtitle>
        </div>
        <div className="pt-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
          <div className="grid  w-full grid-cols-1 justify-center gap-4 py-2 sm:grid-cols-1 sm:text-start md:text-center">
            <Analytics />
          </div>
        </div>
        <div className="mt-3">
          <PageSubHeading>
            My <span className="text-green-500">Spotify</span> Top Songs
          </PageSubHeading>
        </div>
        <Subtitle>
          Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
        </Subtitle>
        <div>
          <NowPlaying />
        </div>
        <p className="pb-3">Click to the track image to listen to the preview!</p>

        <TopTracks />
        <div className="flex flex-col pl-4 pt-10">
          <p className="text-md text-gray-600 dark:text-gray-400">
            Do you know a good song I should listen to?
          </p>
          <a
            className="text-md mt-4 rounded-full border px-8 py-2 text-center font-normal text-gray-800 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white dark:text-gray-200"
            href="https://twitter.com/messages/compose?recipient_id=1552051098&text=Hey Ashish, you should listen to:"
            data-screen-name="@Ashish02lotake"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ashish you should listen to...
          </a>
        </div>
      </div>
    </>
  )
}
