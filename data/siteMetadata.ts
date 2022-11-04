export let siteMetadata = {
  title: "Ashish Lotaks's Portfolio",
  author: 'Ashish Lotake',
  fullName: 'Ashish Lotake',
  headerTitle: "Ashish's digital garden",
  description:
    'Dive deep into nitty-gritty of Data science, Machine learning & Artificial Intelligence with me!',
  language: 'en-us',
  siteUrl: 'https://ashishlotake.com',
  siteRepo: 'https://github.com/ashishlotake/ashishlotake.com',
  siteLogo: '/static/images/logo.svg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hello@ashishlotake.com',
  github: 'https://github.com/ashishlotake',
  linkedin: 'https://www.linkedin.com/in/ashish-lotake/',
  twitter: 'https://twitter.com/Ashish02lotake',
  locale: 'en-US',
  occupation: 'Student',
  company: 'University of Hyderabad',
  /** Choose one of these Analytics providers */
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: false, // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'ashishlotake',
    twitter: 'ashish02lotake',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  giscusConfig: {
    repo: 'ashishlotake/ashishlotake.com',
    repositoryId: 'R_kgDOIIl5tg',
    category: 'General',
    categoryId: 'DIC_kwDOIIl5ts4CR7bn',
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  utterancesConfig: {
    // Ref: https://utteranc.es/
    repo: '', // `process.env.UTTERANCES_REPO=`
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  disqus: {
    // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    shortname: '', // `process.env.DISQUS_SHORTNAME=`
  },
}
