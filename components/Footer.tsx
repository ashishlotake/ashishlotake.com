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
        <HirMeBtn />

        <div className="flex mb-3 space-x-4">
          <SocialIcon name="Github" href={siteMetadata.github} />
          <SocialIcon name="Twitter" href={siteMetadata.twitter} />
          <SocialIcon name="Linkedin" href={siteMetadata.linkedin} />
          <SocialIcon name="Mail" href={`mailto:${siteMetadata.email}`} />
        </div>
        <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
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
        <div className="bg-white rounded-lg">
          <div className="mb-5">
            <Link href={`mailto:${siteMetadata.email}`} aria-label="Ashish's Blog">
              <div className="flex items-center justify-between ">
                <div className=" flex justify-center items-center">
                  <div className=" border-2 border-black dark:border-white relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all bg-black dark:bg-white rounded hover:bg-black group ">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-12 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="md:mt-1 relative w-full text-left text-white dark:text-black transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black font-extrabold leading-5 italic uppercase md:text-xl">
                      hire me
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute bg-green-500 rounded-full w-5 h-5 top-0 right-0 -mt-2 -mr-2  animate-ping"></div>
        <div className="absolute bg-green-500 rounded-full w-5 h-5 top-0 right-0 -mt-2 -mr-2 "></div>
      </div>
    </div>
  )
}
