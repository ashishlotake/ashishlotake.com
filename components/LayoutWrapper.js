import Image from 'next/image'
import { motion } from 'framer-motion'
import DropMenu from './DropMenu'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import CustomLink from './Link'
import Link from 'next/link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
// import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
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
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-8">
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
                      width="50px"
                      height="50px"
                      objectPosition="0% 60%"
                    />
                  </button>
                </motion.div>
              </div>
            </Link>
          </div>
          <div></div>
          <div className="flex items-center text-base  leading-5">
            <div className="mr-3 hidden sm:block">
              {headerNavLinks.map((link) => (
                <NavItem key={link.href} href={link.href} text={link.title} />
              ))}
              <NavItem href="https://resume.ashishlotake.com/" text="Résumé" />
            </div>
            <DropMenu />
            <ThemeSwitch />
          </div>
        </header>
        <motion.div
          key={router.asPath}
          className="mb-auto"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          <motion.main>
            <main className="mb-auto">{children}</main>
          </motion.main>
        </motion.div>

        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-primary-500 dark:text-darkprimary-500 dark:text-white'
            : 'font-normal text-gray-700 dark:text-white',
          'link-underline hidden rounded-lg p-1 transition-all sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}
