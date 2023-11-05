/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/pliny/**/*.js',
	],
  theme: {
    container: {
      center: true,
      padding: {
        md:"2rem",
        DEFAULT: "1rem"
      },
      screens: {
        layout: "1024px",
        blog: "720px"
      },
    },
    extend: {
      width: {
        blog: "720px"
      },
      maxWidth: {
        blog: "720px"
      },
      colors: {
        background:"#fffcfa",
        mute: {
          DEFAULT: "#171717",
          foreground: "#737373"
        },
        secondary: {
          '50': '#ECFEFF',
          '100': '#CFFAFE',
          '200': '#A5F3FC',
          '300': '#67E8F9',
          '400': '#22D3EE',
          '500': '#06B6D4',
          '600': '#0891B2',
          '700': '#0E7490',
          '800': '#155E75',
          '900': '#164E63',
          '950': '#083344'
        },
        primary: {
          '100': '#FDEBE6',
          '200': '#FCD4CE',
          '300': '#F6B6B3',
          '400': '#EE9DA2',
          '500': '#E47D8D',
          '600': '#C45B75',
          '700': '#A43E61',
          '800': '#842750',
          '900': '#6D1845',
        },
        success: {
          '100': '#D4FCDB',
          '200': '#ABF9C0',
          '300': '#7EEEA7',
          '400': '#5CDE99',
          '500': '#2CC985',
          '600': '#20AC7D',
          '700': '#169074',
          '800': '#0E7466',
          '900': '#08605D',
        },
        info: {
          '100': '#CFFDF6',
          '200': '#A0FBF4',
          '300': '#6FF5F5',
          '400': '#4AE0EC',
          '500': '#14C1E0',
          '600': '#0E97C0',
          '700': '#0A72A1',
          '800': '#065281',
          '900': '#033B6B',
        },
        warning: {
          '100': '#FFFDD4',
          '200': '#FFFAAA',
          '300': '#FFF77F',
          '400': '#FFF460',
          '500': '#FFF02B',
          '600': '#DBCC1F',
          '700': '#B7A915',
          '800': '#93870D',
          '900': '#7A6E08',
        },
        danger: {
          '100': '#FFEAE8',
          '200': '#FFD2D1',
          '300': '#FFBABE',
          '400': '#FFA8B6',
          '500': '#FF8CAA',
          '600': '#DB6690',
          '700': '#B74679',
          '800': '#932C65',
          '900': '#7A1A58',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%'
          }
        }
      }
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       color: 'rgba(0,0,0)',
      //       maxWidth: '100%',
      //       'h1': {
      //         fontSize: '2.25rem',
      //         fontWeight: '800',
      //         letterSpacing: '-0.025em',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'h2': {
      //         borderBottomWidth: '1px',
      //         paddingBottom: '0.5rem',
      //         fontSize: '1.875rem',
      //         fontWeight: '700',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'h3': {
      //         fontSize: '1.5rem',
      //         fontWeight: '600',
      //         letterSpacing: '-0.025em',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'h4': {
      //         fontSize: '1.25rem',
      //         fontWeight: '600',
      //         letterSpacing: '-0.025em',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'h5': {
      //         fontSize: '1.125rem',
      //         fontWeight: '500',
      //         letterSpacing: '-0.025em',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'h6': {
      //         fontSize: '1rem',
      //         fontWeight: '500',
      //         scrollMargin: '5rem',
      //         marginTop: '2rem'
      //       },
      //       'a': {
      //         fontWeight: '500',
      //         textDecoration: 'underline',
      //         '--tw-underline-offset': '0.25rem',
      //       },
      //       'p': {
      //         lineHeight: '1.75',
      //         '&:not(:first-child)': {
      //         },
      //       },
      //       'ul': {
      //         marginLeft: '1rem',
      //         listStyleType: 'disc',
      //       },
      //       'ol': {
      //         marginLeft: '1.5rem',
      //         listStyleType: 'decimal',
      //       },
      //       'li': {
      //       },
      //       'blockquote': {
      //         borderLeftWidth: '2px',
      //         paddingLeft: '1rem',
      //         fontStyle: 'italic',
      //         '& > *': {
      //           color: 'rgba(0,0,0,.6)',
      //         },
      //       },
      //       'img': {
      //         borderRadius: '0.375rem',
      //         borderWidth: '1px',
      //       },
      //       'hr': {
      //         '@screen md': {
      //         },
      //       },
      //       'table': {
      //         width: '100%',
      //         overflowY: 'auto',
      //       },
      //       'tr': {
      //         margin: 0,
      //         borderTopWidth: '1px',
      //         padding: 0,
      //         backgroundColor: 'rgba(0,0,0,.03)',
      //       },
      //       'th': {
      //         border: '1px solid #e2e8f0',
      //         padding: '0.75rem',
      //         textAlign: 'left',
      //         fontWeight: '600',
      //         '&[align=center]': {
      //           textAlign: 'center',
      //         },
      //         '&[align=right]': {
      //           textAlign: 'right',
      //         },
      //       },
      //       'td': {
      //         border: '1px solid #e2e8f0',
      //         padding: '0.75rem',
      //         textAlign: 'left',
      //         '&[align=center]': {
      //           textAlign: 'center',
      //         },
      //         '&[align=right]': {
      //           textAlign: 'right',
      //         },
      //       },
      //       'pre': {
      //         overflowX: 'auto',
      //         borderRadius: '0.5rem',
      //         border: '1px solid #e2e8f0',
      //         backgroundColor: '#000',
      //         padding: '1rem',
      //       },
      //       'code': {
      //         position: 'relative',
      //         borderRadius: '0.25rem',
      //         border: '1px solid #e2e8f0',
      //         padding: '0.3rem',
      //         fontSize: '0.875rem',
      //         fontFamily: 'Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
      //       },
      //     },
      //   },
      // }, 
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}