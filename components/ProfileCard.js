import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import NowPlaying from './NowPlayingFooter'
import CustomLink from './CustomLink'

function ProfileCardInfo() {
  return (
    <div className="hidden py-2 xl:block">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Ashish Lotake</h3>
      <h5 className=" text-gray-700 dark:text-gray-400">Learner | Builder</h5>

      <div className="mt-2 mb-2 space-y-1 ">
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className=" px-2">Student @ UoH</p>
        </div>
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-current-location"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="3"></circle>
            <circle cx="12" cy="12" r="8"></circle>
            <line x1="12" y1="2" x2="12" y2="4"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="20" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line>
          </svg>
          <p className="px-2">
            Ahmednagar, India 🇮🇳
            <span className="flag-vn ml-1 align-middle"></span>
          </p>
        </div>
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5"></path>
            <path d="M12 11v-8h4l2 2l-2 2h-4"></path>
            <path d="M6 15h1"></path>
          </svg>
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
            />
          </svg>
          <p className="px-2">
            <a
              target="_blank"
              href={siteMetadata.twitter}
              rel="noreferrer"
              className="hover:underline"
            >
              tw/{siteMetadata.socialAccount.twitter}
            </a>
          </p>
        </div>
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
            />
          </svg>
          <p className="px-2">
            <a
              target="_blank"
              href={siteMetadata.github}
              rel="noreferrer"
              className="hover:underline"
            >
              gh/ashishlotake
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import fetcher from 'lib/fetcher'

const { default: useSWR } = require('swr')

export function ProfileCard() {
  let response = useSWR('/api/spotify', fetcher)
  let nowPlayingData = response.data

  let ref = useRef(null)
  let [style, setStyle] = useState(React.CSSProperties)

  let onMouseMove = useCallback((e) => {
    if (!ref.current || window.innerWidth < 1280) return

    let { clientX, clientY } = e
    let { width, height, x, y } = ref.current.getBoundingClientRect()
    let mouseX = Math.abs(clientX - x)
    let mouseY = Math.abs(clientY - y)
    let rotateMin = -10
    let rotateMax = 8
    let rotateRange = rotateMax - rotateMin

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    let { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div className="mb-8 xl:mb-0" style={{ perspective: '600px' }} ref={ref}>
      <div
        style={style}
        className="flex flex-col  overflow-hidden  bg-transparent shadow-cyan-100/50 duration-200 dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg"
      >
        <Image
          src={'/static/images/logo2.svg'}
          alt="avatar"
          width="450px"
          height="350px"
          className="object-cover"
          objectPosition="10% 50%"
        />
        <div className="">
          <div className="bg-background-color px-2 py-2 text-white xl:py-1">
            <NowPlaying {...nowPlayingData} />
          </div>
          <div className="xl:px-2">
            <ProfileCardInfo />
          </div>
        </div>
        <span className="h-1.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      </div>
    </div>
  )
}
