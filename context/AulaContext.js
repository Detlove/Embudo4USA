import { createContext, useContext, useState, useEffect } from 'react'
import { data } from 'database/data'
import { useRouter } from 'next/router'

const AulaContext = createContext()

export const AulaProvider = (props) => {
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [unlock, setUnlock] = useState(false)
  const [showLanding, setShowLanding] = useState(false)
  const [pauseVideo, setPauseVideo] = useState(false)

  const dataLength = Object.keys(data).length

  useEffect(() => {
    let rStep = parseInt(router.query.step)
    if (router.isReady/*  && rStep >= 1 && rStep <= 5 */) {
      /* Validate that the step is not greater than the data length  */
      rStep === 5 &&
      setShowLanding(true)

      rStep = rStep > dataLength
        ? dataLength
        : rStep
      setStep(rStep)
    } else if (router.isReady) {
      router.push('/aula/1')
    }
  }, [router])

  if (!step) {
    return null
  }

  const value = {
    dataLength,
    data,
    step,
    setStep,
    unlock,
    setUnlock,
    router,
    showLanding,
    setShowLanding,
    pauseVideo,
    setPauseVideo
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
