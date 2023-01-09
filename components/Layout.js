import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kobey Pabellan</title>
        <meta name='description' content='Kobey Pabellan Portfolio Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kpicon.ico' />
      </Head>

      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}