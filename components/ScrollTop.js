import { useEffect, useState } from 'react'
import { TbArrowBigTop } from 'react-icons/tb'
import ThemeSwitch from './ThemeSwitch'
import { TbArrowBigUpLines } from 'react-icons/tb'
import { motion } from 'framer-motion'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div
      className={`fixed right-10 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <motion.button
        className="ml-3 flex h-8 w-8 items-center justify-center rounded-full  hover:ring-1 hover:ring-gray-500 "
        whileTap={{
          scale: 0.7,
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        aria-label="Scroll To Top"
        type="button"
        onClick={() => {
          handleScrollTop()
        }}
      >
        <TbArrowBigUpLines size={25} />
      </motion.button>
      <ThemeSwitch />
    </div>
  )
}

export default ScrollTop
