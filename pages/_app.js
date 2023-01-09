import '../styles/globals.css'
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
      <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  )
}
