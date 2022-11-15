import { headerNavLinks } from 'data'
import NextImage from 'next/image'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Button } from './ProjectCard'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  return (
    // <header className="overflowxhidden backdrop-blur supports-backdrop-blur:bg-white/80 py-2 sticky top-0 z-40 bg-white/75 dark:bg-dark/75">
    <header className="rounded-full border-2 border-gray-200/50 dark:border-gray-800/20  sticky top-2 z-40 bg-white mt-2  dark:bg-dark pr-1 md:pr-3">
      <div className="mx-auto max-w-3xl flex items-center justify-between px3 md:px-0">
        <div>
          <Link href="/" aria-label="Ashish's Blog">
            <div className="flex items-center justify-between">
              <div className="mr-3 flex justify-center items-center">
                <NextImage
                  src="/static/images/logo.jpg"
                  alt="Ashish's Blog logo"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <DropdownHover />
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <NavItem
                key={link.title}
                href={link.href}
                text={link.title}
                className="sm:px-3 sm:py-2 rounded-md"
              />
            ))}
            <Link href="https://resume.ashishlotake.com/">
              <Button className="hiremeBTN p-[6px] mx-1 rounded-[5px]">
                <span className="text-white">Résumé</span>{' '}
              </Button>
            </Link>
          </div>

          <ThemeSwitcher />
          <button
            className="w-8 h-8 ml-2 mr-1 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, text, className }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link
      href={href}
      className={clsx(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 hover:text-black hover:dark:text-white hover:bg-gray-200  hover:dark:bg-gray-800 transition-all',
        className
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  )
}

export function DropdownHover() {
  return (
    <div className="group relative ">
      <button className=" text-gray-700  rounded inline-flex items-center group">
        <NavItem href="/blog" text="Blog" className="sm:px-3 sm:py-2 rounded-md" />
      </button>

      {/* menu list */}
      <ul className="rounded absolute hidden pt-2 text-gray-700 p-1 group-hover:block ">
        <li className="overflow-hidden bg-gray-200hover:bg-gray-400 cursor-pointer rounded-t-md border dark:border-gray-800 bg-white dark:bg-bg">
          <NavItem href="/blog" text="Blog" className="py-2 px-6 w-full" />
        </li>
        <li className="overflow-hidden bg-gray-200hover:bg-gray-400  cursor-pointer rounded-b-md border dark:border-gray-800 bg-white dark:bg-bg">
          <NavItem href="/tags" text="Tags" className="py-2 px-6 w-full" />
        </li>
      </ul>
    </div>
  )
}
