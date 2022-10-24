import NowPlaying from './NowPlayingFooter'
import Image from '@/components/Image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import fetcher from 'lib/fetcher'

const { default: useSWR } = require('swr')

export function ProfileCard() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data

  let ref = useRef(null)
  let [style, setStyle] = useState(React.CSSProperties)

  return (
    <div className="" style={{ perspective: '600px' }} ref={ref}>
      <div
        style={style}
        className="lg:items-block  itemscenter shadow-g flex flex-col  overflow-hidden rounded-2xl rounded-2xl border-2 border-gray-500  bg-transparent pt-2 shadow-primary-500/50 duration-200 dark:shadow-darkprimary-700/50 xl:pt-0"
      >
        <div className="m-auto items-center bg-transparent xl:bg-background-color xl:dark:bg-white">
          <Image
            src={'/static/images/logo.jpg'}
            alt="avatar"
            width="250px"
            height="250px"
            className="rounded-full object-contain xl:rounded-none "
            objectPosition="10% 50%"
          />
        </div>
        <div className="">
          <div className="bg-background-color py-1 px-2 text-white dark:bg-white dark:text-black">
            <NowPlaying {...nowPlayingData} />
          </div>
        </div>
        <span className="h-1.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      </div>
    </div>
  )
}
