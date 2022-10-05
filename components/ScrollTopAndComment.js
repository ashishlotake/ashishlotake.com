import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineComment } from 'react-icons/ai'
import { TbArrowBigUpLines } from 'react-icons/tb'

export default function ScrollTopAndComment() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 200) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <AnimatePresence>
        {show && (
          <div className="fixed right-8 bottom-8 hidden flex-col gap-3 md:flex">
            <motion.div
              className="    duration-50 transition-all"
              whileTap={{ scale: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 10 }}
              onClick={() => {
                handleScrollToComment
              }}
            >
              <button
                aria-label="Scroll To Top"
                type="button"
                onClick={handleScrollTop}
                className="hover:bg-gold ml-1 mr-1 h-8 w-8 rounded-full  p-1 transition-all sm:ml-4"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" className="">
      <path fill="currentColor" d="M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z"></path></svg> */}
                <TbArrowBigUpLines size={25} />
              </button>
            </motion.div>
            <button
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
              className="hoverbg-gold ml-1 mr-1 h-8 w-8 rounded-full  p-1 transition-all sm:ml-4"
            >
              <ThemeSwitch />
            </button>
            <motion.div
              className="   duration-50 transition-all"
              whileTap={{ scale: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 10 }}
              onClick={() => {
                handleScrollToComment
              }}
            >
              <button
                aria-label="Scroll To Comment"
                type="button"
                onClick={handleScrollToComment}
                className="hover:bg-gold ml-1 mr-1 h-8 w-8 rounded-full  p-1 transition-all sm:ml-4"
              >
                <AiOutlineComment size={25} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
