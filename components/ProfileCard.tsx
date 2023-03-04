import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ProfileCardInfo, SpotifyNowPlaying } from '~/components'
import { fetcher } from '~/utils'
import type { SpotifyNowPlayingData } from '~/types'
const { default: useSWR } = require('swr')

export function ProfileCard() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data as SpotifyNowPlayingData

  let ref = useRef(null)
  let [style, setStyle] = useState<React.CSSProperties>({})

  return (
    <div className="scale-100  z-10 hover:z-50 transition-all duration-200 ease-out lg:mb-8 xl:mb-0 w-full bg-gradient-to-r from-[#c0c0aa]/20 via[#c0c0aa]25 to-[#1cefff]/20 rounded-xl p-2 lg:p-0">
      <div
        style={style}
        className="flex flex-col transition-all duration-200 ease-out  overflow-hidden"
      >
        <div className="m-auto items-center  bg-transparent pb-1">
          <Image
            src={'/static/images/logo.jpg'}
            alt="avatar"
            width={250}
            height={250}
            className="object-cover xl:rounded-md rounded-full"
          />
        </div>
        <SpotifyNowPlaying
          className="bg-dark dark:bg-white text-white dark:text-black rounded-t-md md:hidden lg:flex"
          {...nowPlayingData}
        />
        <span className="h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-b-md md:hidden lg:flex"></span>
        <ProfileCardInfo />
      </div>
    </div>
  )
}
