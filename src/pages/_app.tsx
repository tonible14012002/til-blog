import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Layout as DefaultLayout } from '@/components/common/Layout'
import { UnderConstructModal } from '@/components/common/UnderConstructModal/UnderConstructModal'
import { Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})


const TopProgressBar = dynamic(() => import('@/components/common/Layout/Nprogress'), {
  ssr: false,
})


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: () => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? DefaultLayout
  return (
  <Layout>
    <TopProgressBar/>
    <Component {...pageProps} />
    <UnderConstructModal/>
  </Layout>
  )
}
