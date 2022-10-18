import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/extra.css'
// import '@fontsource/inter/variable-full.css'P
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import ProgressBar from 'react-scroll-progress-bar'
import ScrollTop from '@/components/ScrollTop'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done()
}

const colmode = [
  {
    dark: '#84cc16',
    light: '#6366f1',
  },
]

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const theme = <Chekctheme />

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <ProgressBar bgcolor="#f97316" />
        <ScrollTop />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>

        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}

import { useTheme } from 'next-themes'
import { th } from 'date-fns/locale'

const Chekctheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return <p>{theme}</p>
}
