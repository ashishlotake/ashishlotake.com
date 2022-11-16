import { siteMetadata } from '~/data'
import { Link } from './Link'
import { SocialIcon } from './SocialIcon'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'
import type { SpotifyNowPlayingData } from '~/types'
const { default: useSWR } = require('swr')
import { fetcher } from '~/utils'
import { Button } from './ProjectCard'
export function Footer() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data as SpotifyNowPlayingData
  return (
    <footer className="mt-16 ">
      <SpotifyNowPlaying className=" dark:bg-bg bg-white rounded-t-lg" {...nowPlayingData} />
      <div className="flex flex-col items-center pt-4 border-t dark:border-gray-800">
        <HirMeBtn />
        {/* <Button className='hiremeBTN p-3 mb-3'><span className='text-white'>Hire me</span> </Button> */}

        <div className="flex mb-3 space-x-4">
          <SocialIcon name="Github" href={siteMetadata.github} />
          <SocialIcon name="Twitter" href={siteMetadata.twitter} />
          <SocialIcon name="Linkedin" href={siteMetadata.linkedin} />
          <SocialIcon name="Mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon name="mastodon" href="https://mastodon.social/@ashish02lotake" />
        </div>
        <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{` © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link className="hover:text-primary-500" href="/">
            {siteMetadata.author}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export function HirMeBtn() {
  return (
    <div className=" flex items-center justify-center ">
      <div className="relative">
        <Link href={`mailto:${siteMetadata.email}`} aria-label="Ashish's Blog">
          <Button className="hiremeBTN p-3 mb-3">
            <span className="text-white font-bold italic uppercase">Hire me</span>{' '}
          </Button>
        </Link>
        <div className="absolute bg-green-500 rounded-full w-5 h-5 top-0 right-0 -mt-2 -mr-2  animate-ping"></div>
        <div className="absolute bg-green-500 rounded-full w-5 h-5 top-0 right-0 -mt-2 -mr-2 "></div>
      </div>
    </div>
  )
}
