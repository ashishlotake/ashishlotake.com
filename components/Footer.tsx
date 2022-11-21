import { siteMetadata } from '~/data'
import { Link } from './Link'
import { SocialIcon } from './SocialIcon'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'
import type { SpotifyNowPlayingData } from '~/types'
const { default: useSWR } = require('swr')
import { fetcher } from '~/utils'
import { Button } from './ProjectCard'
import Image from 'next/image'

export function Footer() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data as SpotifyNowPlayingData
  return (
    <footer className="mt-16 ">
      <SpotifyNowPlaying className=" dark:bg-bg bg-white rounded-t-lg" {...nowPlayingData} />
      <div className="flex flex-col items-center pt-4 border-t dark:border-gray-800">
        <HirMeBtn />
        <div className="flex mt-2 space-x-4">
          <SocialIcon name="Github" href={siteMetadata.github} />
          <SocialIcon name="Mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon name="Twitter" href={siteMetadata.twitter} />
          <SocialIcon name="Linkedin" href={siteMetadata.linkedin} />
          {/* <SocialIcon name="pixelfed" href="https://pixelfed.social/@ashishlotake" /> */}
          <SocialIcon name="pixelfed" href="https://portfolio.pixelfed.social/ashishlotake" />
          {/* <SocialIcon name="mastodon" href="https://mastodon.social/@ashish02lotake" /> */}
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
        <Link
          href="https://www.buymeacoffee.com/ashishlotake"
          aria-label=" buymeacoffee ashishlotake"
        >
          <Button className="">
            <Image alt="BuyMeCoffe" src="/static/images/bmc-button.png" height="20" width="150" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
