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

  if (!step) {
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
