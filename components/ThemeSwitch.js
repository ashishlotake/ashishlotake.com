import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { TbBulb, TbBulbOff } from 'react-icons/tb'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const ThemeSwitch = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="ml-3 cursor-pointer rounded-full">
      <motion.button
        className="flex pb-1 h-8 w-8 items-center justify-center rounded-full  hover:ring-1 hover:ring-gray-500 "
        whileTap={{
          scale: 0.7,
          // rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          ThemeSwitch()
        }}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          // <HiSun className="h-4 w-4 hover:animate-spin" />
          <TbBulb size={25} />
        ) : (
          // <HiMoon className="h-4 w-4 hover:animate-spin" />
          <TbBulbOff size={25} />
        )}
      </motion.button>
    </div>
  )
}

export default ThemeSwitch
