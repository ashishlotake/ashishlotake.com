const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './(components|constant|layouts|pages)/**/*.(ts|tsx)',
    './data/(blog|snippets|authors)/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'music-bar-1': {
          '0%, 100%': { height: '0%' },
          '50%': { height: '70%' },
        },
        'music-bar-2': {
          '0%, 100%': { height: '50%' },
          '25%': { height: '0%' },
          '75%': { height: '100%' },
        },
        'music-bar-3': {
          '0%, 100%': { height: '70%' },
          '15%': { height: '100%' },
          '65%': { height: '0%' },
        },
        'music-bar-4': {
          '0%, 100%': { height: '50%' },
          '35.7%': { height: '0%' },
          '85.7%': { height: '70%' },
        },
      },
      animation: {
        wiggle: 'wiggle 7s linear infinite',
        'music-bar-1': 'music-bar-1 .8s linear infinite',
        'music-bar-2': 'music-bar-2 .8s linear infinite',
        'music-bar-3': 'music-bar-3 .8s linear infinite',
        'music-bar-4': 'music-bar-4 .8s linear infinite',
      },
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
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: colors.sky,
        gray: colors.neutral,
        // dark: '#000',
        dark:'#070707',
        bg: '#101010',
        // bg:'#000',
        // darkwhite: '#d4d4d4',
        darkwhite: '#eae8e8',
        code: {
          green: '#22c55e',
          yellow: '#eab308',
          purple: '#a855f7',
          red: '#ef4444',
          blue: '#3b82f6',
        },
        spotify: '#1DB954',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
      },
      width: {
        5.5: '1.375rem',
      },
      height: {
        5.5: '1.375rem',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              fontWeight: '500',
              color: theme('colors.primary.500'),
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: theme('colors.primary.500'),
  
              '&:hover': {
                color: `${theme('colors.primary.500')} !important`,

              },
              code: { color: theme('colors.black') },
            },
            h1: {
              fontWeight: '800',
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
              backgroundColor: theme('colors.gray.50'),
              borderWidth: '2px',
            },
            code: {
              fontWeight: 1000,
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.300'),
              paddingLeft: '2px',
              paddingRight: '2px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              fontFamily: 'monospace',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              lineHeight:'20px',
              fontSize: '1rem',
              fontWeight: '0'
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.700'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.500'),
              backgroundColor: theme('colors.gray.100'),
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
            },
            li: {
              '&::marker': {
                color: theme('colors.gray.700'),
              },
            },
            tbody: {
              colors: theme('transparent'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.darkwhite'),
            a: {
              fontWeight: '500',
              color: theme('colors.primary.500'),
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: theme('colors.primary.500'),

              '&:hover': {
                color: `${theme('colors.primary.500')} !important`,
              },
              code: { fontFamily: 'monospace' },
            },
            h1: {
              fontWeight: '800',
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
              backgroundColor: theme('colors.bg'),
              // backgroundColor: '#101010',
            },
            code: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.bg'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.300') },
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
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700'),
              // backgroundColor: '#101010',
              backgroundColor: theme('colors.bg'),
            },
            li: {
              '&::marker': {
                color: theme('colors.gray.300'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
