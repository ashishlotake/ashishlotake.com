import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import DropMenu from './DropMenu'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
// import Link from './CustomLink'
import { HiOutlineBriefcase } from 'react-icons/hi'

import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import { HiOutlineExternalLink } from 'react-icons/hi'
import cn from '@/lib/classnames'
const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
}

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between md:hidden">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>

      <motion.div className=" mx-auto hidden min-h-screen px-5 md:block ">
        <Header />
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={router.asPath}
            initial={{
              opacity: 0,
              y: 50,
            }}
            layout
            animate={{ opacity: 1, y: 2 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <motion.main>{children}</motion.main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  )
}

export default LayoutWrapper

function Header() {
  return (
    <header className="flex items-center justify-between pt-4 pb-3 md:py-6">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between text-xl font-semibold">
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 900, damping: 17 }}
            >
              <button
                type="button"
                className="group flex  shrink-0 items-center rounded-lg transition"
              >
                <Image
                  alt=""
                  src={siteMetadata.siteLogo}
                  // className="rounded-full object-cover bg-slate-200 "
                  className="roundedfull  bg-transparent object-cover "
                  width="40px"
                  height="40px"
                  objectPosition="0% 60%"
                />
              </button>
            </motion.div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base  leading-5">
        <div className="mr-3 hidden sm:block">
          {headerNavLinks.map((link) => (
            <NavItem key={link.href} href={link.href} text={link.title} />
          ))}

          <Link href="/static/resume.pdf">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline  rounded-lg  sm:px-3 sm:py-2 md:inline-block"
            >
              Résumé
            </a>
          </Link>
        </div>
        <DropMenu />
        <ThemeSwitch />
      </div>
    </header>
  )
}

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-primary-500 dark:text-darkprimary-500 '
            : 'font-normal text-gray-700 dark:text-white',
          'link-underline hidden rounded-lg p-1  sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}
