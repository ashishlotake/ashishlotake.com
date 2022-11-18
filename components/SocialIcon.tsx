import type { AnchorHTMLAttributes } from 'react'
import type { SocialIconProps } from '~/types'
import Facebook from '~/icons/facebook.svg'
import Github from '~/icons/github.svg'
import Linkedin from '~/icons/linkedin.svg'
import Mail from '~/icons/mail.svg'
import Twitter from '~/icons/twitter.svg'
import Youtube from '~/icons/youtube.svg'
import pixelfed from '~/icons/pixelfed.svg'

import mastodon from '~/icons/mastodon.svg'

// Icons from: https://simpleicons.org/
export let SocialIconsMap = {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  mastodon,
  pixelfed,
}

export function SocialIcon({ name, href }: SocialIconProps) {
  let SocialSvg = SocialIconsMap[name]
  let attrs: AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    target: name !== 'Mail' ? '_blank' : '_self',
    rel: 'noopener noreferrer',
  }

  return (
    <a rel="me" className="text-sm text-gray-500 transition hover:text-gray-600" {...attrs}>
      <span className="sr-only">{name}</span>
      <SocialSvg
        className={`h-6 w-6 fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400`}
      />
    </a>
  )
}
