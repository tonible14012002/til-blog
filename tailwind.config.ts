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
        md: "800px"
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
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
}