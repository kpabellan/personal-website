import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../components/Layout'
import { Comfortaa } from '@next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${comfortaa.variable} font-arial`}>

      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_PROPERTY_ID}`} />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_PROPERTY_ID}');
        `}
      </Script>

      <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  )
}