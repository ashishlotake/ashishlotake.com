import Link from 'next/link'

const CustomLink = ({ href, children, className, showIcon = true, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href}>
        <a className={className} {...rest}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`items-center ${className ? className : ''}`}
        {...rest}
      >
        {children}
        {showIcon && ''}
      </a>
    </Link>
  )
}

export default CustomLink
