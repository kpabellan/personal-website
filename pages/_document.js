import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/kpicon.ico" type="image/x-icon" />
        <meta property="og:image" content="/kpicon.ico" />
        <meta property="og:image:type" content="image/x-icon" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <body className="scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}