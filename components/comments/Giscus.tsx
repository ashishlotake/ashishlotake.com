import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { GISCUS_COMMENTS_ID } from '~/constant'
import type { GiscusProps } from '~/types'

function Giscus({ config }: GiscusProps) {
  let { theme, resolvedTheme } = useTheme()
  let { themeURL, darkTheme, lightTheme } = config

  useEffect(() => {
    let isDark = theme === 'dark' || resolvedTheme === 'dark'
    let giscusTheme = isDark ? darkTheme : lightTheme
    if (themeURL) giscusTheme = themeURL

    let script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'ashishlotake/ashishlotake.com')
    script.setAttribute('data-repo-id', 'R_kgDOIIl5tg')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDOIIl5ts4CR7bn')
    script.setAttribute('data-mapping', 'title')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-theme', giscusTheme)
    script.setAttribute('crossOrigin', 'anonymous')
    script.async = true

    let commentsNode = document.getElementById(GISCUS_COMMENTS_ID)
    if (commentsNode) commentsNode.appendChild(script)

    return () => {
      let comments = document.getElementById(GISCUS_COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, resolvedTheme])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div className="giscus" id={GISCUS_COMMENTS_ID} />
    </div>
  )
}

export default Giscus
