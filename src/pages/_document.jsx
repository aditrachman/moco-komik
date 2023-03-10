import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-white antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family  =Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
          
        />
        <link href="https://fonts.googleapis.com/css2?family=Rowdies&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
