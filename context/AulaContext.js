import { createContext, useContext, useState, useEffect } from 'react'
import { data } from 'database/data'
import { useRouter } from 'next/router'

const AulaContext = createContext()

export const AulaProvider = (props) => {
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [rStep, setRStep] = useState(0)
  const [unlock, setUnlock] = useState(false)
  const [pauseVideo, setPauseVideo] = useState(false)

  const dataLength = Object.keys(data).length

  const goPurchase = (source) => {
    window.open(`${process.env.NEXT_PUBLIC_HOTMART_LINK}&src=${source}`, '_blank')
  }

  useEffect(() => {
    let lStep = parseInt(router.query.step)
    if (router.isReady && lStep >= 1 && lStep <= 5) {
      setRStep(lStep)

      lStep = lStep > dataLength
        ? dataLength
        : lStep

      setStep(lStep)
    } else if (router.isReady) {
      router.push('/aula/1')
    }
  }, [router])

  /* Send Page Views */
  useEffect(() => {
    if (rStep) {
      window.fbq('track', 'PageView')

      window.gtag('event', 'page_view', {
        page_title: data[step].pageTitle,
        page_location: document.URL,
        send_to: `${process.env.NEXT_PUBLIC_GTAG_ID}`
      })

      rStep === 1 && window.fbq('track', 'Lead')
      rStep > 1 && window.fbq('trackCustom', `Paso${rStep}`)
    }
  }, [rStep])

  if (!rStep) {
    return null
  }

  const value = {
    dataLength,
    data,
    rStep,
    step,
    setStep,
    unlock,
    setUnlock,
    router,
    pauseVideo,
    setPauseVideo,
    goPurchase
  }

  return <AulaContext.Provider value={value} {...props} />
}

export const useAula = () => {
  const context = useContext(AulaContext)
  if (!context) {
    console.log('error context')
  }
  return context
}
