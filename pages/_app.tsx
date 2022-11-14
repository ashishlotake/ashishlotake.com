import 'css/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { LayoutWrapper } from '~/components'
import { siteMetadata } from '~/data'

export default function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Analytics /> */}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
