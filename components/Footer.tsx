import { siteMetadata } from '~/data'
import { Link } from './Link'
import { SocialIcon } from './SocialIcon'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'
import type { SpotifyNowPlayingData } from '~/types'
const { default: useSWR } = require('swr')
import { fetcher } from '~/utils'

export function Footer() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data as SpotifyNowPlayingData
  return (
    <footer className="mt-16 ">
      <SpotifyNowPlaying
        className="bg-gray-50/20 dark:bg-gray-900/40 rounded-t-lg"
        {...nowPlayingData}
      />
      <div className="flex flex-col items-center pt-4 border-t dark:border-gray-800">
        <div className="flex mb-3 space-x-4">
          <SocialIcon name="Github" href={siteMetadata.github} />
          <SocialIcon name="Twitter" href={siteMetadata.twitter} />
          <SocialIcon name="Linkedin" href={siteMetadata.linkedin} />
          <SocialIcon name="Mail" href={`mailto:${siteMetadata.email}`} />
        </div>
        <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link href="/">{siteMetadata.author}</Link>
        </div>
      </div>
    </footer>
  )
}
