import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import { motion } from 'framer-motion'
import { PageTitle, Subtitle, CardTitle } from '@/components/PageTitle'
import Link from '@/components/CustomLink'

export default function Journey() {
  return (
    <>
      <PageSEO title={`Journey - ${siteMetadata.author}`} description="My journey" />

      <div className="">
        <div className="mb-2 max-w-xl border-b border-gray-200 dark:border-gray-700 ">
          <PageTitle>Journery</PageTitle>
          <Subtitle>Growing everyday a bit.</Subtitle>
        </div>
        <CardTitle>
          Checkout{' '}
          <Link href="/now" className="special-underline">
            what I am doing right now
          </Link>{' '}
          for more.
        </CardTitle>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.9 }}
        variants={{
          hidden: {
            opacity: 0.5,
            y: 10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        <Timeline />
      </motion.div>
    </>
  )
}
