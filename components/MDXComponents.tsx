import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import type { MdxLayoutRendererProps } from '~/types'
import { Image } from './Image'
import { Link } from './Link'
import { Pre } from './Pre'
import { Button } from './ProjectCard'

const StyledGIF = ({ image }) => {
  return (
    <>
      {image ? (
        <div className="relative ">
          <img alt={image} src={image} className="rounded-lg " />
        </div>
      ) : null}
    </>
  )
}

const StyledImage = ({ image }) => {
  return (
    <div>
      {image ? (
        <div className="relative ">
          <picture>
            <source
              srcSet={'/static/images/blog/' + image + '.webp'}
              type="image/webp"
              className="rounded-lg"
            />

            <img
              alt={image}
              src={'/static/images/blog/' + image + '.jpg'}
              className="rounded-lg  "
            />
          </picture>
        </div>
      ) : null}
    </div>
  )
}

let MDXComponents = {
  StyledGIF,
  Button,
  StyledImage,
  Image,
  a: Link,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    let Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export function MDXLayoutRenderer({ layout, mdxSource, ...rest }: MdxLayoutRendererProps) {
  let MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
