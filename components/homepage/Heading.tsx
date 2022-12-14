import { siteMetadata } from '~/data'
import { TypedBios } from '~/components'
import { Link } from '~/components'

export function Heading() {
  return (
    <>
      <section id="intro" className="flex items-center justify-center flex-col pt-5 pb-6">
        <div className="text-center">
          <h1 className="intro text-transparent bg-clip-text bg-gradient-to-r from-[#79C2FF] to-[#4A5888] text-[45px] sm:text-7xl  mb-1 md:mb-3 font-bold ">
            {siteMetadata.author}
          </h1>
          <TypedBios />
          <p className="text-xl md:text-2xl pt-4 mb-2 font-semibold text-gray-800 dark:text-gray-100">
            DA, DS, ML &amp; AI practitioner{' '}
          </p>
          {/* <p className="text max-w-2xl text-gray-600 dark:text-gray-300 font-medium"> */}
          <p className="text-gray-700 max-w-2xl dark:text-gray-300">
            Welcome to my website <br></br>I am a data scientist, machine learning practitioner, and
            artificial intelligence practitioner, learning new thing everyday. We live in a world of
            internet where sharing mental model is never been easier and i feel like I should share
            my knowledge with others, I like to do it via blog posts and social media. For better or
            worse, I believe ML and AI will become an important part of our daily lives and will be
            available to everyone, and I intend to steer this boat.
            <br></br>
            <Link href="/about" className="company font-semibold text-primary-500">
              {' '}
              Read more about me
            </Link>
            , contact me via{' '}
            <Link
              className="company text-primary-500 font-semibold "
              href={`mailto:${siteMetadata.email}`}
            >
              mail
            </Link>{' '}
            and check out my{' '}
            <Link
              href="https://resume.ashishlotake.com/"
              className="company font-semibold text-primary-500 "
            >
              resume
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
