import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAula } from '@context/AulaContext'

export const Analytics = () => {
  const router = useRouter()
  const { step } = useAula()

  const pageView = () => {
    window.fbq('track', 'PageView')
    window.fbq('trackCustom', `Paso${step + 1}`)
    console.log(`Se envio el evento: trackCustom Paso${step + 1}`)
  }

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', pageView)
    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [step, router.events])

  return (
    <>
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`} />
      <Script
        id='gtag'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
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
          fbq('track', 'PageView');
          fbq('track', 'Lead');
        `
        }}
      />
    </>
  )
}
