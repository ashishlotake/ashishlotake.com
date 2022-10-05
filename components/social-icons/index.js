import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import {  FiMail } from 'react-icons/fi'
import { RiExternalLinkLine } from 'react-icons/ri'
import { TbBrandGithub } from 'react-icons/tb'
import { FaKaggle } from 'react-icons/fa'

const components = {
  mail: FiMail,
  github: TbBrandGithub,
  facebook: AiOutlineFacebook,
  linkedin: FaLinkedinIn,
  twitter: AiOutlineTwitter,
  website: AiOutlineGlobal,
  external: RiExternalLinkLine,
  kaggle: FaKaggle
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-color-500 dark:hover:text-primary-color-dark-500 text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
