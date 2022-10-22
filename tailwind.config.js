const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        // @ts-ignore
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: colors.indigo,
        darkprimary: colors.lime,
        //@ts-ignore
        gray: colors.neutral, // TODO: Remove ts-ignore after tw types gets updated to v3
        'background-color': '#111827',
        // 'background-color':'#1f1f1f',
        // 'background-color': '#111111',
        // 'slate': colors.gray,
        white: '#f9f5f0',
        black: '#333333',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.300')} !important`,
              },
              code: { color: theme('colors.primary.300') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.black'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.black'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.black'),
            },
            'h4,h5,h6': {
              color: theme('colors.black'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.amber.500'),
              backgroundColor: theme('colors.slate.700'),
              paddingLeft: '2px',
              paddingRight: '2px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.200'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.black'),
              borderLeftColor: theme('colors.gray.500'),
            },
            li: {
              '&::marker': {
                color: theme('colors.black'),
              },
            },
            tbody: {
              colors: theme('transparent'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),

            a: {
              color: theme('colors.darkprimary.500'),
              '&:hover': {
                color: `${theme('colors.darkprimary.300')} !important`,
              },
              code: { color: theme('colors.darkprimary.300') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.white'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.white'),
            },
            'h4,h5,h6': {
              color: theme('colors.white'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.slate.700'),
            },
            details: {
              backgroundColor: theme('colors.slate.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.white') },
            thead: {
              th: {
                color: theme('colors.white'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.gray.700'),
            },
            li: {
              '&::marker': {
                color: theme('colors.white'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
