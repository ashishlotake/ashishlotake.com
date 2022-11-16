import { mobileNavLinks } from '~/data'
import { Link } from './Link'
import clsx from 'clsx'
import { Button } from './ProjectCard'
export function MobileNav({ navShow, onToggleNav }) {
  let className = clsx(
    `sm:hidden fixed w-full h-screen inset-0 bg-gray-200 dark:bg-black opacity-95 z-50 transition-transform transform ease-in-out duration-300`,
    navShow ? 'translate-x-0' : 'translate-x-full'
  )
  return (
    <div className={className}>
      <button
        type="button"
        aria-label="toggle modal"
        className="fixed w-8 h-8 right-[30px] top-4 cursor-auto focus:outline-none"
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
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <nav className="fixed h-full mt-12">
        {mobileNavLinks.map((link) => (
          <div key={link.title} className="px-8 py-3">
            <Link
              href={link.href}
              className="text-xl font-semibold tracking-wide text-gray-900 dark:text-gray-100"
              onClick={onToggleNav}
            >
              {link.title}
            </Link>
          </div>
        ))}
        <div className="px-6 py-3">
          <Link href="https://resume.ashishlotake.com/">
            <Button className="hiremeBTN p-[5px] mx-1 rounded-md">
              <span className="text-white text-xl">Résumé</span>{' '}
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
