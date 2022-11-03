import { useState } from 'react'
import { MAIN_CONTENT_MIN_HEIGHT } from '~/constant'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { SectionContainer } from './SectionContainer'

export function LayoutWrapper({ children }) {
  let [navShow, setNavShow] = useState(false)
  let onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <Header onToggleNav={onToggleNav} />
      <SectionContainer>
        <div className="flex flex-col justify-between">
          <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}
