import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://player.vimeo.com' />
        <link rel='preconnect' href='https://i.vimeocdn.com' />
        <link rel='preconnect' href='https://f.vimeocdn.com' />
        <link rel='preconnect' href='https://fresnel.vimeocdn.com' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Poppins:100,200,300,regular,500,600,700,800,900&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
