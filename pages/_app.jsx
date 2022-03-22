import '@styles/global.css'

import { AppProvider } from '@context/AppContext.js'
import Script from 'next/script'

export default (props) => {
  return (
    <AppProvider>
      <MyApp {...props} />
    </AppProvider>
  )
}

function MyApp ({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`} />
      <Script
        id='ga4'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}', {
            send_page_view: false
          });
        `
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id='facebook-pixel'
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL});
        `
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
