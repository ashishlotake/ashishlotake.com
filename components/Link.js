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
    <>
      <a
        className="special-underline-new text-primary-500 hover:text-primary-600 dark:text-darkprimary-500 dark:hover:text-darkprimary-400"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="ml-1 mb-0.5 inline-block h-5 w-5 fill-current"
      >
        <g data-name="Layer 2">
          <g data-name="external-link">
            <rect width="24" height="24" opacity="0" />
            <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
            <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
          </g>
        </g>
      </svg>
    </>
  )
}

export default CustomLink
