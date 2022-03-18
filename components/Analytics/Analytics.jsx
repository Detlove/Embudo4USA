import Script from 'next/script'
import { useEffect } from 'react'
import { useAula } from '@context/AulaContext'

export const Analytics = () => {
  const { step, rStep, data } = useAula()
  const { pageTitle } = data[step]

  useEffect(() => {
    /* Send Facebook Page Views */
    window.fbq('track', 'PageView')

    console.log({
      page_title: pageTitle,
      page_location: `${document.URL}`,
      send_to: `${process.env.NEXT_PUBLIC_GA4_ID}`
    })

    /* Send Analytics Page Views */
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: `${document.URL}`,
      send_to: `${process.env.NEXT_PUBLIC_GA4_ID}`
    })
  }, [rStep])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} />
      <Script
        id='ga4'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
            send_page_view: false,
            debug_mode: true
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
    </>
  )
}
