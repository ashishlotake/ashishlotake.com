import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import CustomLink from './CustomLink'
// import CustomLink from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Menu as="div" className="relative  inline-block text-left">
      <div>
        <Menu.Button className=" mr-2 transform cursor-pointer rounded-full  hover:ring-1 hover:ring-gray-500  ">
          <motion.div
            className="flex h-8 w-8 items-center justify-center "
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            aria-label="Toggle List Menu"
            type="button"
          >
            {isOpen ? (
              <GiHamburgerMenu size={20} />
            ) : (
              //  <HamburgerMenuIcon size={20} />
              <GiHamburgerMenu size={20} />
            )}
          </motion.div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
        }}
        afterLeave={() => {
          toggleIcon()
        }}
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:text-white">
          <div className="block md:hidden">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <CustomLink
                    href="/"
                    className={classNames(
                      active
                        ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                        : 'text-gray-700 dark:text-gray-100',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </CustomLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <CustomLink
                    href="/blog"
                    className={classNames(
                      active
                        ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                        : 'text-gray-700 dark:text-gray-100',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Blogs
                  </CustomLink>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <CustomLink
                    href="/snippets"
                    className={classNames(
                      active
                        ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                        : 'text-gray-700 dark:text-gray-100',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Snippets
                  </CustomLink>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <CustomLink
                    href="/projects"
                    className={classNames(
                      active
                        ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                        : 'text-gray-700 dark:text-gray-100',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Projects
                  </CustomLink>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <CustomLink
                    href="/about"
                    className={classNames(
                      active
                        ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                        : 'text-gray-700 dark:text-gray-100',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    About
                  </CustomLink>
                )}
              </Menu.Item>
            </div>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <CustomLink
                  href="/tags"
                  className={classNames(
                    active
                      ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Blog Tags
                </CustomLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <CustomLink
                  href="/stats"
                  className={classNames(
                    active
                      ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Stats
                </CustomLink>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <CustomLink
                  href="/now"
                  className={classNames(
                    active
                      ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Now
                </CustomLink>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <CustomLink
                  href="/journey"
                  className={classNames(
                    active
                      ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Journey
                </CustomLink>
              )}
            </Menu.Item>
          </div>
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <CustomLink
                  href="/activity"
                  className={classNames(
                    active ? 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Activity
                </CustomLink>
              )}
            </Menu.Item>
          </div> */}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
