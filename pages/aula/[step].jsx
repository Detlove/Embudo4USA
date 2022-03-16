import Head from 'next/head'
import { AulaProvider, useAula } from '@context/AulaContext'
import { useEffect } from 'react'

import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { VisitCounter } from '@components/VisitCounter/VisitCounter'
import { Video } from '@components/Video/Video'
import { NextLesson } from '@components/NexLesson/NextLesson'
import { LastStep } from '@components/LastStep/LastStep'
import { Landing } from '@components/Landing/Landing'
import { Background } from '@components/Background/Background'

import styles from './aula.module.css'

export default ({ setLoader }) => {
  return (
    <AulaProvider {...{ setLoader }}>
      <Aula />
    </AulaProvider>
  )
}

const Aula = () => {
  const {
    data,
    step,
    rStep
  } = useAula()

  useEffect(() => {
    /* Send Facebook Page Views */
    step === 1 && window.fbq('track', 'ViewContent')
    window.fbq('track', 'PageView')

    step > 1 && window.fbq('trackCustom', `Paso${rStep}`)
  }, [rStep])

  return (
    <>
      <Head>
        <title>Clase {step} | {data[step].title}</title>
      </Head>
      <main className={styles.cont}>
        <Background />
        <VisitCounter />
        <ProgressBar />
        <Video />
        {
          step < 4 &&
            <NextLesson />
        }
        {
          step >= 4 &&
            <LastStep />
        }
      </main>
      {
        rStep === 5 &&
          <Landing />
      }
    </>
  )
}
