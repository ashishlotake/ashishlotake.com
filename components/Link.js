/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className="text-primary-500 dark:text-darkprimary-500" {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      className="special-underline-new text-primary-500 no-underline hover:text-gray-100 dark:text-darkprimary-500 dark:hover:text-gray-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}

export default CustomLink
